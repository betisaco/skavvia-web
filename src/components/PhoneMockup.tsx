import React, { useState } from 'react';

export type ScreenType = 'discover' | 'map' | 'route' | 'profile';

interface PhoneMockupProps {
  initialScreen?: ScreenType;
  interactive?: boolean;
  className?: string;
}

const SCREENS: Record<
  ScreenType,
  {
    title: string;
    image: string;
    alt: string;
  }
> = {
  discover: {
    title: 'Keşfet',
    image: '/app-screens/screen-discover.png',
    alt: 'SKAVVIA Keşfet Akışı Ekran Görüntüsü',
  },
  map: {
    title: 'Harita',
    image: '/app-screens/screen-map.png',
    alt: 'SKAVVIA Harita ve Mekan Kartı Ekran Görüntüsü',
  },
  route: {
    title: 'Rotalar',
    image: '/app-screens/screen-route.png',
    alt: 'SKAVVIA Rota Detayları Ekran Görüntüsü',
  },
  profile: {
    title: 'Profil',
    image: '/app-screens/screen-profile.png',
    alt: 'SKAVVIA Kullanıcı Profili Ekran Görüntüsü',
  },
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  initialScreen = 'discover',
  interactive = true,
  className = '',
}) => {
  const [activeScreen, setActiveScreen] = useState<ScreenType>(initialScreen);

  const current = SCREENS[activeScreen];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Premium Phone Container */}
      <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[295px] md:max-w-[245px] lg:max-w-[255px] xl:max-w-[260px] rounded-[44px] p-2.5 sm:p-3 bg-[#0A2B20] shadow-2xl ring-1 ring-white/20 select-none transition-transform duration-300 hover:scale-[1.01]">
        {/* Subtle Side Buttons on Device Frame */}
        <div className="absolute -left-[4px] top-24 w-[3px] h-8 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
        <div className="absolute -left-[4px] top-36 w-[3px] h-12 bg-[#13231D] rounded-l-sm" aria-hidden="true" />
        <div className="absolute -right-[4px] top-28 w-[3px] h-14 bg-[#13231D] rounded-r-sm" aria-hidden="true" />

        {/* Screen Display Bezel */}
        <div className="relative w-full overflow-hidden rounded-[36px] bg-[#08130F] border border-[#26382F] shadow-inner">
          <img
            src={current.image}
            alt={current.alt}
            width={460}
            height={1024}
            className="w-full h-auto object-contain block transition-opacity duration-200"
            loading="eager"
          />
        </div>
      </div>

      {/* Interactive Switcher Tabs Positioned Beneath the Phone (Matching Approved Figma) */}
      {interactive && (
        <div
          className="mt-4 sm:mt-4.5 inline-flex items-center gap-1 p-1 bg-white/95 backdrop-blur-sm border border-[#E1E4DE] rounded-full shadow-sm"
          role="tablist"
          aria-label="Uygulama Ekranı Seçici"
        >
          {(Object.keys(SCREENS) as ScreenType[]).map((key) => {
            const item = SCREENS[key];
            const isActive = activeScreen === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveScreen(key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? 'bg-[#0F3D2E] text-[#F5F5F0] font-semibold shadow-xs'
                    : 'text-[#6B7280] hover:text-[#0F3D2E] hover:bg-forest-50/60'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
