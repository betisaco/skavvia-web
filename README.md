# SKAVVIA — Resmi Web Sitesi (skavvia.com)

SKAVVIA'nın resmi web sitesi; modern, hafif, tamamen statik ve GitHub Pages üzerinden ücretsiz yayınlanabilir şekilde React, TypeScript ve Vite ile geliştirilmiştir.

- **Resmi Domain:** `https://skavvia.com`
- **Resmi Destek:** `support@skavvia.com`
- **Mobil Uygulama Paket Adı:** `com.skavvia.mobile`
- **Slogan:** *Keşfet. Paylaş. İz Bırak.*

---

## 1. Proje Amacı ve Mimari

Bu proje, SKAVVIA mobil uygulamasının (Android/iOS) tanıtımını yapmak, resmi test APK'sını GitHub Releases üzerinden güvenli ve kontrollü dağıtmak, Google Play politikalarına tam uyumlu public Gizlilik Politikası, Kullanım Koşulları ve Hesap Silme sayfalarını barındırmak amacıyla hazırlanmıştır.

- **Statik Mimari:** Backend, sunucu veya ücretli hosting (Vercel, Netlify, Firebase vb.) bağımlılığı yoktur.
- **GitHub Pages Uyumu:** Hem doğrudan klasör bazlı statik sayfalar (`/about`, `/support`, `/privacy`, `/terms`, `/delete-account`, `/download`) hem de derin bağlantılar için `404.html` SPA yönlendirmesiyle çalışır.
- **Marka Kimliği:** SKAVVIA Figma tasarım sistemi ve mobil uygulamanın resmi marka renkleriyle (Forest Green: `#0F3D2E`, Stone Gray: `#6B7280`, Warm Off-White: `#F5F5F0`, Sunrise Gold: `#E9B949`) tam uyumludur.

---

## 2. Yerel Geliştirme (Local Development)

Projeyi yerel ortamda çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın (http://localhost:5173)
npm run dev

# TypeScript tip kontrolü
npm run lint

# Doğrulama testlerini çalıştırın
npm test
```

---

## 3. Production Build

Production build almak için:

```bash
npm run build
```

Bu komut:
1. `tsc` ile TypeScript kodunu derler ve tip denetimini gerçekleştirir.
2. `vite build` ile optimize edilmiş, ağaç budama (tree-shaking) yapılmış ve küçültülmüş statik varlıkları `dist/` klasörüne üretir.
3. `scripts/postbuild.js` ile GitHub Pages doğrudan route desteği için statik HTML klasörlerini (`dist/about/`, `dist/support/`, `dist/privacy/`, `dist/terms/`, `dist/delete-account/`, `dist/download/`) otomatik oluşturur.

---

## 4. GitHub Pages Deployment

Proje içerisinde `.github/workflows/deploy-pages.yml` adında bir GitHub Actions iş akışı yapılandırılmıştır.

### Dağıtım Adımları:
1. GitHub üzerinde `skavvia-web` adında bir repository oluşturun (veya mevcut repository'yi bağlayın).
2. Kodu `main` veya `master` dalına push edin:
   ```bash
   git remote add origin https://github.com/<kullanici-adi>/skavvia-web.git
   git branch -M main
   git push -u origin main
   ```
3. GitHub Repository > **Settings** > **Pages** menüsüne gidin:
   - **Build and deployment > Source**: `GitHub Actions` seçeneğini işaretleyin.
4. Push işleminden sonra GitHub Actions otomatik olarak build alır ve siteyi yayınlar.

---

## 5. Custom Domain Kurulumu (`skavvia.com`)

Projenin `public/CNAME` dosyası `skavvia.com` olarak yapılandırılmıştır ve build sırasında `dist/CNAME` içine kopyalanır.

1. GitHub Repository > **Settings** > **Pages** altında **Custom domain** alanına `skavvia.com` yazıp kaydedin.
2. **Enforce HTTPS** kutucuğunu işaretleyin (Let's Encrypt sertifikası GitHub tarafından otomatik oluşturulur).

---

## 6. ÇOK ÖNEMLİ: E-posta (`support@skavvia.com`) DNS Koruması

> [!CAUTION]
> `support@skavvia.com` aktif ve resmi bir e-posta adresidir.
> Domain DNS yapılandırması yapılırken:
> - **MX**, **SPF (TXT)**, **DKIM (TXT)**, **DMARC (TXT)** kayıtlarına KESİNLİKLE DOKUNMAYIN!
> - Nameserver (NS) kayıtlarını ASLA değiştirmeyin!
> - Yalnızca web sitesi trafiğini yönlendirmek için **A** veya **CNAME** kayıtlarını güncelleyin.

### Web Sitesi İçin Eklenecek / Güncellenecek Kayıtlar:
GitHub Pages apex domain (`skavvia.com`) için aşağıdaki A kayıtları DNS sağlayıcınıza eklenir:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Alt domain (`www.skavvia.com`) için CNAME kaydı:
- `www` -> `<kullanici-adi>.github.io`

---

## 7. GitHub Release APK Bağlantısı Nasıl Güncellenir?

APK dosyaları repository içine commit edilmez. Son test sürümü olan **66 MB** boyutundaki `Skavvia v1.0.5.1-arm64.apk` dosyası GitHub Releases üzerinden yayınlanacaktır.

1. GitHub Repository > **Releases** > **Draft a new release** seçeneğine tıklayın.
2. **Tag version:** `v1.0.5.1`
3. **Release title:** `SKAVVIA Android v1.0.5.1 (arm64-v8a)`
4. Dosyayı release asset olarak yükleyin (önerilen dosya adı: `Skavvia-v1.0.5.1-arm64.apk`).
5. Release'i yayınlayın ve yüklenen APK'nın doğrudan indirme bağlantısını (Direct Download URL) kopyalayın.
6. `src/config/download.ts` dosyasını açıp URL'yi güncelleyin:
   ```typescript
   export const DOWNLOAD_CONFIG = {
     androidApkUrl: 'https://github.com/<kullanici-adi>/skavvia-web/releases/download/v1.0.5.1/Skavvia-v1.0.5.1-arm64.apk',
     androidVersion: '1.0.5.1',
     androidArchitecture: 'arm64-v8a',
     approximateSize: '66 MB',
     // ...
   };
   ```
7. Değişikliği commit edip push ettiğinizde `/download` sayfasındaki indirme butonu otomatik olarak aktif hale gelecektir. URL boş kaldığı sürece buton kullanıcıyı yanıltmamak adına güvenli "Hazırlanıyor" durumunda kalır.

---

## 8. Android App Links Sonraki Aşaması

Projede ileride Android App Links (derin bağlantı) desteği sağlayabilmek amacıyla `public/.well-known/assetlinks.json` şablonu hazırlanmıştır.

- **Mevcut Durum:** Şablon içerisinde güvenlik gereği sahte bir SHA-256 imzası **kullanılmamıştır**.
- **Sonraki Adım:** Mobil uygulamanın production release keystore sertifikasının SHA-256 parmak izi alındığında `assetlinks.json` içerisindeki parmak izi alanı gerçek değerle güncellenecektir.
- Bu aşamada mobil uygulama kodunda hiçbir değişiklik yapılmamıştır.
