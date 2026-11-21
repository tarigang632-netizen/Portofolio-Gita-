import { IdCard, Code2, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { SparkleStar } from './SparkleStar';

export function FooterSection() {
  const { owner } = PORTFOLIO_DATA;

  return (
    <footer
      id="contact"
      className="bg-surface-dark text-on-surface-dark pt-20 pb-16 px-[5vw] mt-auto"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_0.7fr] gap-10 items-start">
        {/* Col 1: Editorial Callout */}
        <div>
          <h2 className="serif-editorial text-headline-lg-mobile lg:text-headline-lg text-gold-light">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            IMPACTFUL
          </h2>
          <SparkleStar size={16} className="mt-5" />
        </div>

        {/* Col 2: Direct Contact */}
        <div className="lg:border-l lg:border-border-light lg:pl-7">
          <p className="font-label kicker-editorial text-gold-light mb-5">
            LET&apos;S CONNECT
          </p>
          <ul className="flex flex-col gap-3 font-body text-body-sm text-ink-light-muted">
            <li>
              <a
                href={`mailto:${owner.email}`}
                className="hover:text-gold-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {owner.email}
              </a>
            </li>
            <li>
              <a
                href={owner.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-light transition-colors tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {owner.phoneDisplay}
              </a>
            </li>
            <li className="text-ink-light-muted">{owner.location}</li>
          </ul>
        </div>

        {/* Col 3: Profiles & CV */}
        <div>
          <p className="font-label kicker-editorial text-gold-light mb-5">
            PROFILES &amp; CV
          </p>
          <ul className="flex flex-col gap-3 font-body text-body-sm text-ink-light-muted">
            <li>
              <a
                href={owner.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-gold-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <IdCard
                  strokeWidth={1.6}
                  className="w-4 h-4 text-gold-light shrink-0"
                  aria-hidden="true"
                />
                <span>{owner.linkedinLabel}</span>
              </a>
            </li>
            <li>
              <a
                href={owner.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-gold-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <Code2
                  strokeWidth={1.6}
                  className="w-4 h-4 text-gold-light shrink-0"
                  aria-hidden="true"
                />
                <span>{owner.githubLabel}</span>
              </a>
            </li>
            <li>
              <a
                href={owner.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-gold-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <FileText
                  strokeWidth={1.6}
                  className="w-4 h-4 text-gold-light shrink-0"
                  aria-hidden="true"
                />
                <span>Download Full CV (PDF)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Editorial Monogram */}
        <div className="flex lg:justify-end items-start">
          <span
            className="serif-editorial text-gold leading-none select-none text-[64px] font-light"
            style={{ fontWeight: 300 }}
            aria-label="G/T Monogram"
          >
            {owner.monogram}
          </span>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-[1280px] mx-auto mt-14 pt-6 border-t border-border-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-label text-label-md uppercase tracking-widest text-ink-light-muted text-balance">
          {owner.copyright}
        </p>
        <p className="font-label text-label-md uppercase tracking-widest text-ink-light-muted text-balance">
          {owner.affiliation}
        </p>
      </div>
    </footer>
  );
}
