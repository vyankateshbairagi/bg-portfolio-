import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { name, monogram, role, githubUrl, linkedinUrl, email } = PORTFOLIO_DATA.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-100 dark:bg-[#05070c] border-t border-slate-200 dark:border-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Monogram & Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-600/20 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-xs font-mono shadow-sm">
            {monogram}
          </div>
          <div>
            <span className="font-semibold text-slate-800 dark:text-slate-300 block">{name}</span>
            <span className="text-[11px] text-slate-500">{role} • Pune, India</span>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">About</a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Experience</a>
          <a href="#education" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Education</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Contact</a>
        </div>

        {/* Back to top & Socials */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-900 transition-colors"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-900 transition-colors"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-900 transition-colors"
            >
              <Mail size={15} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-600">
        <span>© {currentYear} {name}. All rights reserved.</span>
        <span>Built with React, TypeScript & Tailwind CSS • Light & Dark Mode</span>
      </div>
    </footer>
  );
};
