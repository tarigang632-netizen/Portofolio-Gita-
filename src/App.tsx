/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { FooterSection } from './components/FooterSection';
import { HeroSection } from './components/HeroSection';
import { ProjectModal } from './components/ProjectModal';
import { WorksSection } from './components/WorksSection';
import { ProjectWork } from './data/portfolio';

export default function App() {
  const [selectedWork, setSelectedWork] = useState<ProjectWork | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <HeroSection />
      <main>
        <WorksSection onSelectWork={setSelectedWork} />
        <AboutSection />
      </main>
      <FooterSection />
      <ProjectModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </div>
  );
}
