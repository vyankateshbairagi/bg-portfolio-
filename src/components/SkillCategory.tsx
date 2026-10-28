import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Layout, Server, Database, Wrench, Binary,
  Sparkles
} from 'lucide-react';
import type { SkillGroup } from '../data/portfolio';

interface SkillCategoryProps {
  group: SkillGroup;
  index: number;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ group, index }) => {
  // Category-specific icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code2 size={18} className="text-blue-600 dark:text-blue-400" />;
      case 'Frontend':
        return <Layout size={18} className="text-cyan-600 dark:text-cyan-400" />;
      case 'Backend':
        return <Server size={18} className="text-indigo-600 dark:text-indigo-400" />;
      case 'Databases':
        return <Database size={18} className="text-emerald-600 dark:text-emerald-400" />;
      case 'Tools & Analytics':
        return <Wrench size={18} className="text-amber-600 dark:text-amber-400" />;
      case 'Computer Science':
        return <Binary size={18} className="text-rose-600 dark:text-rose-400" />;
      default:
        return <Sparkles size={18} className="text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white dark:bg-slate-900/40 rounded-xl p-5 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between shadow-sm"
    >
      <div>
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50">
            {getCategoryIcon(group.category)}
          </div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{group.category}</h3>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
          {group.description}
        </p>

        {/* Skills list */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <div
              key={skill.name}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                skill.highlight
                  ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400/60 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
