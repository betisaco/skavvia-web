import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Clock3, Copy, Cpu, Download, FileCheck2, FileText, HardDrive, Info, Layers3, LockKeyhole, ShieldCheck, Smartphone, Wrench } from 'lucide-react';
import { DOWNLOAD_CONFIG, isDownloadReady } from '../config/download';

// The mobile project's merged release manifest currently reports minSdkVersion=24.
// The web download config says API 26, so this requirement needs a fresh check at release time.
const verifiedAndroidMinimum = 'Android 7.0+ (API 24)';

interface DownloadPhoneProps {
  screen: string;
  alt: string;
  className: string;
}

const DownloadPhone: React.FC<DownloadPhoneProps> = ({ screen, alt, className }) => (
  <div className={`absolute ${className}`}>
    <div className="relative rounded-[38px] border-[3px] border-[#29302E] bg-[#101716] p-[6px] shadow-[0_25px_50px_rgba(4,20,14,0.28),0_5px_14px_rgba(4,20,14,0.18)] ring-1 ring-white/70 sm:rounded-[44px] sm:p-[7px]">
      <span className="absolute -left-[5px] top-[18%] h-8 w-[3px] rounded-l bg-[#303A35]" aria-hidden="true" />
      <span className="absolute -right-[5px] top-[24%] h-12 w-[3px] rounded-r bg-[#303A35]" aria-hidden="true" />
      <img src={screen} alt={alt} width={841} height={1870} loading="eager" className="block h-auto w-full rounded-[29px] sm:rounded-[34px]" />
    </div>
  </div>
);

export const DownloadPage: React.FC = () => {
  const [copiedSha, setCopiedSha] = useState(false);
  const downloadReady = isDownloadReady(DOWNLOAD_CONFIG);
  const publishedSha = DOWNLOAD_CONFIG.sha256;

  useEffect(() => { document.title = 'Android İndir — SKAVVIA'; }, []);

  const copySha = async () => {
    if (!publishedSha) return;
    await navigator.clipboard.writeText(publishedSha);
    setCopiedSha(true);
    window.setTimeout(() => setCopiedSha(false), 2000);
  };

  const technicalCards = [
    { label: 'Sürüm', value: DOWNLOAD_CONFIG.version ? `v${DOWNLOAD_CONFIG.version}` : 'Yayınla duyurulacak', Icon: Layers3 },
    { label: 'Mimari', value: DOWNLOAD_CONFIG.architecture || 'Yayınla duyurulacak', Icon: Cpu },
    { label: 'Dosya Boyutu', value: DOWNLOAD_CONFIG.size ? `~${DOWNLOAD_CONFIG.size}` : 'Yayınla duyurulacak', Icon: HardDrive },
    { label: 'Android', value: verifiedAndroidMinimum, Icon: Smartphone },
  ];

  return (
    <div className="bg-[#F5F5F0]">
      <section aria-labelledby="download-title" className="relative isolate overflow-hidden">
        <img src="/images/download/skavvia-download-hero-bg-v2.png" alt="" aria-hidden="true" width={1915} height={576} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center] lg:object-center" />
        <div className="absolute inset-0 -z-10 bg-[#F5F5F0]/70 lg:bg-transparent" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 hidden lg:block" style={{ background: 'linear-gradient(90deg, rgba(245,245,240,0.9) 0%, rgba(245,245,240,0.72) 34%, rgba(245,245,240,0.2) 68%, rgba(245,245,240,0.04) 100%)' }} aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 -z-[5] h-16 bg-gradient-to-b from-transparent to-[#F5F5F0]" aria-hidden="true" />

        <div className="mx-auto grid max-w-[1440px] gap-6 px-6 pb-8 pt-12 sm:px-10 lg:min-h-[690px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8 lg:px-20 lg:pb-10 lg:pt-8 xl:px-[120px]">
          <div className="relative z-10 max-w-xl lg:self-start lg:pt-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E2EEE7]/95 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#0F3D2E]">
              <Smartphone className="h-3.5 w-3.5" aria-hidden="true" /> Resmi Android Dağıtım Merkezi
            </span>
            <h1 id="download-title" className="mt-5 font-display text-[clamp(50px,5.5vw,78px)] font-semibold leading-[0.98] tracking-tight text-[#101F1C]">
              SKAVVIA,<br />Android’de.
            </h1>
            <p className="mt-5 max-w-[470px] text-base leading-relaxed text-[#596574] sm:text-lg">
              Resmi Android sürümünü güvenli kaynaktan indir, sürüm bilgilerini doğrula ve keşfe başla.
            </p>
            <div className="mt-5 flex items-center gap-2.5 text-sm font-medium text-[#263C34]" role="status">
              <span className={`h-3 w-3 rounded-full ring-4 ${downloadReady ? 'bg-[#0F3D2E] ring-[#D7E7DC]' : 'bg-[#E9B949] ring-[#FFF0D2]'}`} aria-hidden="true" />
              {downloadReady ? 'Android sürümü yayında' : 'Android sürümü hazırlanıyor'}
            </div>
            <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.17em] leading-relaxed text-[#86918C] sm:text-[11px]">
              <span className="h-px w-7 shrink-0 bg-[#E9B949]" aria-hidden="true" />
              Daha fazla yer. Daha fazla hikâye. Daha yakın bir dünya.
            </div>
          </div>

          <div className="relative mx-auto h-[475px] w-full max-w-[360px] sm:h-[575px] sm:max-w-[480px] lg:h-[625px] lg:max-w-[530px]" aria-label="SKAVVIA Android ekranları">
            <DownloadPhone screen="/images/download/skavvia-download-phone-map-screen-v1.png" alt="SKAVVIA Android harita ekranında keşif noktaları ve mekan kartı" className="right-[8%] top-[46px] z-10 w-[155px] rotate-[6deg] sm:right-[5%] sm:top-[54px] sm:w-[210px] lg:w-[230px] xl:w-[235px]" />
            <DownloadPhone screen="/images/download/skavvia-download-phone-discover-screen-v1.png" alt="SKAVVIA Android Keşfet ekranında hikâyeler ve topluluk keşifleri" className="left-[4%] top-4 z-20 w-[185px] -rotate-[5deg] sm:left-[6%] sm:w-[245px] lg:w-[265px] xl:w-[270px]" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] space-y-8 px-6 pb-10 sm:px-10 lg:space-y-9 lg:px-20 xl:px-[120px]">
        <section aria-label="Android sürüm özeti" className="relative z-30 -mt-5 grid gap-6 rounded-[24px] border border-[#DFE7E0] bg-white p-5 shadow-[0_15px_35px_rgba(15,61,46,0.07)] sm:p-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8">
          <div className="flex min-w-0 items-start gap-4 sm:items-center">
            <img src="/skavvia-app-icon.png" alt="SKAVVIA uygulama ikonu" width={76} height={76} className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-sm sm:h-[76px] sm:w-[76px]" />
            <div className="min-w-0">
              <h2 className="font-serif text-2xl font-bold text-[#101F1C] sm:text-[28px]">SKAVVIA for Android</h2>
              <p className="mt-1 break-all font-mono text-xs tracking-wide text-[#6B7280]">{DOWNLOAD_CONFIG.packageId}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                {DOWNLOAD_CONFIG.version && <span className="rounded-full bg-[#E2EEE7] px-3 py-1 text-[#0F3D2E]">v{DOWNLOAD_CONFIG.version}</span>}
                {DOWNLOAD_CONFIG.architecture && <span className="rounded-full bg-[#EDF0ED] px-3 py-1 text-[#5A6860]">{DOWNLOAD_CONFIG.architecture}</span>}
                <span className="rounded-full bg-[#FFF0D2] px-3 py-1 text-[#9A6500]">Android</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#E1E7E0] pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            {downloadReady ? (
              <a href={DOWNLOAD_CONFIG.androidApkUrl} download={DOWNLOAD_CONFIG.fileName} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0F3D2E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0A2B20]">
                <Download className="h-4 w-4 text-[#E9B949]" aria-hidden="true" /> Resmi APK’yı İndir
              </a>
            ) : (
              <div className="flex items-start gap-4 rounded-2xl bg-[#FFF8EA] px-5 py-4 text-[#9A6500]">
                <Clock3 className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
                <div><p className="text-sm font-semibold">Android Sürümü Hazırlanıyor</p><p className="mt-1 text-xs leading-relaxed text-[#6B7280]">Son testler tamamlanıyor. İndirme bağlantısı yayınla birlikte burada yer alacak.</p></div>
              </div>
            )}
          </div>
        </section>

        <section aria-label="Teknik bilgiler">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {technicalCards.map(({ label, value, Icon }) => (
              <article key={label} className="flex items-center gap-3 rounded-2xl border border-[#E1E7E0] bg-white p-4 shadow-[0_5px_18px_rgba(15,61,46,0.035)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EBF1EC] text-[#0F3D2E]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <div className="min-w-0"><h3 className="text-xs font-medium text-[#6B7280]">{label}</h3><p className="mt-0.5 break-words text-sm font-bold text-[#101F1C]">{value}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-[#6B7280]">Android gereksinimi mevcut mobil proje derlemesindeki API 24 değerine dayanır; yayınlanacak paketin kesin gereksinimi yayın sırasında yeniden doğrulanacaktır.</p>
        </section>

        <section id="verification" aria-labelledby="verification-title" className="scroll-mt-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#0F3D2E]" aria-hidden="true" />
            <div><h2 id="verification-title" className="font-display text-3xl font-semibold text-[#101F1C] sm:text-4xl">Dosyanı doğrula.</h2><p className="mt-1 text-sm text-[#6B7280]">Güvenli bir deneyim için dosya bütünlüğünü kontrol et.</p></div>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#E1E7E0] bg-white p-5 sm:p-6">
              <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EBF1EC] text-[#0F3D2E]"><FileText className="h-5 w-5" aria-hidden="true" /></span><div><h3 className="font-semibold text-[#101F1C]">SHA-256</h3><p className="mt-1 text-xs leading-relaxed text-[#6B7280]">{publishedSha ? 'Resmi dosyanın yayınlanan sağlama özeti.' : 'Yayınla birlikte burada gösterilecek.'}</p></div></div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <p className="min-w-0 flex-1 break-all rounded-xl border border-dashed border-[#D9E1DA] bg-[#F7F8F5] px-4 py-3 font-mono text-xs text-[#526259]">{publishedSha || '—'}</p>
                <button type="button" onClick={copySha} disabled={!publishedSha} aria-disabled={!publishedSha} title={!publishedSha ? 'SHA-256 henüz yayınlanmadı' : undefined} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#D9E1DA] px-4 py-3 text-sm font-semibold text-[#0F3D2E] hover:bg-[#EBF1EC] disabled:cursor-not-allowed disabled:text-[#8D9892] disabled:hover:bg-transparent">
                  {copiedSha ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}{copiedSha ? 'Kopyalandı' : 'Kopyala'}
                </button>
              </div>
            </article>
            <article className="space-y-4 rounded-2xl border border-[#E1E7E0] bg-white p-5 sm:p-6">
              <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F3D2E]" aria-hidden="true" /><p className="text-sm leading-relaxed text-[#6B7280]"><strong className="text-[#101F1C]">Resmi kaynak: skavvia.com</strong><br />Yalnızca resmi sitemizde yayınlanan paketi kullan.</p></div>
              <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F3D2E]" aria-hidden="true" /><p className="text-sm leading-relaxed text-[#6B7280]"><strong className="text-[#101F1C]">Paket kimliği: {DOWNLOAD_CONFIG.packageId}</strong><br />Kurulacak paketin kimliğini kontrol et.</p></div>
              <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F3D2E]" aria-hidden="true" /><p className="text-sm leading-relaxed text-[#6B7280]"><strong className="text-[#101F1C]">SHA-256 doğrulaması</strong><br />Yayınlanan değerle indirdiğin dosyanın sağlama özetini karşılaştır.</p></div>
            </article>
          </div>
        </section>

        <section aria-labelledby="installation-title">
          <div className="flex items-start gap-3"><Wrench className="mt-1 h-6 w-6 shrink-0 text-[#0F3D2E]" aria-hidden="true" /><div><h2 id="installation-title" className="font-display text-3xl font-semibold text-[#101F1C] sm:text-4xl">Güvenli Kurulum Rehberi</h2><p className="mt-1 text-sm text-[#6B7280]">SKAVVIA yayınlandığında güvenli kurulum için bu adımları izle.</p></div></div>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {[
              { number: '01', title: 'APK’yı indir', body: 'Yayınlandığında indirme butonunu kullanarak resmi SKAVVIA APK dosyasını cihazına indir.', Icon: FileCheck2 },
              { number: '02', title: 'Yükleme izni ver', body: 'Android cihazında yalnızca resmi SKAVVIA paketinin kurulmasına izin ver.', Icon: LockKeyhole },
              { number: '03', title: 'SKAVVIA’yı yükle', body: 'İndirdiğin resmi APK dosyasını aç ve ekrandaki adımları takip ederek kurulumu tamamla.', Icon: Smartphone },
            ].map(({ number, title, body, Icon }) => (
              <article key={number} className="flex items-start gap-3 rounded-2xl border border-[#E1E7E0] bg-white p-5 shadow-[0_5px_18px_rgba(15,61,46,0.035)]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] text-xs font-bold text-white">{number}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EBF1EC] text-[#0F3D2E]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <div><h3 className="text-sm font-semibold text-[#101F1C]">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-[#6B7280]">{body}</p></div>
              </article>
            ))}
          </div>
        </section>

        <aside className="flex items-start gap-3 rounded-2xl border border-[#D5E0D6] bg-[#EAF1EB] px-5 py-4 text-sm leading-relaxed text-[#345348]">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#0F3D2E]" aria-hidden="true" />
          <p>Android, Play Store dışından yüklenen uygulamalar için ek güvenlik onayı isteyebilir. Dağıtım açıldığında SKAVVIA’yı yalnızca resmi <strong>skavvia.com</strong> kaynağından indir.</p>
        </aside>

        <section aria-labelledby="release-notes-title">
          <div className="flex flex-wrap items-center gap-3"><FileText className="h-6 w-6 text-[#0F3D2E]" aria-hidden="true" /><h2 id="release-notes-title" className="font-display text-3xl font-semibold text-[#101F1C] sm:text-4xl">Bu sürümde</h2>{DOWNLOAD_CONFIG.version && <span className="rounded-full bg-[#E2EEE7] px-3 py-1 text-xs font-semibold text-[#0F3D2E]">v{DOWNLOAD_CONFIG.version}</span>}</div>
          <p className="mt-2 text-sm text-[#6B7280]">Resmi sürüm notları henüz yayınlanmadı. Aşağıdakiler genel iyileştirme alanlarıdır; tamamlanmış sürüm değişiklikleri olarak sunulmaz.</p>
          <div className="mt-5 grid gap-3 rounded-2xl border border-[#E1E7E0] bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
            {['Performans ve kararlılık', 'Harita deneyimi', 'Keşfet deneyimi', 'Hata düzeltmeleri'].map((area) => <div key={area} className="flex items-center gap-2 border-[#E1E7E0] p-2 text-sm text-[#536258] lg:border-r lg:last:border-r-0"><span className="h-2 w-2 shrink-0 rounded-full bg-[#E9B949]" aria-hidden="true" />{area}</div>)}
          </div>
        </section>
      </div>

      <section aria-labelledby="official-source-title" className="relative isolate mx-auto mb-0 max-w-[1440px] overflow-hidden bg-[#0F3D2E] px-6 py-7 text-white sm:px-10 lg:mx-10 lg:mb-2 lg:rounded-[24px] lg:px-10 xl:mx-auto xl:max-w-[1230px]">
        <img src="/images/download/skavvia-download-security-bg-v2.png" alt="" aria-hidden="true" width={1915} height={233} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#09291F]/95 via-[#0F3D2E]/86 to-[#0A2B20]/56" aria-hidden="true" />
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4"><ShieldCheck className="mt-1 h-8 w-8 shrink-0 text-[#E9B949]" aria-hidden="true" /><div><h2 id="official-source-title" className="font-display text-xl font-semibold leading-tight sm:text-2xl">SKAVVIA’yı yalnızca resmi kaynaktan indirin.</h2><p className="mt-1 text-sm text-[#E3EDE6]">skavvia.com — Resmi dağıtım kaynağı</p></div></div>
          <a href="#verification" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-[#E9B949] bg-[#0A2B20]/70 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F3D2E]">Doğrulamayı İncele <ArrowRight className="h-4 w-4 text-[#E9B949]" aria-hidden="true" /></a>
        </div>
      </section>
    </div>
  );
};
