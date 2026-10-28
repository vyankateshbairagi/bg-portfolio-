import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { EducationCard } from '../components/EducationCard';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Academic Foundation"
          title="Education"
          subtitle="Formal engineering education emphasizing Computer Engineering principles, data structures, and practical application."
        />

        {/* 3 Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <EducationCard
              key={edu.id}
              education={edu}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
