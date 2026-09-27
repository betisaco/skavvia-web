import React, { useEffect } from 'react';
import { DOWNLOAD_CONFIG } from '../config/download';
import { Download, Smartphone, ShieldCheck, CheckCircle2, FileBox, Cpu, HardDrive, Layers } from 'lucide-react';

export const DownloadPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Android İndir — SKAVVIA';
  }, []);

  const isApkAvailable = Boolean(DOWNLOAD_CONFIG.androidApkUrl && DOWNLOAD_CONFIG.androidApkUrl.trim() !== '');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      {/* Title */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EEE7] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider">
          <Smartphone className="w-3.5 h-3.5" />
          Resmi Android Dağıtımı
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101412] tracking-tight">
          SKAVVIA Android Uygulamasını İndirin
        </h1>
        <p className="text-base sm:text-lg text-[#646B78] leading-relaxed">
          Türkiye'nin rotalarını ve saklı keşif noktalarını keşfetmek için resmi Android test paketini cihazınıza yükleyin.
        </p>
      </div>

      {/* Main Download Card */}
      <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border-2 border-[#0F3D2E] shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E1E4DE]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src="/skavvia-app-icon.png"
              alt="SKAVVIA Uygulama İkonu"
              className="w-16 h-16 rounded-2xl shadow-sm"
              width={64}
              height={64}
            />
            <div>
              <h2 className="text-2xl font-bold text-[#101412]">SKAVVIA</h2>
              <p className="text-xs font-mono text-[#646B78]">{DOWNLOAD_CONFIG.packageId}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs bg-[#E2EEE7] text-[#0F3D2E] font-semibold px-2 py-0.5 rounded-full">
                  v{DOWNLOAD_CONFIG.androidVersion}
                </span>
                <span className="text-xs bg-[#F5F5F0] text-[#646B78] px-2 py-0.5 rounded-full">
                  {DOWNLOAD_CONFIG.androidArchitecture}
                </span>
              </div>
            </div>
          </div>

          {/* Download Action Button */}
          <div className="w-full md:w-auto">
            {isApkAvailable ? (
              <a
                href={DOWNLOAD_CONFIG.androidApkUrl}
                download={DOWNLOAD_CONFIG.fileName}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-base font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Download className="w-5 h-5 text-[#E9B949]" />
                <span>APK İndir ({DOWNLOAD_CONFIG.approximateSize})</span>
              </a>
            ) : (
              <div className="text-center md:text-right space-y-2">
                <button
                  type="button"
                  disabled
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#6B7280]/20 text-[#6B7280] cursor-not-allowed text-base font-bold px-8 py-4 rounded-full border border-[#E1E4DE]"
                  aria-disabled="true"
                >
                  <Download className="w-5 h-5 opacity-50" />
                  <span>APK Hazırlanıyor ({DOWNLOAD_CONFIG.approximateSize})</span>
                </button>
                <p className="text-xs text-[#8D9892]">
                  v{DOWNLOAD_CONFIG.androidVersion} paketi GitHub Releases üzerinde hazırlanıyor.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-1">
            <div className="flex items-center gap-1.5 text-[#646B78] text-xs">
              <Layers className="w-3.5 h-3.5 text-[#0F3D2E]" />
              <span>Sürüm</span>
            </div>
            <p className="font-bold text-[#101412] text-sm">v{DOWNLOAD_CONFIG.androidVersion}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-1">
            <div className="flex items-center gap-1.5 text-[#646B78] text-xs">
              <Cpu className="w-3.5 h-3.5 text-[#0F3D2E]" />
              <span>Mimari</span>
            </div>
            <p className="font-bold text-[#101412] text-sm">{DOWNLOAD_CONFIG.androidArchitecture}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-1">
            <div className="flex items-center gap-1.5 text-[#646B78] text-xs">
              <HardDrive className="w-3.5 h-3.5 text-[#0F3D2E]" />
              <span>Dosya Boyutu</span>
            </div>
            <p className="font-bold text-[#101412] text-sm">~{DOWNLOAD_CONFIG.approximateSize}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-1">
            <div className="flex items-center gap-1.5 text-[#646B78] text-xs">
              <FileBox className="w-3.5 h-3.5 text-[#0F3D2E]" />
              <span>Gereksinim</span>
            </div>
            <p className="font-bold text-[#101412] text-xs truncate" title={DOWNLOAD_CONFIG.minAndroidVersion}>
              Android 8.0+
            </p>
          </div>
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
              <p className="font-bold text-[#101412]">APK Dosyasını İndirin</p>
              <p className="text-[#646B78] text-xs leading-relaxed">
                İndirme butonuna dokunarak resmi test paketi dosyasını cihazınıza indirin.
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
                İndirilen dosyayı açıp "Yükle" seçeneğine dokunarak SKAVVIA dünyasına adım atın.
              </p>
            </div>
          </div>

          {/* Simple Unknown Sources Clarification */}
          <div className="p-5 rounded-2xl bg-[#F5F5F0] border border-[#E1E4DE] flex items-start gap-3 text-xs text-[#646B78]">
            <CheckCircle2 className="w-4 h-4 text-[#0F3D2E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#101412]">Neden bu izin gerekiyor?</strong> Android işletim sistemi, Google Play Store haricinden yüklenen tüm doğrudan APK dosyalarında güvenlik uyarısı verir. SKAVVIA resmi ve temiz bir test sürümüdür; cihazınıza herhangi bir zarar vermez.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
