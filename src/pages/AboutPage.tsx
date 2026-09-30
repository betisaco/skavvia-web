import React, { useEffect } from 'react';
import { Bookmark, Image as ImageIcon, MapPin, Smartphone } from 'lucide-react';
import { Link } from '../router';

const values = [
  {
    number: '01',
    title: 'Yakınından başla',
    body: 'Şehrindeki bir sokak, sahil ya da doğa rotası; keşfetmek için uzağa gitmen gerekmiyor.',
    image: '/images/about/skavvia-about-nearby-v2.png',
    alt: 'Denize bakan bir tepede yeni yerler keşfeden gezgin',
    Icon: MapPin,
  },
  {
    number: '02',
    title: 'Deneyimini paylaş',
    body: 'Fotoğraflarını ve keşif notlarını paylaş; başkalarının yeni yerlerle tanışmasına katkıda bulun.',
    image: '/images/about/skavvia-about-share-v2.png',
    alt: 'Manzara karşısında fotoğraf makinesi ve açık keşif defteri',
    Icon: ImageIcon,
  },
  {
    number: '03',
    title: 'İzini bırak',
    body: 'İlgini çeken keşifleri kaydet, paylaşımlarını ve rotalarını profilinde bir araya getir.',
    image: '/images/about/skavvia-about-trace-v2.png',
    alt: 'Doğa rotalarını gösteren ahşap yön tabelaları',
    Icon: Bookmark,
  },
];

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Hakkımızda — SKAVVIA';
  }, []);

  return (
    <div className="bg-[#F5F5F0]">
      <section aria-labelledby="about-title" className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px] pt-10 sm:pt-12 lg:pt-10 pb-14 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] gap-10 lg:gap-12 xl:gap-14 items-center">
          <div className="space-y-7">
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
              <span>Hakkımızda</span>
              <span className="w-8 h-px bg-[#E9B949]" aria-hidden="true" />
            </div>
            <h1 id="about-title" className="font-display font-semibold text-[#101F1C] text-4xl sm:text-5xl lg:text-[clamp(36px,3.5vw,52px)] leading-[1.06] tracking-tight">
              <span className="block">Her keşif,</span>
              <span className="block">paylaşılmaya değer.</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-[#6B7280]">
              SKAVVIA; yeni yerler keşfetmek, rotalardan ilham almak ve deneyimlerini paylaşmak için tasarlanmış sosyal keşif alanıdır.
            </p>
            <div className="flex items-start gap-4 pt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] leading-relaxed text-[#8D9892]">
              <span className="mt-2 w-8 h-px bg-[#E9B949] shrink-0" aria-hidden="true" />
              <span>Daha fazla yer. Daha fazla hikâye. Daha yakın bir dünya.</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] shadow-[0_18px_44px_rgba(10,43,32,0.12)] aspect-[5/3]">
            <img
              src="/images/about/skavvia-about-hero-v2.png"
              alt="Kaş kıyısında gün batımı, tepede kale ve manzaraya yürüyen gezgin"
              width={1672}
              height={941}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 inline-flex items-center gap-2.5 rounded-xl bg-[#0A2B20]/80 px-3.5 py-2.5 text-[#F5F5F0] backdrop-blur-sm shadow-lg">
              <MapPin className="w-5 h-5 text-[#E9B949] shrink-0" aria-hidden="true" />
              <div className="leading-tight">
                <span className="block text-xs font-semibold">Kaş, Antalya</span>
                <span className="block pt-1 text-[10px] font-semibold tracking-[0.2em]">TÜRKİYE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-title" className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px] pb-12 lg:pb-10">
        <div className="flex items-center gap-4 text-sm font-medium text-[#6B7280]">
          <span>Neden SKAVVIA?</span>
          <span className="w-8 h-px bg-[#E9B949]" aria-hidden="true" />
        </div>
        <h2 id="why-title" className="mt-4 font-display font-semibold text-[#0F3D2E] text-4xl sm:text-[44px] lg:text-[48px] leading-tight tracking-tight">
          Keşif uzağında değil.
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-12 text-base leading-relaxed text-[#6B7280]">
          <p>
            Bazen en etkileyici keşifler, sandığımızdan çok daha yakınımızdadır. SKAVVIA, yaşadığın şehirdeki saklı güzellikleri, doğa rotalarını, tarihi noktaları ve ilham veren yerleri keşfetmen için var.
          </p>
          <p className="md:border-l md:border-[#C8CEC8] md:pl-10 lg:pl-12">
            Deneyimlerini paylaşarak başkalarının yeni yerlerle tanışmasına katkıda bulunabilir, kendi hikâyeni biriktirebilirsin. Çünkü her rota, keşfedenlerin hikâyeleriyle daha anlamlı hale gelir.
          </p>
        </div>
      </section>

      <section aria-label="SKAVVIA değerleri" className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px] pb-12 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {values.map(({ number, title, body, image, alt, Icon }) => (
            <article key={number} className="h-full flex flex-col overflow-hidden rounded-[24px] bg-[#F5F5F0] shadow-[0_12px_32px_rgba(10,43,32,0.09)]">
              <div className="relative">
                <img src={image} alt={alt} width={1672} height={941} loading="lazy" className="w-full aspect-[2.3] md:aspect-auto md:h-[220px] lg:h-auto lg:aspect-[2.3] object-cover" />
                <span className="absolute -bottom-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#F5F5F0] text-[#0F3D2E] shadow-md" aria-hidden="true">
                  <Icon className="w-5 h-5" />
                </span>
              </div>
              <div className="flex-1 px-5 pt-4 pb-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-3xl text-[#E9B949] leading-none">{number}</span>
                  <div className="min-w-0">
                    <div className="mb-2 h-px w-8 bg-[#E9B949]" aria-hidden="true" />
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold leading-tight text-[#0F3D2E]">{title}</h3>
                  </div>
                </div>
                <p className="mt-2 pl-14 text-sm leading-relaxed text-[#6B7280]">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="story-title" className="max-w-[1440px] mx-auto px-6 lg:px-7 pb-12 lg:pb-12">
        <div className="relative flex min-h-[340px] lg:min-h-[260px] items-center overflow-hidden rounded-[28px] bg-[#0A2B20]">
          <img
            src="/images/about/skavvia-about-story-bg-v2.png"
            alt=""
            width={1942}
            height={809}
            loading="lazy"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-[#0A2B20]/65 lg:bg-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0A2B20]/55 lg:to-[#0A2B20]/95" aria-hidden="true" />
          <div className="relative z-10 w-full lg:w-1/2 lg:ml-auto px-7 py-12 sm:px-12 lg:px-14 lg:py-10 xl:px-20 text-[#F5F5F0]">
            <h2 id="story-title" className="font-display text-4xl sm:text-5xl lg:text-[48px] leading-[1.08] font-semibold tracking-tight">
              <span className="block">Bir yer keşfet.</span>
              <span className="block text-[#E9B949]">Bir hikâye bırak.</span>
            </h2>
            <p className="mt-5 max-w-md text-base sm:text-lg leading-relaxed text-[#F5F5F0]/90">
              SKAVVIA, keşifleri yalnızca konum olarak değil, deneyim olarak biriktirir.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-cta-title" className="px-6 sm:px-10 py-2 pb-16 lg:pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 id="about-cta-title" className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#101F1C]">
            Sıradaki keşfin yakında olabilir.
          </h2>
          <p className="mt-4 text-base text-[#6B7280] leading-relaxed">
            Yeni yerler, ilham veren rotalar ve daha fazla hikâye için şimdi katıl.
          </p>
          <Link
            to="/download"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0F3D2E] px-7 py-3 text-sm font-semibold text-[#F5F5F0] shadow-sm transition-colors hover:bg-[#0A2B20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949]"
          >
            <Smartphone className="w-4 h-4 text-[#E9B949]" aria-hidden="true" />
            <span>Android için SKAVVIA</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
