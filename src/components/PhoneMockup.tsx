import React from 'react';
import { Compass, MapPin, Heart, Bookmark, MessageCircle, Map, User, PlusCircle, Award } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] aspect-[9/19] rounded-[48px] p-3 bg-[#0A2B20] shadow-2xl ring-1 ring-white/20 select-none">
      {/* Phone Outer Edge & Bezel */}
      <div className="relative w-full h-full bg-[#08130F] rounded-[40px] overflow-hidden border border-[#26382F] flex flex-col justify-between text-[#F5F5F0]">
        
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#08130F] mr-3" />
          <div className="w-2 h-2 rounded-full bg-[#13231D]" />
        </div>

        {/* Status Bar */}
        <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-medium text-[#B6C0BA] z-20">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px]">5G</span>
            <div className="w-5 h-2.5 border border-[#B6C0BA] rounded-sm p-0.5 flex items-center">
              <div className="w-full h-full bg-[#B6C0BA] rounded-xs" />
            </div>
          </div>
        </div>

        {/* App Top Bar */}
        <div className="px-4 py-2 border-b border-[#13231D] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/skavvia-app-icon.png"
              alt="SKAVVIA Icon"
              className="w-6 h-6 rounded-md"
            />
            <img
              src="/brand/skavvia-wordmark-offwhite.png"
              alt="SKAVVIA"
              className="h-4 w-auto object-contain"
              style={{ aspectRatio: '295/70' }}
            />
          </div>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#E9B949] bg-[#E9B949]/10 px-2 py-0.5 rounded-full border border-[#E9B949]/30">
            Mobil Uygulama
          </span>
        </div>

        {/* Screen Content Scrollable Area */}
        <div className="flex-1 px-3 py-3 overflow-y-auto space-y-3 scrollbar-none">
          {/* Categories Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-hidden text-[11px]">
            <span className="px-2.5 py-1 bg-[#0F3D2E] text-[#F5F5F0] rounded-full font-medium border border-[#26382F]">
              Keşfet
            </span>
            <span className="px-2.5 py-1 bg-[#0E1B17] text-[#B6C0BA] rounded-full border border-[#26382F]">
              Rotalar
            </span>
            <span className="px-2.5 py-1 bg-[#0E1B17] text-[#B6C0BA] rounded-full border border-[#26382F]">
              Doğa
            </span>
            <span className="px-2.5 py-1 bg-[#0E1B17] text-[#B6C0BA] rounded-full border border-[#26382F]">
              Kültür
            </span>
          </div>

          {/* Discovery Card Sample */}
          <div className="bg-[#0E1B17] border border-[#26382F] rounded-2xl overflow-hidden shadow-sm">
            {/* Card Author */}
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#13231D] border border-[#26382F] flex items-center justify-center text-[#E9B949] font-semibold text-xs">
                  S
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-[#F5F5F0]">@gezgin_rota</span>
                    <Award className="w-3 h-3 text-[#E9B949]" />
                  </div>
                  <span className="text-[10px] text-[#8D9892]">Kaçkar Dağları / Rize</span>
                </div>
              </div>
              <span className="text-[10px] text-[#E9B949] bg-[#E9B949]/10 px-2 py-0.5 rounded font-medium">
                4 Durak
              </span>
            </div>

            {/* Media Area (Official Placeholder) */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-[#13231D] to-[#0A2B20] flex flex-col items-center justify-center p-4 text-center border-y border-[#26382F]">
              <div className="w-12 h-12 rounded-full bg-[#0F3D2E]/60 flex items-center justify-center mb-2 text-[#E9B949] ring-1 ring-[#E9B949]/30">
                <Compass className="w-6 h-6 animate-pulse" />
              </div>
              <p className="text-xs font-medium text-[#F5F5F0]">Göller Vadisi Keşif Parkuru</p>
              <p className="text-[10px] text-[#8D9892] mt-1 max-w-[200px]">
                [ Resmi Uygulama Arayüzü Önizleme Alanı ]
              </p>
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[#B6C0BA]">
                <MapPin className="w-2.5 h-2.5 text-[#E9B949]" />
                <span>Yürüyüş • 8.4 km</span>
              </div>
            </div>

            {/* Card Actions */}
            <div className="p-3">
              <div className="flex items-center justify-between text-[#B6C0BA]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-xs">
                    <Heart className="w-4 h-4 text-[#E0245E] fill-[#E0245E]" />
                    <span className="text-[11px]">142</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-[11px]">18</span>
                  </div>
                </div>
                <Bookmark className="w-4 h-4 text-[#E9B949] fill-[#E9B949]" />
              </div>
              <p className="text-[11px] text-[#B6C0BA] mt-2 line-clamp-2">
                Yayladan başlayarak buzul göllerine uzanan nefes kesici bir rota. Sabah erken saatte yola çıkılması önerilir.
              </p>
            </div>
          </div>
        </div>

        {/* In-App Bottom Navigation Bar */}
        <div className="border-t border-[#13231D] bg-[#0A2B20]/80 backdrop-blur-md px-4 py-2 flex items-center justify-between text-[9px] text-[#8D9892]">
          <div className="flex flex-col items-center text-[#E9B949]">
            <Compass className="w-4 h-4 mb-0.5" />
            <span className="font-medium">Keşfet</span>
          </div>
          <div className="flex flex-col items-center">
            <Map className="w-4 h-4 mb-0.5" />
            <span>Harita</span>
          </div>
          <div className="flex flex-col items-center text-[#F5F5F0]">
            <PlusCircle className="w-5 h-5 mb-0.5 text-[#E9B949]" />
            <span className="text-[8px]">Oluştur</span>
          </div>
          <div className="flex flex-col items-center">
            <Bookmark className="w-4 h-4 mb-0.5" />
            <span>Kaydet</span>
          </div>
          <div className="flex flex-col items-center">
            <User className="w-4 h-4 mb-0.5" />
            <span>Profil</span>
          </div>
        </div>

        {/* Home Indicator Bar */}
        <div className="pb-1.5 pt-0.5 flex justify-center">
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};
