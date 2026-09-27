import React, { useEffect, useState } from 'react';
import { Trash2, AlertCircle, Mail, CheckCircle2, ShieldAlert, Copy, ExternalLink } from 'lucide-react';

export const DeleteAccountPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = 'Hesap Silme Talebi — SKAVVIA';
  }, []);

  const emailSubject = 'SKAVVIA Hesap Silme Talebi';
  const emailBody = `Merhaba SKAVVIA Destek Ekibi,

Aşağıda bilgileri yer alan SKAVVIA hesabımın ve hesabıma bağlı tüm kişisel verilerimin (profil, paylaşılan keşifler, rotalar, duraklar, fotoğraflar ve mesajlar) kalıcı olarak silinmesini talep ediyorum.

Kayıtlı E-posta Adresim: [Buraya hesabınıza kayıtlı e-posta adresinizi yazın]
Kullanıcı Adım (@handle): [Buraya @kullaniciadiniz yazın]

Hesap silme işleminin geri alınamaz olduğunu biliyor ve onaylıyorum.`;

  const mailtoUrl = `mailto:support@skavvia.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(emailBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      {/* Title */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EEE7] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider">
          <Trash2 className="w-3.5 h-3.5 text-[#E0245E]" />
          Google Play Uyumlu Hesap Yönetimi
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101412] tracking-tight">
          Hesap ve Veri Silme Talebi
        </h1>
        <p className="text-base text-[#646B78] leading-relaxed">
          SKAVVIA olarak verilerinizin kontrolünün sizde olmasını önemsiyoruz. Hesabınızı ve ilişkili tüm verilerinizi kalıcı olarak silmek istediğinizde izlemeniz gereken resmi adımları aşağıda bulabilirsiniz.
        </p>
      </div>

      <div className="bg-[#FFFFFF] rounded-2xl p-8 sm:p-10 border border-[#E1E4DE] shadow-sm space-y-10">
        
        {/* Warning Notice */}
        <div className="p-6 bg-[#F5F5F0] rounded-2xl border border-[#E1E4DE] flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#E0245E] shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-[#101412]">
            <p className="font-bold">Önemli Hatırlatma:</p>
            <p className="text-[#646B78]">
              Hesap silme işlemi kalıcıdır ve geri alınamaz. Hesabınız silindiğinde profiliniz, oluşturduğunuz rotalar, keşif gönderileriniz, kazandığınız rozetler ve mesajlarınız veritabanımızdan geri döndürülemez biçimde temizlenir.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#101412]">
            Hesabınızı Nasıl Silebilirsiniz?
          </h2>

          <div className="space-y-4 text-sm text-[#646B78]">
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#0F3D2E] text-[#F5F5F0] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="text-[#101412] block">Kayıtlı E-posta Adresinizden Talep Gönderin</strong>
                Hesap güvenliği ve kimlik doğrulaması amacıyla, silme talebini mutlaka SKAVVIA hesabınıza kayıtlı e-posta adresinizden iletmeniz gerekmektedir.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#0F3D2E] text-[#F5F5F0] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="text-[#101412] block">Destek Adresimize E-posta Atın</strong>
                Alıcı adresi olarak <code className="bg-[#E2EEE7] px-2 py-0.5 rounded text-[#0F3D2E] font-semibold">support@skavvia.com</code> yazınız ve konu başlığına <code className="bg-[#E2EEE7] px-2 py-0.5 rounded text-[#0F3D2E] font-semibold">{emailSubject}</code> ekleyiniz.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#0F3D2E] text-[#F5F5F0] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="text-[#101412] block">İşlem Onayı ve Silme Tamamlanması</strong>
                Talebiniz bize ulaştığında güvenlik teyidi sağlanır ve yasal saklama yükümlülükleri saklı kalmak kaydıyla en geç 30 gün içerisinde tüm verileriniz tamamen silinir.
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={mailtoUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-sm font-semibold px-8 py-3.5 rounded-full shadow-xs transition-colors"
            >
              <Mail className="w-4 h-4 text-[#E9B949]" />
              <span>Hesap Silme E-postası Gönder</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <button
              type="button"
              onClick={handleCopyTemplate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#0F3D2E] hover:bg-[#E8EDE9] border border-[#0F3D2E] text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Şablon Kopyalandı!' : 'E-posta Metnini Kopyala'}</span>
            </button>
          </div>
        </section>

        {/* What gets deleted */}
        <section className="space-y-4 border-t border-[#E1E4DE] pt-8">
          <h2 className="text-xl font-bold text-[#101412] flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-[#0F3D2E]" />
            Silinen ve Saklanan Veriler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-5 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-2">
              <p className="font-bold text-[#101412] flex items-center gap-1.5">
                <Trash2 className="w-4 h-4 text-[#E0245E]" />
                Kalıcı Olarak Silinecekler
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#646B78]">
                <li>Profil ve kimlik bilgileri (isim, handle, avatar)</li>
                <li>E-posta ve kimlik doğrulama kayıtları</li>
                <li>Paylaştığınız tüm keşif gönderileri ve fotoğraflar</li>
                <li>Oluşturduğunuz rotalar ve duraklar</li>
                <li>Uygulama içi özel mesajlarınız</li>
                <li>Beğeniler, yorumlar ve kayıtlı içerikler</li>
                <li>Cihaz anlık bildirim belirteçleri (push tokens)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#F5F5F0] border border-[#E1E4DE] space-y-2">
              <p className="font-bold text-[#101412] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                Saklanabilecek Sınırlı Veriler
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#646B78]">
                <li>Kanunen saklanması zorunlu olan sistem erişim logları</li>
                <li>Dolandırıcılık veya kötüye kullanımı engellemeye yönelik güvenlik kayıtları (yasal süre sonuna kadar)</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
