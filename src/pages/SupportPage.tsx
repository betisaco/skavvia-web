import React, { useEffect, useState } from 'react';
import { AlertCircle, ArrowRight, ChevronDown, Clock3, HelpCircle, Mail, Search, Shield } from 'lucide-react';
import { Link } from '../router';

const supportMailto = 'mailto:support@skavvia.com?subject=SKAVVIA%20Destek%20Talebi';
const bugMailto = 'mailto:support@skavvia.com?subject=SKAVVIA%20Sorun%20Bildirimi';

const categories = ['Tümü', 'Hesap', 'Harita & Konum', 'Rotalar', 'Android', 'Gizlilik'] as const;
type FaqCategory = Exclude<(typeof categories)[number], 'Tümü'>;

const faqs: { number: string; category: FaqCategory; question: string; answer: string }[] = [
  { number: '01', category: 'Hesap', question: 'SKAVVIA mobil uygulamasına nasıl kayıt olabilirim?', answer: 'Uygulamayı Android cihazına yükledikten sonra e-posta adresin ve şifrenle ya da desteklenen giriş yöntemlerinden biriyle hızlıca hesap oluşturabilirsin.' },
  { number: '02', category: 'Harita & Konum', question: 'Uygulama neden konum izni istiyor?', answer: 'Konum izni; yakındaki keşifleri göstermek, harita deneyimini geliştirmek ve rota özelliklerini kullanabilmek için istenir. Konumun yalnızca izin verdiğin özelliklerde kullanılır.' },
  { number: '03', category: 'Android', question: 'APK kurulumu sırasında “Bilinmeyen Uygulama” uyarısı alıyorum. Ne yapmalıyım?', answer: "Android, Play Store dışından yüklenen uygulamalar için ek güvenlik onayı isteyebilir. Yalnızca SKAVVIA'nın resmi indirme sayfasından edindiğin paketi kullan ve cihazındaki Android güvenlik adımlarını takip et." },
  { number: '04', category: 'Rotalar', question: 'Oluşturduğum rotaları kimler görebilir?', answer: 'Rotaların görünürlüğü, uygulamadaki paylaşım ve gizlilik ayarlarına bağlıdır. Paylaşmadan önce rota görünürlüğünü kontrol et.' },
  { number: '05', category: 'Gizlilik', question: 'Hesabımı veya verilerimi nasıl silebilirim?', answer: "Hesap silme talebini uygulamadaki ilgili seçeneklerden veya SKAVVIA'nın hesap silme sayfasından başlatabilirsin." },
];

export const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Tümü');
  const [openFaq, setOpenFaq] = useState<string | null>('01');

  useEffect(() => { document.title = 'Destek & İletişim — SKAVVIA'; }, []);

  const normalizedQuery = searchQuery.trim().toLocaleLowerCase('tr-TR');
  const visibleFaqs = faqs.filter((faq) =>
    (activeCategory === 'Tümü' || faq.category === activeCategory) &&
    (!normalizedQuery || `${faq.question} ${faq.answer}`.toLocaleLowerCase('tr-TR').includes(normalizedQuery))
  );

  return (
    <div className="bg-[#F5F5F0]">
      <section aria-labelledby="support-title" className="relative isolate overflow-hidden">
        <img src="/images/support/skavvia-support-hero-bg-v2.png" alt="" aria-hidden="true" width={1916} height={821} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] sm:object-right" />
        <div className="absolute inset-0 -z-10 bg-[#F5F5F0]/70 sm:hidden" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 hidden sm:block" style={{ background: 'linear-gradient(90deg, rgba(245,245,240,0.86) 0%, rgba(245,245,240,0.68) 30%, rgba(245,245,240,0.44) 55%, rgba(245,245,240,0.14) 100%)' }} aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 left-0 -z-[5] w-[140px] opacity-20 sm:opacity-35" style={{ backgroundImage: 'repeating-radial-gradient(ellipse at 0% 55%, transparent 0 16px, rgba(15,61,46,0.1) 17px 18px, transparent 19px 30px)' }} aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-[4] h-16 bg-gradient-to-b from-transparent to-[#F5F5F0]" aria-hidden="true" />
        <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-12 sm:px-10 md:pt-14 lg:px-20 xl:px-[120px] lg:pb-14">
          <div className="max-w-[940px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E3EFE7]/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0F3D2E]"><HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />Yardım Merkezi</span>
            <h1 id="support-title" className="mt-5 font-serif text-[clamp(38px,5vw,64px)] font-bold leading-[1.06] tracking-tight text-[#101F1C]">Nasıl yardımcı olabiliriz?</h1>
            <p className="mt-3 max-w-[760px] text-base leading-relaxed text-[#5A6473] sm:text-lg">SKAVVIA ile ilgili sorularına hızlıca yanıt bul veya bizimle iletişime geç.</p>
          </div>

          <div className="relative mt-6 max-w-[1120px]">
            <label htmlFor="support-search" className="sr-only">Sıkça sorulan sorularda ara</label>
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#263A42]" aria-hidden="true" />
            <input id="support-search" type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Bir konu veya soru ara..." autoComplete="off" className="h-14 w-full rounded-2xl border border-[#D5DDD8] bg-white py-3 pl-14 pr-5 text-base text-[#101F1C] shadow-[0_8px_24px_rgba(15,61,46,0.06)] outline-none placeholder:text-[#6B7280] focus:border-[#0F3D2E]" />
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5" aria-label="Destek seçenekleri">
            <article className="relative flex min-h-[214px] flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_28px_rgba(15,61,46,0.06)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#0F3D2E]/[0.11] shadow-[0_0_0_12px_rgba(15,61,46,0.035),0_0_0_26px_rgba(15,61,46,0.035)]" aria-hidden="true" />
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E2EEE7] text-[#0F3D2E]"><Mail className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="font-serif text-[25px] font-bold leading-tight text-[#101F1C]">Genel Destek</h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#6B7280]">Hesap, kullanım ve platform özellikleriyle ilgili soruların için bizimle iletişime geç.</p>
              <a href={supportMailto} className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-sm font-semibold text-[#0F3D2E] hover:underline">Destek ekibine yaz <ArrowRight className="h-4 w-4 text-[#C48608]" aria-hidden="true" /></a>
            </article>
            <article className="relative flex min-h-[214px] flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_28px_rgba(15,61,46,0.06)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#0F3D2E]/[0.11] shadow-[0_0_0_12px_rgba(15,61,46,0.035),0_0_0_26px_rgba(15,61,46,0.035)]" aria-hidden="true" />
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FCE9BB] text-[#0F3D2E]"><AlertCircle className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="font-serif text-[25px] font-bold leading-tight text-[#101F1C]">Sorun Bildir</h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#6B7280]">Uygulama içinde karşılaştığın hata, donma veya beklenmeyen davranışları bize ilet.</p>
              <a href={bugMailto} className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-sm font-semibold text-[#0F3D2E] hover:underline">Sorun bildir <ArrowRight className="h-4 w-4 text-[#C48608]" aria-hidden="true" /></a>
            </article>
            <article className="relative flex min-h-[214px] flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_28px_rgba(15,61,46,0.06)] md:col-span-2 lg:col-span-1">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#0F3D2E]/[0.11] shadow-[0_0_0_12px_rgba(15,61,46,0.035),0_0_0_26px_rgba(15,61,46,0.035)]" aria-hidden="true" />
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E2EEE7] text-[#0F3D2E]"><Shield className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="font-serif text-[25px] font-bold leading-tight text-[#101F1C]">Hesap & Gizlilik</h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#6B7280]">Hesap silme, veri, güvenlik ve gizlilikle ilgili konular için yardım al.</p>
              <Link to="/privacy" className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-sm font-semibold text-[#0F3D2E] hover:underline">Detayları görüntüle <ArrowRight className="h-4 w-4 text-[#C48608]" aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <div className="relative isolate overflow-hidden">
        <img src="/images/support/skavvia-support-contact-bg-v2.png" alt="" aria-hidden="true" width={2128} height={739} loading="lazy" className="absolute inset-x-0 bottom-0 -z-20 h-[78%] w-full object-cover object-bottom" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.18) 25%, rgba(0,0,0,0.6) 55%, #000 80%)' }} />
        <div className="pointer-events-none absolute bottom-0 right-0 -z-[5] h-[340px] w-[300px] opacity-50" style={{ backgroundImage: 'repeating-radial-gradient(ellipse at 100% 100%, transparent 0 17px, rgba(245,245,240,0.24) 18px 19px, transparent 20px 32px)' }} aria-hidden="true" />
      <div className="mx-auto max-w-[1440px] px-6 pt-7 sm:px-10 lg:px-20 xl:px-[120px]">
        <aside className="grid gap-5 rounded-2xl border border-[#C8DCD0] bg-[#E7F0E9] px-6 py-5 text-[#0F3D2E] md:grid-cols-[1.25fr_1fr] md:items-center md:gap-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D3E5D9]"><Mail className="h-5 w-5" aria-hidden="true" /></span>
            <div className="min-w-0 border-l border-[#B8D0C1] pl-4"><p className="break-words text-sm font-semibold">E-posta desteği: support@skavvia.com</p><p className="mt-1 text-xs leading-relaxed text-[#4F6C60]">Genellikle 24–48 saat içinde yanıt veriyoruz.</p></div>
          </div>
          <div className="flex items-center gap-4 border-t border-[#B8D0C1] pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0"><Clock3 className="h-7 w-7 shrink-0" aria-hidden="true" /><p className="text-sm leading-relaxed text-[#4F6C60]">Sorularını titizlikle inceliyor,<br className="hidden sm:block" /> en kısa sürede geri dönüş sağlıyoruz.</p></div>
        </aside>
      </div>

      <section aria-labelledby="faq-title" className="mx-auto max-w-[1440px] px-6 pb-12 pt-10 sm:px-10 lg:px-20 xl:px-[120px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="faq-title" className="font-serif text-3xl font-bold tracking-tight text-[#101F1C] sm:text-[42px]">Sıkça Sorulan Sorular</h2>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Sıkça sorulan soru kategorileri">
            {categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${activeCategory === category ? 'bg-[#0F3D2E] text-white' : 'bg-[#E9EBE8] text-[#29443B] hover:bg-[#DCE7DF]'}`}>{category}</button>)}
          </div>
        </div>
        <div className="mt-5 space-y-3" aria-live="polite">
          {visibleFaqs.length === 0 ? (
            <div className="rounded-2xl bg-white px-6 py-10 text-center shadow-[0_4px_20px_rgba(15,61,46,0.04)]"><p className="font-serif text-2xl font-semibold text-[#101F1C]">Sonuç bulunamadı.</p><p className="mt-2 text-sm text-[#6B7280]">Farklı bir arama veya kategori deneyebilirsin.</p></div>
          ) : visibleFaqs.map((faq) => {
            const isOpen = openFaq === faq.number;
            const panelId = `faq-answer-${faq.number}`;
            return <article key={faq.number} className={`overflow-hidden rounded-xl bg-white shadow-[0_4px_18px_rgba(15,61,46,0.045)] transition-colors ${isOpen ? 'ring-1 ring-[#DDE8DF]' : ''}`}>
              <h3><button type="button" onClick={() => setOpenFaq(isOpen ? null : faq.number)} aria-expanded={isOpen} aria-controls={panelId} className="flex w-full items-center gap-4 px-4 py-3.5 text-left sm:px-5"><span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF0D4] font-serif text-xl text-[#B77C00]" aria-hidden="true">{faq.number}</span><span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-[#101F1C] sm:text-base">{faq.question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[#101F1C] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" /></button></h3>
              <div id={panelId} hidden={!isOpen} className="pb-5 pl-[68px] pr-5 sm:pl-[76px]"><p className="text-sm leading-relaxed text-[#6B7280]">{faq.answer}</p>{faq.number === '05' && <Link to="/delete-account" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F3D2E] hover:underline">Hesap silme sayfası <ArrowRight className="h-4 w-4 text-[#C48608]" aria-hidden="true" /></Link>}</div>
            </article>;
          })}
        </div>
      </section>

      <section aria-labelledby="contact-title" className="relative isolate flex min-h-[230px] items-center justify-center overflow-hidden px-6 py-10 text-center sm:min-h-[240px]">
        <div className="absolute inset-0 -z-10 sm:hidden" style={{ background: 'radial-gradient(ellipse 100% 75% at 50% 42%, rgba(245,245,240,0.88) 0%, rgba(245,245,240,0.58) 55%, rgba(245,245,240,0.08) 100%)' }} aria-hidden="true" />
        <div className="absolute inset-0 -z-10 hidden sm:block" style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 48%, rgba(245,245,240,0.76) 0%, rgba(245,245,240,0.15) 100%)' }} aria-hidden="true" />
        <div><h2 id="contact-title" className="font-serif text-3xl font-bold tracking-tight text-[#101F1C] sm:text-[42px]">Yanıtını bulamadın mı?</h2><p className="mt-2 text-sm text-[#536272] sm:text-base">Destek ekibimiz sana yardımcı olmak için burada.</p><a href={supportMailto} className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0F3D2E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A2B20]"><Mail className="h-4 w-4 text-[#E9B949]" aria-hidden="true" />Destek Ekibine Yaz<ArrowRight className="h-4 w-4 text-[#E9B949]" aria-hidden="true" /></a></div>
      </section>
      </div>
    </div>
  );
};
