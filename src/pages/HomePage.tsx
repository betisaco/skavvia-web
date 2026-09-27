import React, { useEffect } from 'react';
import { Link } from '../router';
import { PhoneMockup } from '../components/PhoneMockup';
import {
  Compass,
  Map,
  Bookmark,
  Award,
  MessageCircle,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Navigation,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'SKAVVIA — Keşfet. Paylaş. İz Bırak.';
  }, []);

  const features = [
    {
      icon: Compass,
      title: 'Keşfet & An Paylaşımı',
      description:
        'Doğanın derinliklerinden şehir sokaklarına keşfettiğiniz mekanları fotoğraflar, kategoriler ve öneri nedenleriyle anında toplulukla paylaşın.',
      tag: 'Sosyal Akış',
    },
    {
      icon: Navigation,
      title: 'Adım Adım Rotalar & Duraklar',
      description:
        'Kendi keşif rotanızı durak durak oluşturun. Ulaşım türü (yürüyüş, araba, bisiklet), tahmini süre ve mesafe detaylarıyla rehberlik edin.',
      tag: 'Rota Mimarisi',
    },
    {
      icon: Map,
      title: 'İnteraktif Keşif Haritası',
      description:
        'Google Maps altyapısıyla çevrenizdeki onaylı keşif noktalarını, rotaları ve gizli durakları canlı harita üzerinde keşfe çıkın.',
      tag: 'Harita & Konum',
    },
    {
      icon: Bookmark,
      title: 'Kaydetme & Koleksiyonlar',
      description:
        'Gelecekteki seyahatleriniz için ilginizi çeken rotaları, gönderileri ve durakları kişisel listenize kaydederek elinizin altında tutun.',
      tag: 'Kişisel Arşiv',
    },
    {
      icon: Award,
      title: 'Gezgin Profili & Rozetler',
      description:
        'Keşfettikçe ve paylaştıkça XP kazanın, seviye atlayın. Doğa İzcisi, Rota Rehberi gibi resmi SKAVVIA rozetlerinin kilidini açın.',
      tag: 'Oyunlaştırma',
    },
    {
      icon: MessageCircle,
      title: 'Birebir İletişim & Topluluk',
      description:
        'Yol arkadaşı bulun, rota detayları hakkında diğer gezginlere doğrudan mesaj gönderin ve keşif deneyimlerinizi zenginleştirin.',
      tag: 'Sosyal Keşif',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Subtle Topo Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0F3D2E]/10 to-[#E9B949]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Value Proposition & Slogan */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EEE7] border border-[#BFD9CC] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0F3D2E] animate-ping" />
                Resmi Sosyal Keşif Platformu
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101412] tracking-tight leading-[1.15]">
                Keşfet.{' '}
                <span className="text-[#0F3D2E]">Paylaş.</span>{' '}
                <span className="text-[#D4A338]">İz Bırak.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#646B78] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Türkiye'nin keşif noktalarını, rotalarını ve deneyimlerini toplulukla paylaşmaya
                odaklanan yeni nesil sosyal keşif platformu.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/download"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-base font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949]"
                >
                  <Download className="w-5 h-5 text-[#E9B949]" />
                  <span>Android için indir</span>
                </Link>

                <Link
                  to="/#ozellikler"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#0F3D2E] hover:bg-[#E8EDE9] border border-[#E1E4DE] text-base font-semibold px-7 py-3.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949]"
                >
                  <span>SKAVVIA'yı Keşfet</span>
                  <ArrowRight className="w-4 h-4 text-[#0F3D2E]" />
                </Link>
              </div>

              {/* Verified Features Pills */}
              <div className="pt-6 border-t border-[#E1E4DE] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#646B78]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Google Maps Entegrasyonu</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Gerçek Rota ve Duraklar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Bağımsız Gezgin Topluluğu</span>
                </div>
              </div>
            </div>

            {/* Right Column: Phone Mockup Container */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup />
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="ozellikler" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F3D2E]">
            Gerçek Yolculuklar İçin Tasarlandı
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#101412] tracking-tight">
            Yolun Başından Sonuna Eksiksiz Deneyim
          </p>
          <p className="text-base sm:text-lg text-[#646B78] leading-relaxed">
            SKAVVIA mobil uygulamasında yer alan her bir özellik, doğadaki ve şehirdeki keşiflerinizi
            belgelemek ve toplulukla paylaşmak üzere inşa edilmiştir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E1E4DE] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#E9B949] bg-[#0F3D2E] px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {feature.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#101412] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#646B78] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Philosophy / Story Section */}
      <section className="bg-[#0F3D2E] text-[#F5F5F0] py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2B20] text-[#E9B949] text-xs font-semibold tracking-wider uppercase border border-[#E9B949]/20">
            <Compass className="w-3.5 h-3.5" />
            Keşif Vizyonu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Algoritmik gürültüden uzak, gerçek gezgin rotaları.
          </h2>
          <p className="text-[#BFD9CC] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            SKAVVIA, popüler reklam odaklı mekan önerileri yerine; dağ patikalarında, sahil kasabalarında
            ve şehir aralarında gerçekten tecrübe edilmiş rotaları toplulukla buluşturur.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#E9B949] text-[#101412] hover:bg-[#D4A338] font-bold text-sm px-6 py-3 rounded-full transition-all shadow-sm"
            >
              <span>Hikâyemizi Okuyun</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Download Banner CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#FFFFFF] border-2 border-[#0F3D2E] rounded-3xl p-8 sm:p-12 shadow-sm text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#0F3D2E] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#0F3D2E]" />
              <span>Android Test Sürümü</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101412]">
              SKAVVIA Deneyimini Hemen Başlatın
            </h3>
            <p className="text-[#646B78] text-sm sm:text-base max-w-md">
              Android cihazınız için optimize edilmiş APK sürümünü indirerek ilk keşiflerinizi paylaşmaya başlayın.
            </p>
          </div>
          <Link
            to="/download"
            className="shrink-0 inline-flex items-center gap-2.5 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-base font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Download className="w-5 h-5 text-[#E9B949]" />
            <span>İndirme Sayfasına Git</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
