import React, { useEffect } from 'react';
import { Mail, AlertCircle, HelpCircle, MessageSquare, ExternalLink } from 'lucide-react';

export const SupportPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Destek & İletişim — SKAVVIA';
  }, []);

  const faqs = [
    {
      q: 'SKAVVIA mobil uygulamasına nasıl kayıt olabilirim?',
      a: 'Uygulamayı Android cihazınıza yükledikten sonra e-posta adresiniz ve şifrenizle ya da tek dokunuşla Google hesabınızı kullanarak hızlıca kayıt olabilirsiniz.',
    },
    {
      q: 'Uygulama neden konum izni istiyor?',
      a: 'SKAVVIA, çevrenizdeki keşif noktalarını ve rotaları interaktif harita üzerinde size gösterebilmek için konum verisine ihtiyaç duyar. Konum bilginiz yalnızca uygulama kullanılırken keşif deneyiminizi sağlamak amacıyla işlenir.',
    },
    {
      q: 'APK kurulumu sırasında "Bilinmeyen Uygulama" uyarısı alıyorum, ne yapmalıyım?',
      a: 'Google Play Store dışından doğrudan indirilen APK dosyalarında Android işletim sistemi güvenlik gereği onay ister. Tarayıcınız için "Bu kaynaktan yüklemeye izin ver" seçeneğini aktif ederek güvenle yükleyebilirsiniz.',
    },
    {
      q: 'Oluşturduğum rotaları kimler görebilir?',
      a: 'Rotalarınızı herkese açık (tüm SKAVVIA topluluğu) veya yalnızca sizi takip eden kişilere özel olarak yayınlayabilirsiniz. Ayrıca taslak rotalarınız yalnızca sizin tarafınızdan görüntülenir.',
    },
    {
      q: 'Hesabımı veya verilerimi nasıl silebilirim?',
      a: 'Hesap silme talebinizi support@skavvia.com adresine kayıtlı e-postanızdan iletebilirsiniz. Ayrıntılı adımlar için "Hesap Silme" sayfamızı inceleyebilirsiniz.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Title */}
      <div className="text-center md:text-left space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EEE7] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          Yardım Merkezi
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101412] tracking-tight">
          Destek ve İletişim
        </h1>
        <p className="text-lg text-[#646B78] leading-relaxed">
          SKAVVIA ekibi olarak sorularınızı yanıtlamaktan ve geri bildirimlerinizi dinlemekten mutluluk duyarız.
        </p>
      </div>

      {/* Support Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Support Card */}
        <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E1E4DE] shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#E2EEE7] flex items-center justify-center text-[#0F3D2E]">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#101412]">Genel Destek Talebi</h2>
            <p className="text-sm text-[#646B78] leading-relaxed">
              Hesabınız, kullanım adımları veya platform özellikleri hakkındaki her türlü sorunuz için destek ekibimize yazabilirsiniz.
            </p>
            <p className="text-xs font-mono text-[#0F3D2E] bg-[#E2EEE7]/50 p-2 rounded-lg inline-block">
              support@skavvia.com
            </p>
          </div>

          <a
            href="mailto:support@skavvia.com?subject=SKAVVIA%20Destek%20Talebi"
            className="inline-flex items-center justify-center gap-2 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-sm font-semibold px-6 py-3.5 rounded-full shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#E9B949]" />
            <span>Destek Ekibine Yaz</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Bug / Issue Report Card */}
        <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E1E4DE] shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#F8E9C0] flex items-center justify-center text-[#B88B27]">
              <AlertCircle className="w-6 h-6 text-[#0F3D2E]" />
            </div>
            <h2 className="text-xl font-bold text-[#101412]">Sorun Bildirimi</h2>
            <p className="text-sm text-[#646B78] leading-relaxed">
              Uygulama içinde karşılaştığınız bir hata, donma veya beklenmeyen bir davranış varsa detayları bize iletin.
            </p>
            <p className="text-xs font-mono text-[#0F3D2E] bg-[#E2EEE7]/50 p-2 rounded-lg inline-block">
              support@skavvia.com
            </p>
          </div>

          <a
            href="mailto:support@skavvia.com?subject=SKAVVIA%20Sorun%20Bildirimi"
            className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#0F3D2E] hover:bg-[#E8EDE9] border border-[#0F3D2E] text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            <AlertCircle className="w-4 h-4 text-[#0F3D2E]" />
            <span>Sorun Bildir</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>

      {/* Response Time Notice */}
      <div className="bg-[#E2EEE7]/60 border border-[#BFD9CC] rounded-2xl p-6 text-sm text-[#0F3D2E] space-y-1">
        <p className="font-semibold">Yanıt Süresi Bilgilendirmesi</p>
        <p className="text-xs text-[#2A684E]">
          E-posta bildirimleriniz ekibimiz tarafından titizlikle incelenmekte olup genellikle 24-48 saat içerisinde geri dönüş sağlanmaktadır.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[#101412]">Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E1E4DE] shadow-xs space-y-2">
              <h3 className="font-bold text-[#101412] text-base">{faq.q}</h3>
              <p className="text-sm text-[#646B78] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
