import { PORTFOLIO_DATA, ProjectWork } from '../data/portfolio';

interface WorksSectionProps {
  onSelectWork: (work: ProjectWork) => void;
}

export function WorksSection({ onSelectWork }: WorksSectionProps) {
  const { owner, works } = PORTFOLIO_DATA;

  return (
    <section
      id="works"
      className="bg-surface-dark text-on-surface-dark py-20 lg:py-24 px-[5vw]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header Bar */}
        <div className="flex flex-wrap items-center gap-5 mb-12 reveal">
          <h2 className="font-label kicker-editorial text-on-surface-dark">
            SELECTED WORKS &amp; PROJECTS
          </h2>
          <div
            className="flex-1 h-px bg-border-light min-w-[40px]"
            aria-hidden="true"
          />
          <a
            href={owner.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label kicker-editorial text-gold-light hover:text-on-surface-dark transition-colors duration-350 ease-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <span>GITHUB PROFILE</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* 3-Column Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {works.map((work) => (
            <div key={work.id} className="flex flex-col h-full">
              <button
                type="button"
                onClick={() => onSelectWork(work)}
                aria-label={`Inspect project ${work.title}`}
                className="text-left group cursor-pointer bg-surface-dark-card border border-border-light aspect-[4/5] p-6 flex flex-col justify-between transition-all duration-350 ease-card-hover hover:-translate-y-1.5 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {/* Top Meta Row */}
                <div className="w-full flex items-center justify-between gap-2">
                  <span className="font-label text-label-sm uppercase text-gold-light tabular-nums">
                    {work.year}
                  </span>
                  <span className="font-label text-label-sm uppercase text-ink-light-muted border border-border-light px-2.5 py-1">
                    {work.badge}
                  </span>
                </div>

                {/* Center Editorial Title + Concise Summary */}
                <div className="my-auto py-4 flex flex-col gap-4">
                  <h3 className="serif-editorial text-title-lg text-on-surface-dark group-hover:text-gold-light transition-colors">
                    {work.title}
                  </h3>
                  <p className="font-body text-body-sm text-ink-light-muted text-pretty">
                    {work.summary}
                  </p>
                </div>

                {/* Bottom Inspect Cue */}
                <div className="w-full flex items-center justify-between pt-3 border-t border-border-light">
                  <span className="font-label text-label-sm uppercase text-gold-light">
                    INSPECT PROJECT
                  </span>
                  <span
                    className="text-gold-light group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </button>

              {/* Caption below poster frame */}
              <div className="text-center mt-5 px-2">
                <p className="font-label text-label-md uppercase text-on-surface-dark">
                  {work.title}
                </p>
                <p className="font-label text-label-sm uppercase text-ink-light-muted mt-1">
                  {work.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
