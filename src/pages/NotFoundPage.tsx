import React, { useEffect } from 'react';
import { Link } from '../router';
import { Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sayfa Bulunamadı — SKAVVIA';
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-[#E2EEE7] text-[#0F3D2E] flex items-center justify-center mx-auto">
        <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      <h1 className="text-4xl font-display font-semibold text-[#101412]">Sayfa Bulunamadı</h1>
      <p className="text-[#646B78] text-base leading-relaxed">
        Aradığınız rota veya sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0F3D2E] text-[#F5F5F0] hover:bg-[#0A2B20] text-sm font-semibold px-6 py-3 rounded-full transition-colors"
        >
          <Home className="w-4 h-4 text-[#E9B949]" />
          <span>Ana Sayfaya Dön</span>
        </Link>
      </div>
    </div>
  );
};
