import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import type { Education } from '../data/portfolio';

interface EducationCardProps {
  education: Education;
  index: number;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${
        education.featured
          ? 'bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 dark:from-slate-900/90 dark:via-[#0c1322] dark:to-slate-900/80 border border-blue-300 dark:border-blue-500/40 shadow-xl shadow-blue-500/5 dark:shadow-blue-950/20'
          : 'bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-sm'
      }`}
    >
      {education.featured && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
          Primary Degree
        </div>
      )}

      {/* Top row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${education.featured ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
            <GraduationCap size={20} />
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Calendar size={13} />
            {education.period}
          </span>
        </div>

        {/* Grade badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold shadow-sm">
          <Award size={14} className="text-blue-600 dark:text-blue-400" />
          <span>{education.grade}</span>
        </div>
      </div>

      {/* Degree Title & Institution */}
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">{education.degree}</h3>
      <div className="text-sm text-slate-700 dark:text-slate-300 font-medium mt-1 flex flex-wrap items-center gap-2">
        <span>{education.institution}</span>
        <span className="text-slate-400 dark:text-slate-600">•</span>
        <span className="text-slate-500 dark:text-slate-400 text-xs flex items-center gap-1">
          <MapPin size={12} />
          {education.location}
        </span>
      </div>

      {/* Highlights */}
      {education.highlights && education.highlights.length > 0 && (
        <ul className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
          {education.highlights.map((h, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
              <CheckCircle2 size={14} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};
