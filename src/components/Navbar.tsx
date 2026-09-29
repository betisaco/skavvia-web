import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../router';
import { Menu, Smartphone, X } from 'lucide-react';
import { DOWNLOAD_CONFIG, isDownloadReady } from '../config/download';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath } = useRouter();
  const downloadReady = isDownloadReady(DOWNLOAD_CONFIG);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent background scrolling when mobile menu is open (without layout shift)
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const isLinkActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="relative z-50 bg-[#F5F5F0]/95 backdrop-blur-md border-b border-[#E1E4DE]/80 transition-all">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-[120px]">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* LEFT: Brand Logo & Wordmark (Acts as Home link, aligned to 120px desktop grid) */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg py-1 pr-1"
            aria-label="SKAVVIA Ana Sayfa"
          >
            <img
              src="/skavvia-app-icon.png"
              alt="SKAVVIA Logo İkonu"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-xs object-cover"
              width={36}
              height={36}
            />
            <img
              src="/brand/skavvia-wordmark-forest.png"
              alt="SKAVVIA"
              className="h-6 sm:h-6.5 w-auto object-contain"
              style={{ aspectRatio: '295/70' }}
              width={110}
              height={26}
            />
          </Link>

          {/* RIGHT: Desktop Navigation (Figma Spec: Özellikler, Hakkımızda, Destek, Android Sürümü ↗) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 xl:gap-9" aria-label="Masaüstü Menü">
            <Link
              to="/#ozellikler"
              className="text-sm font-medium text-[#4A5568] hover:text-[#0F3D2E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold py-1"
            >
              Özellikler
            </Link>

            <Link
              to="/about"
              className={`relative text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold py-1 ${
                isLinkActive('/about')
                  ? 'text-[#0F3D2E] font-semibold after:absolute after:-bottom-2 after:inset-x-0 after:h-[2px] after:rounded-full after:bg-[#E9B949]'
                  : 'text-[#4A5568] hover:text-[#0F3D2E]'
              }`}
            >
              Hakkımızda
            </Link>

            <Link
              to="/support"
              className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold py-1 ${
                isLinkActive('/support')
                  ? 'text-[#0F3D2E] font-semibold'
                  : 'text-[#4A5568] hover:text-[#0F3D2E]'
              }`}
            >
              Destek
            </Link>

            {/* Android CTA: Guarded by DOWNLOAD_CONFIG */}
            <Link
              to="/download"
              className="inline-flex items-center gap-1.5 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-sm font-medium px-5 py-2.5 rounded-full shadow-xs hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ml-1"
              aria-label={downloadReady ? 'Android için İndir' : 'Android Sürümü Durumu'}
            >
              <span>Android Sürümü</span>
              <Smartphone className="w-4 h-4 text-[#E9B949]" aria-hidden="true" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-brand-obsidian hover:bg-forest-100/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-brand-lightBorder bg-brand-offwhite px-5 pt-3 pb-6 space-y-2 shadow-lg"
        >
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
              isLinkActive('/')
                ? 'bg-forest-100 text-forest font-semibold'
                : 'text-brand-obsidian hover:bg-forest-50'
            }`}
          >
            Ana Sayfa
          </Link>
          <Link
            to="/#ozellikler"
            onClick={closeMobileMenu}
            className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-brand-obsidian hover:bg-forest-50 transition-colors"
          >
            Özellikler
          </Link>
          <Link
            to="/about"
            onClick={closeMobileMenu}
            className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
              isLinkActive('/about')
                ? 'bg-forest-100 text-forest font-semibold'
                : 'text-brand-obsidian hover:bg-forest-50'
            }`}
          >
            Hakkımızda
          </Link>
          <Link
            to="/support"
            onClick={closeMobileMenu}
            className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
              isLinkActive('/support')
                ? 'bg-forest-100 text-forest font-semibold'
                : 'text-brand-obsidian hover:bg-forest-50'
            }`}
          >
            Destek
          </Link>
          <div className="pt-2">
            <Link
              to="/download"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full bg-forest text-brand-offwhite px-4 py-3 rounded-xl font-semibold text-base shadow-xs"
            >
              <span>Android Sürümü</span>
              <Smartphone className="w-4 h-4 text-gold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
