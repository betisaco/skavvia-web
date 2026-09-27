import React, { useEffect } from 'react';
import { Link } from '../router';
import { Compass, Target, HeartHandshake, Map, ArrowRight, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Hakkımızda — SKAVVIA';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Title & Introduction */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EEE7] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          Biz Kimiz?
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101412] tracking-tight">
          Yolların ve Keşiflerin Ortak Hafızası
        </h1>
        <p className="text-lg text-[#646B78] leading-relaxed">
          SKAVVIA, insanların keşif noktalarını, rotalarını ve deneyimlerini birbirleriyle paylaşmasını
          sağlayan bağımsız bir sosyal keşif platformudur.
        </p>
      </div>

      {/* Origin Story */}
      <div className="bg-[#FFFFFF] rounded-2xl p-8 sm:p-10 border border-[#E1E4DE] shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-[#101412] flex items-center gap-2.5">
          <Target className="w-6 h-6 text-[#0F3D2E]" />
          <span>Neden SKAVVIA?</span>
        </h2>
        <div className="space-y-4 text-[#646B78] leading-relaxed text-base">
          <p>
            Geleneksel sosyal medya platformları, seyahat ve rota deneyimlerini çoğu zaman yüzeysel görseller
            ve sponsorlu mekan önerileriyle sınırlandırıyor. Bir rota üzerinde kaç durak olduğu, yolun yürüyüşe
            mi yoksa araca mı uygun olduğu ya da bir vadinin en doğru seyir noktası bilgisi akışların arasında
            kaybolup gidiyor.
          </p>
          <p>
            SKAVVIA, bu eksikliği gidermek için yola çıktı. Amacımız; Karadeniz'in yaylalarından Ege'nin
            koylarına, Torosların yürüyüş patikalarından şehirlerin tarihi ara sokaklarına kadar Türkiye'nin
            dört bir yanındaki keşifleri adım adım belgelenebilir ve paylaşılabilir kılmak.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[#101412] text-center md:text-left">
          Temel İlkelerimiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E1E4DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <Map className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#101412] text-lg">Gerçek Rotalar</h3>
            <p className="text-sm text-[#646B78] leading-relaxed">
              Masa başında türetilmiş değil, gezginlerin bizzat deneyimlediği duraklar, koordinatlar ve pratik bilgiler.
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E1E4DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#101412] text-lg">Topluluk Odaklılık</h3>
            <p className="text-sm text-[#646B78] leading-relaxed">
              Algoritmik manipülasyonlar yerine gezginlerin birbirine katkı sağladığı samimi ve saygılı bir keşif ortamı.
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E1E4DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#101412] text-lg">Doğaya Saygı</h3>
            <p className="text-sm text-[#646B78] leading-relaxed">
              Keşfederken doğayı ve yerel dokuyu koruma, iz bırakırken yalnızca güzel anılar bırakma bilinci.
            </p>
          </div>
        </div>
      </div>

      {/* Current Stage */}
      <div className="bg-[#0F3D2E] text-[#F5F5F0] rounded-2xl p-8 sm:p-10 space-y-4">
        <h2 className="text-xl font-bold text-[#E9B949]">Mevcut Durum & Türkiye Odaklı Başlangıç</h2>
        <p className="text-sm sm:text-base text-[#BFD9CC] leading-relaxed">
          SKAVVIA, ilk etapta Android mobil uygulaması üzerinden test kullanıcılarıyla buluşmaktadır.
          Platform mimarisi, Türkiye'deki coğrafi ve kültürel çeşitliliği en doğru şekilde dijitalleştirmek
          üzere optimize edilmektedir.
        </p>
        <div className="pt-2">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 bg-[#E9B949] text-[#101412] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#D4A338] transition-colors"
          >
            <span>Test Sürümünü İnceleyin</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
