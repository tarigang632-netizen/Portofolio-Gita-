import { useState } from 'react';
import { Code2, Terminal, Users, Clock } from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolio';
import { SparkleStar } from './SparkleStar';

function SkillIcon({ id }: { id: SkillItem['id'] }) {
  const iconClass = 'w-[22px] h-[22px] text-primary shrink-0 mt-0.5';
  switch (id) {
    case 'cpp':
      return <Code2 strokeWidth={1.35} className={iconClass} aria-hidden="true" />;
    case 'python':
      return <Terminal strokeWidth={1.35} className={iconClass} aria-hidden="true" />;
    case 'leadership':
      return <Users strokeWidth={1.35} className={iconClass} aria-hidden="true" />;
    case 'detail':
      return <Clock strokeWidth={1.35} className={iconClass} aria-hidden="true" />;
  }
}

export function AboutSection() {
  const { owner, skills, softSkillTags, education, quote, images } =
    PORTFOLIO_DATA;
  const [quoteImgSrc, setQuoteImgSrc] = useState(images.quotePortraitUrl);

  return (
    <section id="about" className="bg-surface text-on-surface py-20 lg:py-28 px-[5vw]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_auto_1.05fr_1.15fr] gap-10 lg:gap-9 items-start">
        {/* Column 1: Skills & Strengths */}
        <div className="reveal">
          <h2 className="font-label kicker-editorial text-primary mb-8">
            SKILLS &amp; STRENGTHS
          </h2>

          <ul className="flex flex-col gap-6">
            {skills.map((skill) => (
              <li key={skill.id} className="flex items-start gap-4">
                <SkillIcon id={skill.id} />
                <div>
                  <h3 className="font-label text-label-md uppercase tracking-wider text-on-surface mb-1">
                    {skill.title}
                  </h3>
                  <p className="font-body text-body-sm text-ink-muted text-pretty">
                    {skill.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Outlined Soft-Skill Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {softSkillTags.map((tag) => (
              <span
                key={tag}
                className="border border-border-dark px-3 py-1.5 font-label text-label-sm uppercase text-on-surface rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Vertical Divider with 3 Gold Sparkle Stars */}
        <div
          className="hidden lg:flex flex-col items-center justify-between self-stretch py-4"
          aria-hidden="true"
        >
          <div className="w-px flex-1 bg-border-dark" />
          <SparkleStar size={12} className="my-3" />
          <div className="w-px flex-1 bg-border-dark" />
          <SparkleStar size={12} className="my-3" />
          <div className="w-px flex-1 bg-border-dark" />
          <SparkleStar size={12} className="my-3" />
          <div className="w-px flex-1 bg-border-dark" />
        </div>

        {/* Column 2: Education & Experience */}
        <div className="reveal">
          <h2 className="font-label kicker-editorial text-primary mb-8">
            EDUCATION &amp; EXPERIENCE
          </h2>

          <ol className="flex flex-col gap-6">
            {education.map((item) => (
              <li key={item.number} className="flex items-start gap-4">
                <span className="serif-editorial text-headline-md text-primary leading-none tabular-nums shrink-0 w-9">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-label text-label-md uppercase tracking-wider text-on-surface mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-body-sm text-ink-muted text-pretty">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Column 3: Framed Portrait & Career Vision Quote */}
        <div className="reveal">
          <article className="relative aspect-[4/4.6] w-full overflow-hidden bg-quote-backdrop">
            <img
              src={quoteImgSrc}
              alt={`Editorial portrait of ${owner.fullName}`}
              referrerPolicy="no-referrer"
              onError={() => {
                if (quoteImgSrc !== images.heroPortrait) {
                  setQuoteImgSrc(images.heroPortrait);
                }
              }}
              className="absolute inset-0 w-full h-full object-cover object-center sepia-[0.12] contrast-[1.04]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(17, 16, 15, 0.90) 10%, rgba(17, 16, 15, 0.45) 48%, transparent 75%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 h-full flex flex-col justify-end p-7 text-on-surface-dark">
              <div className="flex items-start gap-3">
                <span
                  className="serif-editorial text-gold leading-none select-none shrink-0 text-[44px]"
                  style={{ lineHeight: 0.75 }}
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote className="font-label text-label-md uppercase tracking-wider leading-relaxed text-on-surface-dark">
                  {quote}
                </blockquote>
              </div>
              <p className="serif-editorial italic text-title-lg text-gold text-right mt-3">
                {owner.initialsSignature}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
