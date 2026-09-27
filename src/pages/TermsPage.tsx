import React, { useEffect } from 'react';
import { FileText, AlertTriangle, ShieldCheck, Compass, Mail, Users } from 'lucide-react';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Kullanım Koşulları — SKAVVIA';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      {/* Title */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EEE7] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" />
          Kullanıcı Sözleşmesi (Taslak)
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101412] tracking-tight">
          Kullanım Koşulları
        </h1>
        <p className="text-sm text-[#8D9892]">
          Son Güncelleme: 28 Eylül 2026 | Sürüm: 1.0 (Taslak Metin)
        </p>
        <p className="text-base text-[#646B78] leading-relaxed">
          SKAVVIA mobil uygulamasını (com.skavvia.mobile) veya web sitesini (skavvia.com) kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen bu koşulları dikkatlice okuyunuz.
        </p>
      </div>

      <div className="bg-[#FFFFFF] rounded-2xl p-8 sm:p-10 border border-[#E1E4DE] shadow-sm space-y-10 text-[#646B78] text-sm leading-relaxed">

        {/* 1. Hizmet Tanımı */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#101412] flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#0F3D2E]" />
            1. Platform ve Hizmetin Tanımı
          </h2>
          <p>
            SKAVVIA, kullanıcıların keşif duraklarını, gezi anlarını, rotalarını ve seyahat deneyimlerini paylaşabildiği; diğer gezginlerin paylaşımlarını inceleyebildiği ve mesajlaşabildiği bir sosyal keşif platformudur.
          </p>
        </section>

        {/* 2. Hesap Sorumluluğu */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#101412] flex items-center gap-2">
            <Users className="w-5 h-5 text-[#0F3D2E]" />
            2. Hesap Kullanımı ve Güvenliği
          </h2>
          <p>
            Kullanıcı, kayıt olurken doğru ve güncel bilgiler sağlamakla yükümlüdür. Hesap şifresinin gizliliğinden ve hesap üzerinden gerçekleştirilen tüm faaliyetlerden bizzat kullanıcı sorumludur. SKAVVIA, yetkisiz erişim şüphesi taşıyan hesapları geçici veya kalıcı olarak durdurma hakkını saklı tutar.
          </p>
        </section>

        {/* 3. Kullanıcı İçerikleri */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#101412] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#0F3D2E]" />
            3. Kullanıcı Tarafından Oluşturulan İçerikler (UGC)
          </h2>
          <p>
            Paylaştığınız tüm fotoğraflar, rota açıklamaları, durak bilgileri, yorumlar ve anların mülkiyeti size aittir. Ancak bu içerikleri SKAVVIA üzerinde herkese açık veya takipçilerinize paylaştığınızda, platformun işleyişi kapsamında bu içerikleri görüntüleme, barındırma ve dizinleme hakkını SKAVVIA'ya vermiş olursunuz.
          </p>
          <p>
            Telif hakkı size ait olmayan, izinsiz üçüncü şahıs görselleri, iftira, nefret söylemi, şiddet, pornografi veya yasa dışı unsurlar içeren gönderilerin paylaşılması kesinlikle yasaktır.
          </p>
        </section>

        {/* 4. Rota ve Konum Sorumluluk Reddi (ÖNEMLİ) */}
        <section className="space-y-3 p-6 bg-[#F5F5F0] rounded-xl border border-[#E1E4DE]">
          <h2 className="text-xl font-bold text-[#0F3D2E] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#E9B949]" />
            4. Doğa, Rota ve Konum Bilgisi Sorumluluk Reddi
          </h2>
          <p className="text-[#101412] font-medium">
            Outdoor ve doğa keşifleri doğası gereği risk barındırabilir.
          </p>
          <p>
            SKAVVIA üzerinde paylaşılan rotalar, yol tarifleri, durak koordinatları, arazi zorluk dereceleri ve süre tahminleri kullanıcı deneyimlerine dayalıdır ve garanti niteliği taşımaz. Hava durumu, mevsimsel değişimler, yol yapım çalışmaları, vahşi yaşam ve arazi şartları önceden haber vermeksizin değişebilir.
          </p>
          <p>
            Kullanıcılar, herhangi bir rotaya çıkmadan önce yerel makamların uyarılarını kontrol etmek, uygun ekipman ve güvenlik önlemlerini almak ve kendi fiziksel yeterliliklerine göre karar vermekle bizzat sorumludur. SKAVVIA, kullanıcı içeriklerine dayanılarak yapılan yolculuklarda doğabilecek kaza, yaralanma, kaybolma veya maddi hasarlardan sorumlu tutulamaz.
          </p>
        </section>

        {/* 5. Fikri Mülkiyet */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#101412]">5. Fikri Mülkiyet Hakları</h2>
          <p>
            SKAVVIA adı, logosu, wordmark tasarımları, arayüz bileşenleri, yazılım kodları ve platform kimliği SKAVVIA'nın mülkiyetindedir. Önceden yazılı izin alınmaksızın kopyalanamaz, ticari amaçla çoğaltılamaz veya tersine mühendislik uygulanamaz.
          </p>
        </section>

        {/* 6. Hesap Feshi ve Silme */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#101412]">6. Hesap Kısıtlama ve Silme</h2>
          <p>
            Koşulları ihlal eden hesaplar tek taraflı olarak kısıtlanabilir veya kapatılabilir. Kullanıcılar diledikleri zaman hesaplarını ve verilerini kalıcı olarak silme talebinde bulunabilirler. Ayrıntılar için <a href="/delete-account" className="text-[#0F3D2E] font-semibold underline">Hesap Silme</a> sayfamıza bakınız.
          </p>
        </section>

        {/* 7. İletişim */}
        <section className="space-y-3 border-t border-[#E1E4DE] pt-6">
          <h2 className="text-xl font-bold text-[#101412] flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#0F3D2E]" />
            7. İletişim
          </h2>
          <p>
            Kullanım koşulları hakkındaki sorularınız ve bildirimleriniz için resmi destek kanalımız:
          </p>
          <p className="font-semibold text-[#101412]">
            E-posta: <a href="mailto:support@skavvia.com" className="text-[#0F3D2E] underline">support@skavvia.com</a>
          </p>
        </section>

      </div>
    </div>
  );
};
