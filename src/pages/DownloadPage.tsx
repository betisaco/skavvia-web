import React, { useEffect, useState } from 'react';
import { DOWNLOAD_CONFIG, isDownloadReady } from '../config/download';
import {
  Download,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  FileBox,
  Cpu,
  HardDrive,
  Layers,
  ChevronDown,
  ChevronUp,
  Clock,
  KeyRound,
  ExternalLink,
  Copy,
} from 'lucide-react';

export const DownloadPage: React.FC = () => {
  const [integrityOpen, setIntegrityOpen] = useState(false);
  const [copiedSha, setCopiedSha] = useState(false);

  useEffect(() => {
    document.title = 'Android İndir — SKAVVIA';
  }, []);

  const downloadReady = isDownloadReady(DOWNLOAD_CONFIG);

  const handleCopySha = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      {/* Title & Introduction */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EEE7] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider">
          <Smartphone className="w-3.5 h-3.5" />
          Resmi Android Dağıtım Merkezi
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101412] tracking-tight">
          SKAVVIA Android Uygulaması
        </h1>
        <p className="text-base sm:text-lg text-[#646B78] leading-relaxed">
          Türkiye'nin saklı rotalarını ve keşif noktalarını keşfetmek için hazırlanan resmi Android uygulamasının dağıtım durumu ve kurulum bilgileri.
        </p>
      </div>

      {/* Main Download Card */}
      <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border-2 border-[#0F3D2E] shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E1E4DE]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src="/skavvia-app-icon.png"
              alt="SKAVVIA Uygulama İkonu"
              className="w-16 h-16 rounded-2xl shadow-sm object-cover"
              width={64}
              height={64}
            />
            <div>
              <h2 className="text-2xl font-bold text-[#101412]">SKAVVIA Mobil</h2>
              <p className="text-xs font-mono text-[#646B78]">{DOWNLOAD_CONFIG.packageId}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2 justify-center md:justify-start">
                <span className="text-xs bg-[#E2EEE7] text-[#0F3D2E] font-semibold px-2.5 py-0.5 rounded-full">
                  v{DOWNLOAD_CONFIG.version}
                </span>
                <span className="text-xs bg-[#F5F5F0] text-[#646B78] px-2.5 py-0.5 rounded-full border border-[#E1E4DE]">
                  {DOWNLOAD_CONFIG.architecture}
                </span>
                {downloadReady ? (
                  <span className="text-xs bg-[#E2EEE7] text-[#0F3D2E] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#0F3D2E]" />
                    İndirmeye Hazır
                  </span>
                ) : (
                  <span className="text-xs bg-[#FFFBEB] text-[#D97706] font-medium px-2.5 py-0.5 rounded-full border border-[#FDE68A] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Android Sürümü Hazırlanıyor
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full md:w-auto text-center md:text-right">
            {downloadReady ? (
              <a
                href={DOWNLOAD_CONFIG.androidApkUrl}
                download={DOWNLOAD_CONFIG.fileName}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-base font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949]"
              >
                <Download className="w-5 h-5 text-[#E9B949]" />
                <span>APK İndir ({DOWNLOAD_CONFIG.size})</span>
              </a>
            ) : (
              <div className="space-y-2">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F5F5F0] text-[#6B7280] cursor-not-allowed text-base font-bold px-8 py-4 rounded-full border border-[#E1E4DE] shadow-xs"
                >
                  <Clock className="w-5 h-5 text-[#D97706]" />
                  <span>Android Sürümü Hazırlanıyor</span>
                </button>
                <p className="text-xs text-[#6B7280] max-w-xs mx-auto md:ml-auto md:mr-0">
                  v{DOWNLOAD_CONFIG.version} test sürümü tamamlanma aşamasındadır. İndirme bağlantısı GitHub Releases üzerinden sunulacaktır.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {DOWNLOAD_CONFIG.version && (
            <div className="p-4 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-1">
              <div className="flex items-center gap-1.5 text-[#646B78] text-xs">
                <Layers className="w-3.5 h-3.5 text-[#0F3D2E]" />
                <span>Hedef Sürüm</span>
              </div>
              <p className="font-bold text-[#101412] text-sm">v{DOWNLOAD_CONFIG.version}</p>
            </div>
          )}

          {DOWNLOAD_CONFIG.architecture && (
            <div className="p-4 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-1">
              <div className="flex items-center gap-1.5 text-[#646B78] text-xs">
                <Cpu className="w-3.5 h-3.5 text-[#0F3D2E]" />
                <span>Mimari</span>
              </div>
              <p className="font-bold text-[#101412] text-sm">{DOWNLOAD_CONFIG.architecture}</p>
            </div>
          )}

          {DOWNLOAD_CONFIG.size && (
            <div className="p-4 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-1">
              <div className="flex items-center gap-1.5 text-[#646B78] text-xs">
                <HardDrive className="w-3.5 h-3.5 text-[#0F3D2E]" />
                <span>Yaklaşık Boyut</span>
              </div>
              <p className="font-bold text-[#101412] text-sm">~{DOWNLOAD_CONFIG.size}</p>
            </div>
          )}

          {DOWNLOAD_CONFIG.minimumAndroidVersion && (
            <div className="p-4 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-1">
              <div className="flex items-center gap-1.5 text-[#646B78] text-xs">
                <FileBox className="w-3.5 h-3.5 text-[#0F3D2E]" />
                <span>Gereksinim</span>
              </div>
              <p className="font-bold text-[#101412] text-xs truncate" title={DOWNLOAD_CONFIG.minimumAndroidVersion}>
                Android 8.0+
              </p>
            </div>
          )}
        </div>

        {/* Optional Release Date */}
        {DOWNLOAD_CONFIG.releasedAt && (
          <div className="text-xs text-[#646B78] flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#0F3D2E]" />
            <span>Yayınlanma Tarihi: <strong className="text-[#101412]">{DOWNLOAD_CONFIG.releasedAt}</strong></span>
          </div>
        )}

        {/* Google Play Store Integration (Ready for when URL is available) */}
        {DOWNLOAD_CONFIG.googlePlayUrl && (
          <div className="p-4 rounded-2xl bg-[#E2EEE7]/60 border border-[#BFD9CC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              <p className="font-bold text-[#0F3D2E]">Google Play Store Üzerinden Yükleyin</p>
              <p className="text-xs text-[#2A684E]">Uygulamayı doğrudan resmi mağazadan edinebilirsiniz.</p>
            </div>
            <a
              href={DOWNLOAD_CONFIG.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F3D2E] text-[#F5F5F0] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0A2B20] transition-colors"
            >
              <span>Google Play'de Gör</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Expandable File Integrity (Dosya Bütünlüğü) */}
        <div className="border border-[#E1E4DE] rounded-2xl overflow-hidden">
          <button
            type="button"
            onClick={() => setIntegrityOpen(!integrityOpen)}
            className="w-full px-6 py-4 bg-[#F5F5F0] hover:bg-[#E8EDE9] flex items-center justify-between text-sm font-bold text-[#101412] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949]"
            aria-expanded={integrityOpen}
          >
            <span className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-[#0F3D2E]" />
              Dosya Bütünlüğü ve Güvenlik Doğrulaması (SHA-256)
            </span>
            {integrityOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {integrityOpen && (
            <div className="p-6 bg-[#FFFFFF] space-y-4 text-xs text-[#646B78] border-t border-[#E1E4DE]">
              {DOWNLOAD_CONFIG.sha256 ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#101412]">APK SHA-256 Checksum:</span>
                    <button
                      type="button"
                      onClick={() => handleCopySha(DOWNLOAD_CONFIG.sha256!)}
                      className="inline-flex items-center gap-1 text-[#0F3D2E] hover:underline font-semibold"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedSha ? 'Kopyalandı' : 'Kopyala'}</span>
                    </button>
                  </div>
                  <pre className="p-3 bg-[#F5F5F0] rounded-lg font-mono text-[11px] text-[#101412] overflow-x-auto select-all">
                    {DOWNLOAD_CONFIG.sha256}
                  </pre>
                </div>
              ) : (
                <p className="italic text-[#8D9892]">
                  Resmi APK dosyası GitHub Releases üzerinde yayınlandığında SHA-256 sağlama özeti (hash) bu alanda listelenecektir.
                </p>
              )}

              {DOWNLOAD_CONFIG.signingCertificateSha256 && (
                <div className="space-y-2 pt-2 border-t border-[#E1E4DE]">
                  <span className="font-bold text-[#101412]">İmzalama Sertifikası SHA-256:</span>
                  <pre className="p-3 bg-[#F5F5F0] rounded-lg font-mono text-[11px] text-[#101412] overflow-x-auto">
                    {DOWNLOAD_CONFIG.signingCertificateSha256}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Safe Installation Guide */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-bold text-[#101412] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#0F3D2E]" />
            Güvenli Kurulum Rehberi
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E1E4DE] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#0F3D2E] text-[#F5F5F0] flex items-center justify-center font-bold text-xs">
                1
              </span>
              <p className="font-bold text-[#101412]">APK Dosyasını Edinin</p>
              <p className="text-[#646B78] text-xs leading-relaxed">
                Yayın açıldığında indirme butonuna dokunarak resmi test paketi dosyasını cihazınıza indirin.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E1E4DE] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#0F3D2E] text-[#F5F5F0] flex items-center justify-center font-bold text-xs">
                2
              </span>
              <p className="font-bold text-[#101412]">Yükleme İzni Verin</p>
              <p className="text-[#646B78] text-xs leading-relaxed">
                Cihazınız "Bilinmeyen uygulamaları yükleme" uyarısı gösterirse, tarayıcınız için bu izni bir kerelik onaylayın.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E1E4DE] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#0F3D2E] text-[#F5F5F0] flex items-center justify-center font-bold text-xs">
                3
              </span>
              <p className="font-bold text-[#101412]">Kurulumu Tamamlayın</p>
              <p className="text-[#646B78] text-xs leading-relaxed">
                İndirilen dosyayı açıp "Yükle" seçeneğine dokunarak SKAVVIA dünyasına ilk adımınızı atın.
              </p>
            </div>
          </div>

          {/* Simple Unknown Sources Clarification */}
          <div className="p-5 rounded-2xl bg-[#F5F5F0] border border-[#E1E4DE] flex items-start gap-3 text-xs text-[#646B78]">
            <CheckCircle2 className="w-4 h-4 text-[#0F3D2E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#101412]">Güvenlik Açıklaması:</strong> Android işletim sistemi, Google Play Store haricinden yüklenen doğrudan APK paketlerinde standart bir güvenlik uyarısı verir. SKAVVIA resmi ve temiz bir test sürümüdür; cihazınıza zarar vermez.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
