import React, { useEffect } from 'react';
import { Link } from '../router';
import { PhoneMockup } from '../components/PhoneMockup';
import { Smartphone } from 'lucide-react';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'SKAVVIA — Keşfet. Paylaş. İz Bırak.';
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Keşfet',
      desc: 'Yeni yerlerden ve paylaşılan rotalardan ilham al.',
    },
    {
      step: '02',
      title: 'Paylaş',
      desc: 'Fotoğraflarını, duraklarını ve deneyimlerini paylaş.',
    },
    {
      step: '03',
      title: 'İz Bırak',
      desc: 'Keşiflerini biriktir, başkalarına ilham ver.',
    },
  ];

  return (
    <div>
      {/* 1. Hero Section (Approved Figma 1440 Fill x 748 Hug Specification) */}
      <section className="relative w-full overflow-hidden min-h-[640px] md:min-h-[700px] lg:min-h-[748px] flex items-center bg-[#F5F5F0]">
        {/* Full-width mountain photography background with soft off-white atmospheric fade on the left */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/images/home/skavvia-home-hero.png"
            alt="SKAVVIA Doğa ve Rota Keşfi"
            className="w-full h-full object-cover object-right lg:object-center"
            loading="eager"
          />
          {/* Soft off-white atmospheric gradient fade on the left, clear landscape on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F0] via-[#F5F5F0]/85 via-32% md:via-42% to-transparent pointer-events-none" />
          {/* Subtle bottom transition fade */}
          <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#F5F5F0] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px] py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Eyebrow, Display Headline, Paragraph, CTAs & Android Status (Shifted upward to match Figma vertical cadence) */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-6 text-left lg:-translate-y-5 xl:-translate-y-6">
              {/* Eyebrow with gold accent bar */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#E9B949] rounded-full inline-block shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-[#0F3D2E] tracking-wide">
                  Yeni yerler. Yeni hikâyeler.
                </span>
              </div>

              {/* Large Display Headline in Forest Green #0F3D2E (Keşfet. Paylaş. / İz Bırak.) */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-display font-semibold text-[#0F3D2E] tracking-tight leading-[1.08]">
                Keşfet. Paylaş. <br />
                İz Bırak.
              </h1>

              {/* Supporting Turkish Paragraph */}
              <p className="text-base sm:text-lg text-[#55605A] max-w-[480px] font-normal leading-relaxed">
                Şehrin içinden doğanın kalbine; yeni yerler keşfet, rotanı paylaş, kendi hikâyeni oluştur.
              </p>

              {/* CTAs */}
              <div className="pt-1 flex flex-wrap items-center gap-4">
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-sm font-medium px-6 sm:px-7 py-3 rounded-full shadow-xs hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Android Sürümü Durumu"
                >
                  <span>Android Sürümü</span>
                  <span className="text-[#E9B949] text-base leading-none font-normal" aria-hidden="true">↗</span>
                </Link>

                <Link
                  to="/#ozellikler"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/70 text-[#0F3D2E] border border-[#BAC3BD] text-sm font-medium px-6 sm:px-7 py-3 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span>Özellikleri Keşfet</span>
                </Link>
              </div>

              {/* Android Status Note */}
              <div className="flex items-center gap-2 text-xs text-[#6B7280] pt-1">
                <span className="w-2 h-2 rounded-full bg-[#E9B949] shrink-0" aria-hidden="true" />
                <span>Android sürümü hazırlanıyor.</span>
              </div>
            </div>

            {/* Right Column: Phone Presentation with Screen Selector (Aligned to right edge of content grid) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end xl:translate-x-2">
              <PhoneMockup initialScreen="discover" interactive={true} />
            </div>

          </div>
        </div>
      </section>

      {/* 2. "Nasıl Çalışır" Section (Approved Figma Implementation) */}
      <section className="relative w-full overflow-hidden bg-[#F5F5F0] pt-12 sm:pt-14 pb-16 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Background Landscape Asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/images/home/skavvia-how-it-works-bg.png"
            alt=""
            className="w-full h-full object-cover object-right-bottom lg:object-center"
            loading="lazy"
            aria-hidden="true"
          />
          {/* Subtle readability gradient fade on the left, clear landscape on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F0]/85 via-[#F5F5F0]/35 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px]">
          {/* Top Heading Area: Eyebrow + Headline on Left, Supporting Line on Right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8 pb-10 sm:pb-12 lg:pb-14">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#E9B949] rounded-full inline-block shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-[#0F3D2E] tracking-wide">
                  Nasıl çalışır
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-display font-semibold text-[#0F3D2E] tracking-tight leading-[1.15]">
                Her keşif bir hikâyeye dönüşür.
              </h2>
            </div>
            <div className="lg:text-right lg:pb-1">
              <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed">
                İlhamdan paylaşıma uzanan sade bir keşif akışı.
              </p>
            </div>
          </div>

          {/* Three Step Editorial Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {steps.map((st) => (
              <div key={st.step} className="pt-6 border-t border-[#E1E4DE] space-y-3">
                <span className="text-xs sm:text-sm font-semibold text-[#E9B949] tracking-wider block">
                  {st.step}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F3D2E] tracking-tight">
                  {st.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Discover Section (Approved Figma Implementation) */}
      <section id="ozellikler" className="relative w-full overflow-hidden bg-[#F5F5F0] py-16 sm:py-20 lg:py-24 scroll-mt-20">
        {/* Background Landscape Asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/images/home/skavvia-discover-section-bg-v2.png"
            alt=""
            className="w-full h-full object-cover object-right lg:object-center"
            loading="lazy"
            aria-hidden="true"
          />
          {/* Subtle readability gradient fade on the left, clear landscape on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F0] via-[#F5F5F0]/85 via-32% md:via-42% to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Eyebrow, Display Headline, Paragraph, Small Footer Label */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Eyebrow with gold accent bar */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#E9B949] rounded-full inline-block shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-[#0F3D2E] tracking-wide">
                  Keşfet
                </span>
              </div>

              {/* Large Display Headline in Forest Green #0F3D2E */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-display font-semibold text-[#0F3D2E] tracking-tight leading-[1.12]">
                Bir sonraki keşfin <br className="hidden sm:inline" />
                burada başlasın.
              </h2>

              {/* Short Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#55605A] max-w-md font-normal leading-relaxed">
                Topluluktan fotoğraflar ve seyahat notlarıyla yeni yerler bul. İlgi çeken keşifleri kaydet.
              </p>

              {/* Small Footer Label */}
              <div className="pt-2">
                <span className="text-xs font-medium text-[#8A948F] tracking-wide">
                  Keşfet ekranı
                </span>
              </div>
            </div>

            {/* Right Column: Restored Physical Device Shell with V2 Discover Screen */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[270px] sm:max-w-[295px] md:max-w-[245px] lg:max-w-[255px] xl:max-w-[260px] rounded-[44px] p-2.5 sm:p-3 bg-[#0A2B20] shadow-2xl ring-1 ring-white/20 select-none">
                {/* Subtle Side Buttons on Device Frame */}
                <div className="absolute -left-[4px] top-24 w-[3px] h-8 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
                <div className="absolute -left-[4px] top-36 w-[3px] h-12 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
                <div className="absolute -right-[4px] top-28 w-[3px] h-14 bg-[#13231D] rounded-r-sm" aria-hidden="true" />

                {/* Screen Display Bezel */}
                <div className="relative w-full overflow-hidden rounded-[36px] bg-[#08130F] border border-[#26382F] shadow-inner">
                  <img
                    src="/images/home/skavvia-discover-phone-mockup-v2.png"
                    alt="SKAVVIA Keşfet ekranı"
                    width={841}
                    height={1870}
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Map Section (Approved Figma Implementation) */}
      <section id="harita" className="relative w-full overflow-hidden bg-[#F5F5F0] py-16 sm:py-20 lg:py-24 scroll-mt-20">
        {/* Background Landscape Asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/images/home/skavvia-map-section-bg-v2.png"
            alt=""
            className="w-full h-full object-cover object-left lg:object-center"
            loading="lazy"
            aria-hidden="true"
          />
          {/* Subtle readability gradient fade on the right where text content sits, clear landscape on the left around phone */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#F5F5F0] via-[#F5F5F0]/85 via-32% md:via-42% to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Visual Column (Desktop Left / Mobile Below Text): Framed Map Phone */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[270px] sm:max-w-[295px] md:max-w-[245px] lg:max-w-[255px] xl:max-w-[260px] rounded-[44px] p-2.5 sm:p-3 bg-[#0A2B20] shadow-2xl ring-1 ring-white/20 select-none">
                {/* Subtle Side Buttons on Device Frame */}
                <div className="absolute -left-[4px] top-24 w-[3px] h-8 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
                <div className="absolute -left-[4px] top-36 w-[3px] h-12 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
                <div className="absolute -right-[4px] top-28 w-[3px] h-14 bg-[#13231D] rounded-r-sm" aria-hidden="true" />

                {/* Screen Display Bezel */}
                <div className="relative w-full overflow-hidden rounded-[36px] bg-[#08130F] border border-[#26382F] shadow-inner">
                  <img
                    src="/images/home/skavvia-map-screen-v2.png"
                    alt="SKAVVIA Harita ekranı"
                    width={841}
                    height={1870}
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Editorial Column (Desktop Right / Mobile First): Eyebrow, Display Headline, Paragraph, Label */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
              {/* Eyebrow with gold accent bar */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#E9B949] rounded-full inline-block shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-[#0F3D2E] tracking-wide">
                  Harita
                </span>
              </div>

              {/* Large Display Headline in Forest Green #0F3D2E */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-display font-semibold text-[#0F3D2E] tracking-tight leading-[1.12]">
                Yakınında keşfedilecek <br className="hidden sm:inline" />
                bir yer var.
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#55605A] max-w-md font-normal leading-relaxed">
                Paylaşılan yerleri haritada incele; konumları ve rota başlangıçlarını bir arada gör.
              </p>

              {/* Small Supporting Label */}
              <div className="pt-2">
                <span className="text-xs font-medium text-[#8A948F] tracking-wide">
                  Harita ekranı
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Routes Section (Approved Figma Implementation) */}
      <section id="rotalar" className="relative w-full overflow-hidden bg-[#F5F5F0] py-16 sm:py-20 lg:py-24 scroll-mt-20">
        {/* Background Landscape Asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/images/home/skavvia-routes-section-bg-v2.png"
            alt=""
            className="w-full h-full object-cover object-right lg:object-center"
            loading="lazy"
            aria-hidden="true"
          />
          {/* Subtle readability gradient fade on the left where text sits, clear landscape on the right around phone */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F0] via-[#F5F5F0]/85 via-32% md:via-42% to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Editorial Column: Eyebrow, Display Headline, Paragraph, Label */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Eyebrow with gold accent bar */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#E9B949] rounded-full inline-block shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-[#0F3D2E] tracking-wide">
                  Rotalar
                </span>
              </div>

              {/* Large Display Headline in Forest Green #0F3D2E */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-display font-semibold text-[#0F3D2E] tracking-tight leading-[1.12]">
                Her durakta yeni bir <br className="hidden sm:inline" />
                hikâye.
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#55605A] max-w-md font-normal leading-relaxed">
                Durakları incele, paylaşılan rotalardan ilham al ve kendi keşif planını oluştur.
              </p>

              {/* Small Supporting Label */}
              <div className="pt-2">
                <span className="text-xs font-medium text-[#8A948F] tracking-wide">
                  Rotalar ekranı
                </span>
              </div>
            </div>

            {/* Right Visual Column: Framed Routes Phone + Stop Indicator */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-3.5 sm:gap-6">
              {/* SKAVVIA Physical Device Frame */}
              <div className="relative w-full max-w-[220px] sm:max-w-[270px] md:max-w-[235px] lg:max-w-[250px] xl:max-w-[255px] rounded-[44px] p-2.5 sm:p-3 bg-[#0A2B20] shadow-2xl ring-1 ring-white/20 select-none shrink-0">
                {/* Subtle Side Buttons on Device Frame */}
                <div className="absolute -left-[4px] top-24 w-[3px] h-8 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
                <div className="absolute -left-[4px] top-36 w-[3px] h-12 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
                <div className="absolute -right-[4px] top-28 w-[3px] h-14 bg-[#13231D] rounded-r-sm" aria-hidden="true" />

                {/* Screen Display Bezel */}
                <div className="relative w-full overflow-hidden rounded-[36px] bg-[#08130F] border border-[#26382F] shadow-inner">
                  <img
                    src="/images/home/skavvia-routes-screen-v2.png"
                    alt="SKAVVIA Rotalar ekranı"
                    width={841}
                    height={1870}
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Stop Indicator */}
              <div className="flex flex-col gap-3.5 sm:gap-4 justify-center select-none py-4 shrink-0" aria-label="Rota durakları göstergesi">
                {[
                  { id: 1, label: 'Durak 1', active: true },
                  { id: 2, label: 'Durak 2', active: false },
                  { id: 3, label: 'Durak 3', active: false },
                  { id: 4, label: 'Durak 4', active: false },
                ].map((stop) => (
                  <div key={stop.id} className="flex items-center gap-2 sm:gap-2.5">
                    <span
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 ${
                        stop.active
                          ? 'bg-[#E9B949] ring-2 sm:ring-4 ring-[#E9B949]/30'
                          : 'bg-[#0F3D2E]/35'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-[11px] sm:text-xs font-semibold tracking-wide ${
                        stop.active ? 'text-[#0F3D2E]' : 'text-[#8A948F]'
                      }`}
                    >
                      {stop.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Profile Section (Approved Figma Implementation) */}
      <section id="profil" className="relative w-full overflow-hidden bg-[#F5F5F0] py-16 sm:py-20 lg:py-24 scroll-mt-20">
        {/* Background Landscape Asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/images/home/skavvia-profile-section-bg-v2.png"
            alt=""
            className="w-full h-full object-cover object-left lg:object-center"
            loading="lazy"
            aria-hidden="true"
          />
          {/* Subtle readability gradient fade on the right where text content sits, clear landscape on the left around phone */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#F5F5F0] via-[#F5F5F0]/85 via-32% md:via-42% to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Visual Column (Desktop Left / Mobile Below Text): Framed Profile Phone */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[270px] sm:max-w-[295px] md:max-w-[245px] lg:max-w-[255px] xl:max-w-[260px] rounded-[44px] p-2.5 sm:p-3 bg-[#0A2B20] shadow-2xl ring-1 ring-white/20 select-none">
                {/* Subtle Side Buttons on Device Frame */}
                <div className="absolute -left-[4px] top-24 w-[3px] h-8 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
                <div className="absolute -left-[4px] top-36 w-[3px] h-12 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
                <div className="absolute -right-[4px] top-28 w-[3px] h-14 bg-[#13231D] rounded-r-sm" aria-hidden="true" />

                {/* Screen Display Bezel */}
                <div className="relative w-full overflow-hidden rounded-[36px] bg-[#08130F] border border-[#26382F] shadow-inner">
                  <img
                    src="/images/home/skavvia-profile-screen-v2.png"
                    alt="SKAVVIA Profil ekranı"
                    width={841}
                    height={1870}
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Editorial Column (Desktop Right / Mobile First): Eyebrow, Display Headline, Paragraph, Label */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
              {/* Eyebrow with gold accent bar */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#E9B949] rounded-full inline-block shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-[#0F3D2E] tracking-wide">
                  Profil
                </span>
              </div>

              {/* Large Display Headline in Forest Green #0F3D2E */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-display font-semibold text-[#0F3D2E] tracking-tight leading-[1.12]">
                Keşiflerin senin <br className="hidden sm:inline" />
                hikâyen.
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#55605A] max-w-md font-normal leading-relaxed">
                Paylaşımlarını ve rotalarını tek yerde biriktir. Yolculuklarından sana ait bir keşif günlüğü oluştur.
              </p>

              {/* Small Supporting Label */}
              <div className="pt-2">
                <span className="text-xs font-medium text-[#8A948F] tracking-wide">
                  Profil ekranı
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Android Preparation CTA */}
      <section aria-labelledby="android-preparation-title" className="relative w-full overflow-hidden bg-[#06291F] text-[#F5F5F0]">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src="/images/home/skavvia-android-cta-bg-v2.png"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041F18]/95 via-[#06291F]/80 to-[#06291F]/25" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px] py-20 sm:py-24 lg:py-28">
          <div className="max-w-xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#E9B949] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold text-[#E9B949] tracking-wide">Android hazırlık</span>
            </div>
            <h2 id="android-preparation-title" className="text-4xl sm:text-5xl lg:text-[56px] font-display font-semibold tracking-tight leading-[1.08]">
              Yeni keşiflere hazırlan.
            </h2>
            <p className="text-base sm:text-lg text-[#F5F5F0]/85 leading-relaxed max-w-md">
              Android sürümü hazırlanıyor. Yayınlandığında buradan indirebilirsin.
            </p>
            <Link
              to="/download"
              className="inline-flex items-center gap-2 rounded-full bg-[#E9B949] px-6 py-3 text-sm font-semibold text-[#0A2B20] shadow-lg hover:bg-[#F4D47A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Smartphone className="w-4 h-4" aria-hidden="true" />
              <span>Android Sürümü</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
