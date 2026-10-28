import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/portfolio';
import { PujanamMockup, AgricultureMockup, EstimatorMockup } from './ProjectMockups';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 dark:bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-[#0e1626] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <div>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Live Mockup */}
            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                <Layers size={14} className="text-blue-600 dark:text-blue-400" />
                <span>INTERACTIVE PRODUCT PREVIEW</span>
              </div>
              {project.mockupType === 'pujanam' && <PujanamMockup />}
              {project.mockupType === 'agriculture' && <AgricultureMockup />}
              {project.mockupType === 'estimator' && <EstimatorMockup />}
            </div>

            {/* Overview & Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">Problem Addressed</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{project.problem}</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Architecture & Solution</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Implemented Features */}
            <div className="bg-slate-50/70 dark:bg-slate-900/30 p-5 rounded-xl border border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
                Key Technical Implementations
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={15} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                Technologies & Protocols
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-[#0a0f1c] border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-500 font-mono">
              Designed & Developed by Bhushan Gavhane
            </div>

            <div className="flex items-center gap-2.5">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-950 dark:hover:text-white transition-colors border border-slate-300 dark:border-slate-700 shadow-sm"
                >
                  <GithubIcon size={14} />
                  <span>View Repository</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                >
                  <ExternalLink size={14} />
                  <span>Explore Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
