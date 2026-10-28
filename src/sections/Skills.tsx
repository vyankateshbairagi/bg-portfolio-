import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCategory } from '../components/SkillCategory';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skillGroups } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#06080d]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Technical Toolkit"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of programming languages, frontend libraries, backend frameworks, and core Computer Science foundations."
        />

        {/* 6 Categorized Skill Cards in a clean, balanced grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCategory
              key={group.category}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Note on Software Engineering Standards */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>
              All competencies reflect coursework at Sinhgad Institute of Technology and verified projects.
            </span>
          </div>
          <span className="font-mono text-slate-500">
            No subjective percentages • Factual stack overview
          </span>
        </div>
      </div>
    </section>
  );
};
