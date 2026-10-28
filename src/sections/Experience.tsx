import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-slate-100/60 dark:bg-[#06080d]/60 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Professional Timeline"
          title="Internships & Applied Experience"
          subtitle="Practical industry training and hands-on project work in data science, Python programming, and web development."
        />

        <ExperienceTimeline experiences={experience} />
      </div>
    </section>
  );
};
