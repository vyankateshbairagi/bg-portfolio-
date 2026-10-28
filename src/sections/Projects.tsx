import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Engineered Applications"
          title="Featured Projects"
          subtitle="Detailed case studies of full-stack web applications, demonstrating end-to-end architecture, role-based workflows, REST APIs, and database design."
        />

        {/* List of 3 Projects */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
