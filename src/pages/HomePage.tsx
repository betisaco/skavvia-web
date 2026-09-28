import React, { useEffect } from 'react';
import { Link } from '../router';
import { PhoneMockup } from '../components/PhoneMockup';
import {
  Compass,
  Map,
  Navigation,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { DOWNLOAD_CONFIG, isDownloadReady } from '../config/download';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'SKAVVIA — Keşfet. Paylaş. İz Bırak.';
  }, []);

  const downloadReady = isDownloadReady(DOWNLOAD_CONFIG);

  const pillars = [
    {
      id: 'kesfet',
      title: 'Topluluk Keşifleri & Anlar',
      badge: 'Keşfet Akışı',
      icon: Compass,
      description:
        'Sıradan öneriler yerine gezginlerin bizzat deneyimlediği duraklar, fotoğraflar ve samimi seyahat notları. İlgi alanlarınıza göre filtreleyin, topluluk hikâyelerini takip edin.',
      screen: '/app-screens/screen-discover.png',
      alt: 'SKAVVIA Keşfet Akışı',
      bullets: [
        'Kategorilere göre keşif (Tarih & Kültür, Konakla, Yeme & İçme)',
        '1-5 fotoğraflı an paylaşımları ve detaylı açıklamalar',
        'Topluluk hikâyeleri ve yeni rotalar',
      ],
      reverse: false,
    },
    {
      id: 'harita',
      title: 'İnteraktif Gezgin Haritası',
      badge: 'Canlı Harita',
      icon: Map,
      description:
        'Google Maps altyapısıyla geliştirilen harita üzerinde şehirlerin gizli duraklarını, çevrenizdeki keşif noktalarını ve rota başlangıçlarını doğrudan görüntüleyin.',
      screen: '/app-screens/screen-map.png',
      alt: 'SKAVVIA İnteraktif Harita',
      bullets: [
        'Harita üzerinde gezgin profilleri ve keşif pinleri',
        'Hızlı mekan önizleme kartları (Koza Han, tarihi yapılar)',
        'Tek dokunuşla yol tarifi ve mekan detayları',
      ],
      reverse: true,
    },
    {
      id: 'rotalar',
      title: 'Adım Adım Rota Mimarisi',
      badge: 'Rotalar & Duraklar',
      icon: Navigation,
      description:
        'Bir geziyi baştan sona planlayın veya başkalarının rotalarını adım adım takip edin. Her durak için ayrılan süre, toplam mesafe ve ulaşım modu rehberiniz olsun.',
      screen: '/app-screens/screen-route.png',
      alt: 'SKAVVIA Rota Detayları',
      bullets: [
        'Sıralı durak planı (Ulu Cami, Koza Han vb.)',
        'Ulaşım türü (Yürüyüş, araba, bisiklet), süre ve mesafe hesaplaması',
        'Durak bazlı tavsiyeler ve ziyaret süreleri',
      ],
      reverse: false,
    },
    {
      id: 'profil',
      title: 'Gezgin Kimliği & Rozetler',
      badge: 'Profil & Deneyim',
      icon: User,
      description:
        'Yolculuklarınızı dijital bir seyahat günlüğüne dönüştürün. Keşiflerinizi belgeledikçe seviye atlayın, resmi SKAVVIA rozetlerinin sahibi olun.',
      screen: '/app-screens/screen-profile.png',
      alt: 'SKAVVIA Kullanıcı Profili ve Rozetler',
      bullets: [
        'Gezgin rozetleri (Doğa İzcisi, Rota Rehberi vb.)',
        'Düzenli keşif ızgarası ve rota koleksiyonları',
        'Takipçi ve topluluk etkileşimleri',
      ],
      reverse: true,
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Keşfet',
      desc: 'Harita ve akış üzerinden rotaları, gizli durakları ve çevre mekanları inceleyin.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Paylaş',
      desc: 'Kendi keşif rotanızı duraklar, gerçek fotoğraflar ve seyahat notlarıyla topluluğa aktarın.',
      icon: Navigation,
    },
    {
      step: '03',
      title: 'İz Bırak',
      desc: 'Gezginlere ilham verin, rozetlerin kilidini açın ve kalıcı bir seyahat hafızası oluşturun.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Subtle Topo Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#0F3D2E]/10 via-[#E9B949]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Slogan & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EEE7] border border-[#BFD9CC] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0F3D2E]" />
                Sosyal Keşif ve Rota Paylaşımı
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101412] tracking-tight leading-[1.12]">
                Keşfet.{' '}
                <span className="text-[#0F3D2E]">Paylaş.</span>{' '}
                <span className="text-[#D4A338]">İz Bırak.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#646B78] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Türkiye'nin saklı rotalarını, eşsiz keşif duraklarını ve gerçek gezgin deneyimlerini toplulukla paylaşmaya odaklanan yeni nesil sosyal keşif platformu.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/download"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-base font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949]"
                >
                  <Smartphone className="w-5 h-5 text-[#E9B949]" />
                  <span>{downloadReady ? 'Android için İndir' : 'Android Sürümü'}</span>
                  <ArrowRight className="w-4 h-4 opacity-80" />
                </Link>

                <Link
                  to="/#ozellikler"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#0F3D2E] hover:bg-[#E8EDE9] border border-[#E1E4DE] text-base font-semibold px-7 py-3.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949]"
                >
                  <span>Özellikleri Keşfet</span>
                </Link>
              </div>

              {/* Verified Product Highlights */}
              <div className="pt-6 border-t border-[#E1E4DE] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#646B78]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Google Maps Entegrasyonu</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Adım Adım Durak Planı</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Bağımsız Gezgin Topluluğu</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Interactive Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup initialScreen="discover" interactive={true} />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Core Features Deep Dive (4 Real Screen Pillars) */}
      <section id="ozellikler" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-24">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F3D2E]">
            Gerçek Ürün Deneyimi
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#101412] tracking-tight">
            Keşfetmekten İz Bırakmaya Eksiksiz Bir Yolculuk
          </p>
          <p className="text-base sm:text-lg text-[#646B78] leading-relaxed">
            SKAVVIA mobil uygulamasının her ekranı, yolculuklarınızı sade ve ilham verici bir biçimde belgelemek için tasarlandı.
          </p>
        </div>

        {/* Alternating Feature Rows */}
        <div className="space-y-20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  pillar.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-6 space-y-6 ${pillar.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2EEE7] text-[#0F3D2E] text-xs font-bold uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{pillar.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101412] tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-base text-[#646B78] leading-relaxed">
                    {pillar.description}
                  </p>

                  <ul className="space-y-3 pt-2 text-sm text-[#101412]">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0F3D2E] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real Screen Display in Native Phone Bezel */}
                <div className={`lg:col-span-6 flex justify-center ${pillar.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative w-full max-w-[280px] sm:max-w-[300px] rounded-[42px] p-2.5 bg-[#0A2B20] shadow-xl ring-1 ring-white/20 select-none">
                    <div className="overflow-hidden rounded-[34px] bg-[#08130F] border border-[#26382F]">
                      <img
                        src={pillar.screen}
                        alt={pillar.alt}
                        width={460}
                        height={1024}
                        className="w-full h-auto object-contain block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. "Nasıl Çalışır?" Section */}
      <section className="bg-[#FFFFFF] border-y border-[#E1E4DE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F3D2E]">
              Nasıl Çalışır?
            </h2>
            <p className="text-3xl font-extrabold text-[#101412]">
              Üç Adımda Sosyal Keşif
            </p>
            <p className="text-sm sm:text-base text-[#646B78]">
              SKAVVIA topluluğunda yollar birbirine bağlanır, keşifler kalıcı hale gelir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, sIdx) => {
              const Icon = st.icon;
              return (
                <div
                  key={sIdx}
                  className="bg-[#F5F5F0] rounded-2xl p-8 border border-[#E1E4DE] space-y-4 relative"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0F3D2E] text-[#E9B949] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-[#BFD9CC]">
                      {st.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#101412]">{st.title}</h3>
                  <p className="text-sm text-[#646B78] leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Gerçek Ekranlar Galerisi (Mobile-friendly Gallery) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F3D2E]">
            Uygulama Vitrini
          </h2>
          <p className="text-3xl font-extrabold text-[#101412]">
            SKAVVIA Ekranları
          </p>
          <p className="text-sm text-[#646B78]">
            Uygulama içindeki gerçek ekran görüntüleri, Bursa rotası ve topluluk deneyimi.
          </p>
        </div>

        {/* 4-Column Responsive Grid with Exact Image Aspect Ratios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="space-y-3 text-center">
            <div className="rounded-3xl p-2 bg-[#0A2B20] border border-[#26382F] shadow-md overflow-hidden">
              <img
                src="/app-screens/screen-discover.png"
                alt="Keşfet Akışı"
                width={460}
                height={1024}
                className="w-full h-auto rounded-2xl object-contain block"
                loading="lazy"
              />
            </div>
            <p className="text-xs font-bold text-[#101412]">Keşfet Akışı</p>
          </div>

          <div className="space-y-3 text-center">
            <div className="rounded-3xl p-2 bg-[#0A2B20] border border-[#26382F] shadow-md overflow-hidden">
              <img
                src="/app-screens/screen-map.png"
                alt="İnteraktif Harita"
                width={460}
                height={1024}
                className="w-full h-auto rounded-2xl object-contain block"
                loading="lazy"
              />
            </div>
            <p className="text-xs font-bold text-[#101412]">Gezgin Haritası</p>
          </div>

          <div className="space-y-3 text-center">
            <div className="rounded-3xl p-2 bg-[#0A2B20] border border-[#26382F] shadow-md overflow-hidden">
              <img
                src="/app-screens/screen-route.png"
                alt="Rota Detayı"
                width={460}
                height={1024}
                className="w-full h-auto rounded-2xl object-contain block"
                loading="lazy"
              />
            </div>
            <p className="text-xs font-bold text-[#101412]">Rota & Duraklar</p>
          </div>

          <div className="space-y-3 text-center">
            <div className="rounded-3xl p-2 bg-[#0A2B20] border border-[#26382F] shadow-md overflow-hidden">
              <img
                src="/app-screens/screen-profile.png"
                alt="Gezgin Profili"
                width={460}
                height={1024}
                className="w-full h-auto rounded-2xl object-contain block"
                loading="lazy"
              />
            </div>
            <p className="text-xs font-bold text-[#101412]">Gezgin Profili</p>
          </div>
        </div>
      </section>

      {/* 5. Android Sürüm Durumu Kapanış Alanı */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#FFFFFF] border-2 border-[#0F3D2E] rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F3D2E] uppercase tracking-wider">
              {downloadReady ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Android Sürümü Yayında</span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 text-[#D97706]" />
                  <span>Android Sürümü Hazırlanıyor (v{DOWNLOAD_CONFIG.version})</span>
                </>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101412]">
              SKAVVIA Android Dağıtım Durumu
            </h3>
            <p className="text-[#646B78] text-sm sm:text-base max-w-md">
              {downloadReady
                ? 'Resmi APK dosyasını indirerek Android cihazınızda hemen keşfe başlayabilirsiniz.'
                : `v${DOWNLOAD_CONFIG.version} (${DOWNLOAD_CONFIG.architecture}, ~${DOWNLOAD_CONFIG.size}) test paketi hazırlanmaktadır. Dağıtım detayları ve gereksinimler için indirme sayfasını inceleyebilirsiniz.`}
            </p>
          </div>

          <Link
            to="/download"
            className="shrink-0 inline-flex items-center gap-2.5 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-base font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949]"
          >
            <Smartphone className="w-5 h-5 text-[#E9B949]" />
            <span>İndirme Sayfasını İncele</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
