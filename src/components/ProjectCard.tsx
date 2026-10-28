import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/portfolio';
import { PujanamMockup, AgricultureMockup, EstimatorMockup } from './ProjectMockups';
import { ProjectModal } from './ProjectModal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
          project.isFlagship
            ? 'bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-[#0f172a]/90 dark:via-[#0a0f1d]/90 dark:to-[#07090e]/95 border-blue-300 dark:border-blue-500/30 shadow-xl shadow-blue-500/5 dark:shadow-blue-950/20'
            : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-sm'
        }`}
      >
        {/* Flagship accent line */}
        {project.isFlagship && (
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
        )}

        <div className="p-6 lg:p-8">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-medium text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/20 shadow-sm">
                {project.category}
              </span>
              {project.isFlagship && (
                <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-500/20 shadow-sm">
                  <Sparkles size={12} className="text-amber-500 dark:text-amber-400" />
                  FLAGSHIP PROJECT
                </span>
              )}
            </div>

            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              0{index + 1} // CASE STUDY
            </span>
          </div>

          {/* Project Title and Tagline */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1.5 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Two-Column Showcase: Details on left, Interactive Mockup on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Context, Features & Stack */}
            <div className="lg:col-span-5 space-y-5">
              {/* Short Overview */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.overview}
              </p>

              {/* Verified Features */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Verified Capabilities
                </span>
                <ul className="space-y-2">
                  {project.features.slice(0, 4).map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle size={15} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                  Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/20"
                >
                  <Layers size={14} />
                  <span>Inspect Case Study</span>
                </button>

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
                  >
                    <GithubIcon size={14} />
                    <span>View Source</span>
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
                  >
                    <ArrowUpRight size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: High Fidelity Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#090d16] p-1 shadow-inner">
                {project.mockupType === 'pujanam' && <PujanamMockup />}
                {project.mockupType === 'agriculture' && <AgricultureMockup />}
                {project.mockupType === 'estimator' && <EstimatorMockup />}
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={isModalOpen ? project : null}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
