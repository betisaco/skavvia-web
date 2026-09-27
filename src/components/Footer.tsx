import React from 'react';
import { Link } from '../router';
import { Mail, Shield, Smartphone, Globe, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08130F] text-[#F5F5F0] border-t border-[#26382F]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Altbilgi</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949] rounded-lg">
              <img
                src="/skavvia-app-icon.png"
                alt="SKAVVIA Logo"
                className="w-10 h-10 rounded-xl"
                width={40}
                height={40}
              />
              <img
                src="/brand/skavvia-wordmark-offwhite.png"
                alt="SKAVVIA"
                className="h-7 w-auto object-contain"
                style={{ aspectRatio: '295/70' }}
                width={118}
                height={28}
              />
            </Link>
            <p className="text-[#E9B949] font-medium tracking-wide text-sm flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Keşfet. Paylaş. İz Bırak.
            </p>
            <p className="text-[#B6C0BA] text-sm leading-relaxed max-w-md">
              Türkiye'nin saklı rotalarını, eşsiz keşif noktalarını ve gerçek yol deneyimlerini
              toplulukla buluşturan yeni nesil sosyal keşif platformu.
            </p>
            <div className="pt-2 text-xs text-[#8D9892] space-y-1">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#E9B949]" />
                <span>Resmi Domain: <strong className="text-[#F5F5F0] font-normal">skavvia.com</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E9B949]" />
                <span>Resmi Destek: <a href="mailto:support@skavvia.com" className="text-[#E9B949] hover:underline">support@skavvia.com</a></span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F0] mb-4">
              Platform
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/#ozellikler" className="text-[#B6C0BA] hover:text-[#F5F5F0] transition-colors">
                  Özellikler
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#B6C0BA] hover:text-[#F5F5F0] transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-[#B6C0BA] hover:text-[#F5F5F0] transition-colors flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#E9B949]" />
                  <span>Android İndir</span>
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-[#B6C0BA] hover:text-[#F5F5F0] transition-colors">
                  Destek & İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F0] mb-4">
              Yasal & Güvenlik
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="text-[#B6C0BA] hover:text-[#F5F5F0] transition-colors flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#E9B949]" />
                  <span>Gizlilik Politikası</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#B6C0BA] hover:text-[#F5F5F0] transition-colors">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="text-[#B6C0BA] hover:text-[#F5F5F0] transition-colors">
                  Hesap Silme Talebi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#26382F] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8D9892] gap-4">
          <p>© {currentYear} SKAVVIA. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-2">
            <span>Türkiye merkezli bağımsız sosyal keşif girişimi.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
