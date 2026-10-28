import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import type { Experience } from '../data/portfolio';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-10">
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
          className="relative group"
        >
          {/* Timeline node */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#07090e] border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
          </div>

          <div className="bg-white dark:bg-slate-900/40 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 shadow-sm">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 shadow-sm">
                  {exp.type}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar size={13} className="text-slate-400 dark:text-slate-500" />
                  {exp.period}
                </span>
              </div>

              {exp.location && (
                <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                  <MapPin size={12} />
                  {exp.location}
                </span>
              )}
            </div>

            {/* Role & Company */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              {exp.role}
              <span className="text-slate-400 dark:text-slate-500 font-normal">at</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</span>
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 mb-4 leading-relaxed">
              {exp.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2 mb-4">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Key Contributions & Scope
              </span>
              <ul className="space-y-1.5">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-blue-600 dark:text-blue-400/90 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
