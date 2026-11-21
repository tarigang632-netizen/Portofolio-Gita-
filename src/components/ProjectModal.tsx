import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ProjectWork } from '../data/portfolio';

interface ProjectModalProps {
  work: ProjectWork | null;
  onClose: () => void;
}

export function ProjectModal({ work, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (work) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [work]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
      aria-labelledby="modal-title"
      aria-describedby="modal-category modal-summary"
      className="bg-surface-dark text-on-surface-dark border border-border-light p-8 max-w-xl w-[calc(100%-2rem)] rounded-none m-auto"
    >
      {work && (
        <>
          <header className="flex items-start justify-between gap-4 pb-6 border-b border-border-light">
            <div>
              <p
                id="modal-category"
                className="font-label kicker-editorial text-gold-light mb-2"
              >
                {work.category}
              </p>
              <h2
                id="modal-title"
                className="serif-editorial text-headline-md text-on-surface-dark"
              >
                {work.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="inline-flex items-center justify-center w-10 h-10 border border-border-light text-on-surface-dark rounded-full transition-colors duration-350 ease-card-hover hover:border-gold hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold shrink-0 cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </header>

          <div className="py-6 space-y-5">
            <p
              id="modal-summary"
              className="font-body text-body-md text-ink-light-muted leading-relaxed"
            >
              {work.summary}
            </p>
            <div>
              <p className="font-label text-label-sm uppercase text-gold-light mb-2">
                KEY HIGHLIGHTS
              </p>
              <ul className="space-y-2 font-body text-body-sm text-on-surface-dark list-disc list-inside">
                {work.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <footer className="pt-5 border-t border-border-light flex flex-wrap justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-border-light text-on-surface-dark font-label text-label-md uppercase hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold cursor-pointer"
            >
              Close
            </button>
            <a
              href={work.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-on-primary font-label text-label-md uppercase hover:bg-gold hover:text-surface-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              View on GitHub
            </a>
          </footer>
        </>
      )}
    </dialog>
  );
}
