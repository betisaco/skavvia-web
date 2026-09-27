import React, { useEffect } from 'react';
import { Shield, Lock, Eye, Database, Globe, Mail, MapPin } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Gizlilik Politikası — SKAVVIA';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      {/* Title */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EEE7] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          Yasal Doküman (Taslak)
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101412] tracking-tight">
          Gizlilik Politikası
        </h1>
        <p className="text-sm text-[#8D9892]">
          Son Güncelleme: 28 Eylül 2026 | Sürüm: 1.0 (SKAVVIA Mobil v1.0.5.1 ve Web Uyumlu)
        </p>
        <p className="text-base text-[#646B78] leading-relaxed">
          SKAVVIA ("biz", "uygulama" veya "platform") olarak, kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına en üst düzeyde önem veriyoruz. Bu Gizlilik Politikası, SKAVVIA mobil uygulamasını (com.skavvia.mobile) ve resmi web sitemizi (skavvia.com) kullanırken hangi verilerinizin toplandığını, nasıl işlendiğini, hangi üçüncü taraf servislerle paylaşıldığını ve haklarınızı açıklamaktadır.
        </p>
      </div>

      <div className="bg-[#FFFFFF] rounded-2xl p-8 sm:p-10 border border-[#E1E4DE] shadow-sm space-y-10 text-[#646B78] text-sm leading-relaxed">
        
        {/* 1. Toplanan Veriler */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <Database className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-[#101412]">1. Hangi Verileri Topluyoruz?</h2>
          </div>
          <p>
            SKAVVIA, yalnızca uygulamanın temel keşif ve topluluk işlevlerini yerine getirebilmesi için gerekli olan minimum verileri toplar:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-[#101412]">Hesap ve Kimlik Bilgileri:</strong> E-posta adresiniz, belirlediğiniz kullanıcı adı (handle) ve görünen adınız (display name). Google ile giriş yapmayı seçtiğinizde Google tarafından doğrulanan temel profil tanımlayıcınız ve e-postanız.
            </li>
            <li>
              <strong className="text-[#101412]">Profil Bilgileri:</strong> İsteğe bağlı olarak profilinize eklediğiniz biyografi metni, şehir bilgisi, profil fotoğrafı (avatar) ve kapak görseli.
            </li>
            <li>
              <strong className="text-[#101412]">Kullanıcı Tarafından Oluşturulan İçerikler (UGC):</strong> Paylaştığınız keşif anları, fotoğraflar (1-5 adet), rotalar, rota durakları, açıklamalar, seyahat ipuçları, yorumlar ve beğeniler.
            </li>
            <li>
              <strong className="text-[#101412]">Mesajlaşma Verileri:</strong> Diğer SKAVVIA kullanıcılarıyla uygulama içinde gerçekleştirdiğiniz doğrudan metin mesajları ve iletilme/okunma durumları.
            </li>
            <li>
              <strong className="text-[#101412]">Sosyal Tercihler ve Kaydedilenler:</strong> Takip ettiğiniz/sizi takip eden profiller, engellediğiniz kullanıcılar, kaydettiğiniz rotalar ve duraklar.
            </li>
            <li>
              <strong className="text-[#101412]">Cihaz Bildirim Token'ları:</strong> Etkileşimler (beğeni, yorum, mesaj, takip isteği) hakkında sizi bilgilendirebilmek amacıyla cihazınıza atanan anlık bildirim belirteci (push token).
            </li>
          </ul>
        </section>

        {/* 2. Cihaz İzinleri ve Konum */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <MapPin className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-[#101412]">2. Cihaz İzinleri ve Konum Verilerinin İşlenmesi</h2>
          </div>
          <p>
            Uygulama deneyiminizi sağlamak amacıyla cihazınızdan aşağıdaki açık izinler talep edilir:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-[#101412]">Konum İzni (expo-location):</strong> Çevrenizdeki keşif noktalarını ve rotaları harita üzerinde size gösterebilmek amacıyla yalnızca uygulama kullanımdayken (foreground) konum bilginiz işlenir. Arka planda sürekli gizli konum takibi yapılmaz. Rota veya keşif oluştururken yer ve durak koordinatları kullanıcının kendi seçimiyle içeriğe eklenir.
            </li>
            <li>
              <strong className="text-[#101412]">Fotoğraf Galerisi ve Kamera İzni (expo-image-picker):</strong> Keşif anlarınıza fotoğraf ekleyebilmeniz ve profil resminizi güncelleyebilmeniz için cihazınızın kamerasına ve fotoğraf galerisine erişim izni istenir. Yalnızca sizin seçtiğiniz görseller yüklenir.
            </li>
            <li>
              <strong className="text-[#101412]">Bildirim İzni (expo-notifications):</strong> Size gelen mesajlar, yorumlar ve takip onayları hakkında anlık bildirim gönderebilmek için istenir. Cihaz ayarlarınızdan dilediğiniz zaman kapatabilirsiniz.
            </li>
          </ul>
        </section>

        {/* 3. Üçüncü Taraf Altyapı ve Servisler */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <Globe className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-[#101412]">3. Üçüncü Taraf Altyapı ve Servis Sağlayıcılar</h2>
          </div>
          <p>
            SKAVVIA, verilerinizi üçüncü taraf reklam ağlarına satmaz veya pazarlama amacıyla paylaşmaz. Hizmetin sürdürülebilmesi için yalnızca aşağıdaki güvenilir altyapı sağlayıcılar kullanılmaktadır:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-[#101412]">Supabase:</strong> Kimlik doğrulama, güvenli bulut veritabanı yönetimi ve kullanıcı tarafından yüklenen medya dosyalarının saklanması (Storage) amacıyla kullanılır.
            </li>
            <li>
              <strong className="text-[#101412]">Google Maps Platform & Places API:</strong> Keşif duraklarının haritada gösterilmesi ve mekan arama işlevleri için kullanılır.
            </li>
            <li>
              <strong className="text-[#101412]">Expo Application Services (EAS):</strong> Mobil anlık bildirim altyapısının işletilmesi amacıyla kullanılır.
            </li>
          </ul>
          <div className="p-4 bg-[#F5F5F0] rounded-xl border border-[#E1E4DE] text-xs text-[#2A684E]">
            <strong>Doğrulanan Güvenlik Notu:</strong> Uygulamamızda üçüncü taraf reklam izleme SDK'ları (Facebook Pixel, AdMob vb.) veya harici davranışsal analitik izleyiciler bulunmamaktadır.
          </div>
        </section>

        {/* 4. Veri Güvenliği ve Saklama */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-[#101412]">4. Veri Güvenliği ve Saklama</h2>
          </div>
          <p>
            Kişisel verileriniz ve iletişimleriniz TLS/SSL şifreleme protokolleri ile aktarılır. Veritabanımızda Satır Düzeyinde Güvenlik (Row Level Security - RLS) kuralları uygulanarak, kullanıcıların yalnızca yetkili oldukları verilere erişebilmesi garanti edilir.
          </p>
        </section>

        {/* 5. Kullanıcı Hakları ve Hesap Silme */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <Eye className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-[#101412]">5. Kullanıcı Hakları ve Hesap Silme (Google Play Uyumlu)</h2>
          </div>
          <p>
            Kullanıcılarımız KVKK ve geçerli veri koruma mevzuatları kapsamında verilerine erişme, düzeltme talep etme ve verilerinin tamamen silinmesini isteme hakkına sahiptir.
          </p>
          <p>
            Google Play Kullanıcı Verileri Politikası doğrultusunda, hesabınızı ve hesabınıza bağlı tüm verileri (profil, içerikler, fotoğraflar, mesajlar, kayıtlar) silme hakkına sahipsiniz. Hesap silme sürecini başlatmak için:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Resmi web sitemizdeki <a href="/delete-account" className="text-[#0F3D2E] font-semibold underline">Hesap Silme</a> sayfasını ziyaret edebilir,
            </li>
            <li>
              Veya kayıtlı e-posta adresinizden <a href="mailto:support@skavvia.com?subject=SKAVVIA%20Hesap%20Silme%20Talebi" className="text-[#0F3D2E] font-semibold underline">support@skavvia.com</a> adresine talepte bulunabilirsiniz.
            </li>
          </ul>
        </section>

        {/* 6. İletişim */}
        <section className="space-y-4 border-t border-[#E1E4DE] pt-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <Mail className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-[#101412]">6. İletişim ve Veri Sorumlusu</h2>
          </div>
          <p>
            Gizlilik Politikamız veya kişisel verilerinizin işlenmesi ile ilgili soru ve talepleriniz için resmi destek adresimiz üzerinden bizimle iletişime geçebilirsiniz:
          </p>
          <p className="font-semibold text-[#101412]">
            E-posta: <a href="mailto:support@skavvia.com" className="text-[#0F3D2E] underline">support@skavvia.com</a><br />
            Resmi Web: <a href="https://skavvia.com" className="text-[#0F3D2E] underline">https://skavvia.com</a>
          </p>
        </section>

      </div>
    </div>
  );
};
