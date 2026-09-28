import React, { useState } from 'react';
import { Compass, Map, Navigation, User } from 'lucide-react';

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
    caption: string;
    image: string;
    alt: string;
    icon: React.FC<{ className?: string }>;
  }
> = {
  discover: {
    title: 'Keşfet',
    caption: 'Topluluk Keşifleri & Anlar',
    image: '/app-screens/screen-discover.png',
    alt: 'SKAVVIA Keşfet Akışı Ekran Görüntüsü',
    icon: Compass,
  },
  map: {
    title: 'Harita',
    caption: 'İnteraktif Gezgin Haritası',
    image: '/app-screens/screen-map.png',
    alt: 'SKAVVIA Harita ve Mekan Kartı Ekran Görüntüsü',
    icon: Map,
  },
  route: {
    title: 'Rotalar',
    caption: 'Adım Adım Durak Planı',
    image: '/app-screens/screen-route.png',
    alt: 'SKAVVIA Rota Detayları Ekran Görüntüsü',
    icon: Navigation,
  },
  profile: {
    title: 'Profil',
    caption: 'Rozetler & Gezgin Hafızası',
    image: '/app-screens/screen-profile.png',
    alt: 'SKAVVIA Kullanıcı Profili Ekran Görüntüsü',
    icon: User,
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
      {/* Interactive Switcher Tabs (If interactive is true) */}
      {interactive && (
        <div className="mb-4 inline-flex items-center gap-1 p-1 bg-[#FFFFFF] border border-[#E1E4DE] rounded-full shadow-xs">
          {(Object.keys(SCREENS) as ScreenType[]).map((key) => {
            const item = SCREENS[key];
            const Icon = item.icon;
            const isActive = activeScreen === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveScreen(key)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B949] ${
                  isActive
                    ? 'bg-[#0F3D2E] text-[#F5F5F0] shadow-xs'
                    : 'text-[#646B78] hover:text-[#0F3D2E] hover:bg-[#F5F5F0]'
                }`}
                aria-pressed={isActive}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E9B949]' : 'text-[#6B7280]'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Premium Phone Container */}
      <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[310px] md:max-w-[330px] rounded-[46px] p-2.5 sm:p-3 bg-[#0A2B20] shadow-2xl ring-1 ring-white/20 select-none transition-transform duration-300 hover:scale-[1.01]">
        {/* Subtle Side Buttons on Device Frame */}
        <div className="absolute -left-[4px] top-28 w-[3px] h-8 bg-[#13231D] rounded-l-sm" />
        <div className="absolute -left-[4px] top-40 w-[3px] h-12 bg-[#13231D] rounded-l-sm" />
        <div className="absolute -right-[4px] top-32 w-[3px] h-14 bg-[#13231D] rounded-r-sm" />

        {/* Screen Display Bezel */}
        <div className="relative w-full overflow-hidden rounded-[38px] bg-[#08130F] border border-[#26382F] shadow-inner">
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

      {/* Screen Caption */}
      <div className="mt-3 text-center">
        <p className="text-xs font-medium text-[#101412] flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E9B949]" />
          <span>{current.caption}</span>
        </p>
      </div>
    </div>
  );
};
