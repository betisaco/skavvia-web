import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../router';
import { Menu, X, Smartphone, Download } from 'lucide-react';
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

  // Close mobile menu on Escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isLinkActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const downloadButtonText = downloadReady ? 'Android için İndir' : 'Android Sürümü';
  const DownloadIcon = downloadReady ? Download : Smartphone;

  return (
    <header className="sticky top-0 z-50 bg-[#F5F5F0]/90 backdrop-blur-md border-b border-[#E1E4DE] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Wordmark */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949] rounded-lg p-1"
            aria-label="SKAVVIA Ana Sayfa"
          >
            <img
              src="/skavvia-app-icon.png"
              alt="SKAVVIA Logo İkonu"
              className="w-10 h-10 rounded-xl shadow-sm object-cover"
              width={40}
              height={40}
            />
            <img
              src="/brand/skavvia-wordmark-forest.png"
              alt="SKAVVIA"
              className="h-7 w-auto object-contain"
              style={{ aspectRatio: '295/70' }}
              width={118}
              height={28}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Masaüstü Menü">
            <Link
              to="/#ozellikler"
              className="text-sm font-medium text-[#646B78] hover:text-[#0F3D2E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949] rounded px-2 py-1"
            >
              Özellikler
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949] rounded px-2 py-1 ${
                isLinkActive('/about') ? 'text-[#0F3D2E] font-semibold' : 'text-[#646B78] hover:text-[#0F3D2E]'
              }`}
            >
              Hakkında
            </Link>
            <Link
              to="/support"
              className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949] rounded px-2 py-1 ${
                isLinkActive('/support') ? 'text-[#0F3D2E] font-semibold' : 'text-[#646B78] hover:text-[#0F3D2E]'
              }`}
            >
              Destek
            </Link>
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949] focus-visible:ring-offset-2"
            >
              <DownloadIcon className="w-4 h-4 text-[#E9B949]" aria-hidden="true" />
              <span>{downloadButtonText}</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-[#101412] hover:bg-[#E8EDE9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949]"
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
        <div id="mobile-menu" className="md:hidden border-t border-[#E1E4DE] bg-[#F5F5F0] px-4 pt-3 pb-6 space-y-3">
          <Link
            to="/#ozellikler"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#101412] hover:bg-[#E8EDE9]"
          >
            Özellikler
          </Link>
          <Link
            to="/about"
            onClick={closeMobileMenu}
            className={`block px-3 py-2 rounded-lg text-base font-medium ${
              isLinkActive('/about') ? 'bg-[#E2EEE7] text-[#0F3D2E] font-semibold' : 'text-[#101412] hover:bg-[#E8EDE9]'
            }`}
          >
            Hakkında
          </Link>
          <Link
            to="/support"
            onClick={closeMobileMenu}
            className={`block px-3 py-2 rounded-lg text-base font-medium ${
              isLinkActive('/support') ? 'bg-[#E2EEE7] text-[#0F3D2E] font-semibold' : 'text-[#101412] hover:bg-[#E8EDE9]'
            }`}
          >
            Destek
          </Link>
          <Link
            to="/download"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 w-full bg-[#0F3D2E] text-[#F5F5F0] px-4 py-3 rounded-xl font-medium text-base shadow-sm"
          >
            <DownloadIcon className="w-5 h-5 text-[#E9B949]" aria-hidden="true" />
            <span>{downloadButtonText}</span>
          </Link>
        </div>
      )}
    </header>
  );
};
