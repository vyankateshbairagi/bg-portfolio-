import React, { useState } from 'react';
import { Mail, Phone, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  size = 'md',
  showLabels = false,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { email, githubUrl, linkedinUrl, phone } = PORTFOLIO_DATA.personal;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const buttonPadding = {
    sm: 'p-2 text-xs',
    md: 'p-2.5 text-sm',
    lg: 'p-3 text-base',
  };

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile (bhushan0919)"
        className={`inline-flex items-center gap-2 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 shadow-sm ${buttonPadding[size]}`}
      >
        <GithubIcon size={iconSizes[size]} />
        {showLabels && <span>GitHub</span>}
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile (bhushan-gavhane)"
        className={`inline-flex items-center gap-2 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 shadow-sm ${buttonPadding[size]}`}
      >
        <LinkedinIcon size={iconSizes[size]} />
        {showLabels && <span>LinkedIn</span>}
      </a>

      <a
        href={`mailto:${email}`}
        aria-label={`Send email to ${email}`}
        className={`inline-flex items-center gap-2 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 shadow-sm ${buttonPadding[size]}`}
      >
        <Mail size={iconSizes[size]} />
        {showLabels && <span>Email</span>}
      </a>

      <a
        href={`tel:${phone.replace(/\s+/g, '')}`}
        aria-label={`Call ${phone}`}
        className={`inline-flex items-center gap-2 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 shadow-sm ${buttonPadding[size]}`}
      >
        <Phone size={iconSizes[size]} />
        {showLabels && <span>Call</span>}
      </a>

      {/* Quick copy email button */}
      <button
        onClick={handleCopyEmail}
        type="button"
        title="Copy email to clipboard"
        aria-label="Copy email address"
        className={`inline-flex items-center gap-1.5 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 shadow-sm ${buttonPadding[size]}`}
      >
        {copiedEmail ? (
          <>
            <Check size={iconSizes[size]} className="text-emerald-500 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">Copied!</span>
          </>
        ) : (
          <>
            <Copy size={iconSizes[size]} />
            <span className="font-mono text-xs">Copy Email</span>
          </>
        )}
      </button>
    </div>
  );
};
