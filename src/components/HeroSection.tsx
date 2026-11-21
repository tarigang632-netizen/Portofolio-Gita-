import { PORTFOLIO_DATA } from '../data/portfolio';
import { SparkleStar } from './SparkleStar';

export function HeroSection() {
  const { owner, images } = PORTFOLIO_DATA;

  return (
    <header className="relative bg-surface overflow-hidden min-h-[92svh] flex flex-col justify-between">
      {/* Top Utility Bar */}
      <div className="w-full max-w-[1280px] mx-auto px-[5vw] pt-7 pb-4 flex items-center justify-between gap-4 relative z-10">
        <span className="font-label kicker-editorial text-on-surface">
          {owner.topKicker}
        </span>
        <div className="flex items-center gap-2">
          <SparkleStar size={14} />
          <span className="font-label kicker-editorial text-on-surface tabular-nums">
            {owner.year}
          </span>
        </div>
      </div>

      {/* Giant Display Heading */}
      <div className="w-full text-center mt-1 relative z-[1] pointer-events-none select-none px-2 overflow-hidden">
        <h1 className="serif-editorial hero-masthead text-on-surface uppercase tracking-tight">
          PORTFOLIO
        </h1>
      </div>

      {/* 3-Column Main Hero Grid */}
      <div className="w-full max-w-[1280px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-[0.9fr_1.5fr_auto] items-end gap-6 lg:gap-8 flex-1">
        {/* Left Column: Role, Bio & Signature */}
        <div className="pb-10 lg:pb-16 z-[3] order-2 md:order-1">
          <p className="font-label kicker-editorial text-primary">
            {owner.roleKicker}
          </p>
          <h2 className="serif-editorial text-display-lg-mobile lg:text-display-lg text-on-surface mt-2.5 mb-4">
            {owner.headlineLine1}
            <br />
            {owner.headlineLine2}
          </h2>
          <div className="w-9 h-[1.5px] bg-gold mb-4" aria-hidden="true" />
          <p className="font-body text-body-sm text-ink-muted max-w-[34ch] text-pretty">
            {owner.bio}
          </p>
          <div className="mt-8">
            <p className="serif-editorial text-headline-lg-mobile lg:text-headline-lg text-primary">
              {owner.signatureLine1}
              <br />
              {owner.signatureLine2}
            </p>
          </div>
        </div>

        {/* Center/Right Column: Larger Editorial Portrait beside text */}
        <div className="z-[2] self-end flex justify-center md:justify-start order-1 md:order-2 md:-mt-[6vh] lg:-mt-[10vh]">
          <div className="relative w-full max-w-[640px] flex justify-center md:justify-start">
            <img
              src={images.heroPortrait}
              alt={`Portrait of ${owner.fullName}`}
              className="w-full max-w-[640px] h-auto max-h-[82vh] object-contain object-bottom block"
            />
          </div>
        </div>

        {/* Right Column: Rotating Circular Stamp Badge */}
        <div className="pb-10 lg:pb-20 flex justify-start md:justify-end z-[3] order-3">
          <div
            className="w-[96px] h-[96px] lg:w-[116px] lg:h-[116px] relative flex items-center justify-center"
            aria-label="Informatics Engineering IT PLN Jakarta emblem"
          >
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full stamp-spin overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="stampCirclePath"
                  d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                />
              </defs>
              <text
                className="fill-on-surface font-label uppercase"
                style={{
                  fontSize: '7.5px',
                  letterSpacing: '0.2em',
                  fontWeight: 600,
                }}
              >
                <textPath href="#stampCirclePath" startOffset="0%">
                  {owner.stampText}
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center gap-1.5 pointer-events-none">
              <SparkleStar size={8} />
              <span className="serif-editorial text-headline-md text-primary leading-none">
                {owner.stampCenterLetter}
              </span>
              <SparkleStar size={8} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
