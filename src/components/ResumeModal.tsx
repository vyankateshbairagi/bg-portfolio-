import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { personal, education, experience, projects, skillGroups, certifications } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#090d16] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Action Bar */}
          <div className="px-6 py-4 bg-[#0e1626] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono font-semibold text-slate-200">
                Bhushan_Gavhane_Resume.pdf (Preview)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
              >
                <Printer size={13} />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Resume Document */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 bg-[#07090e] font-sans print:p-0 print:bg-white print:text-black">
            {/* Header */}
            <div className="border-b border-slate-800 pb-5">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                {personal.name}
              </h1>
              <p className="text-sm font-semibold text-blue-400">
                {personal.role} | {personal.subRole}
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Phone size={12} className="text-blue-400" /> {personal.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={12} className="text-blue-400" /> {personal.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-blue-400" /> {personal.location}
                </span>
                <span className="flex items-center gap-1">
                  <LinkedinIcon size={12} className="text-blue-400" /> linkedin.com/in/{personal.linkedinUsername}
                </span>
                <span className="flex items-center gap-1">
                  <GithubIcon size={12} className="text-blue-400" /> github.com/{personal.githubUsername}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personal.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3">
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="text-xs flex justify-between items-start gap-4">
                    <div>
                      <span className="font-semibold text-slate-100 block">{edu.degree}</span>
                      <span className="text-slate-400">{edu.institution}, {edu.location}</span>
                    </div>
                    <div className="text-right shrink-0 font-mono">
                      <span className="text-blue-400 font-bold block">{edu.grade}</span>
                      <span className="text-slate-500 text-[11px]">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2.5">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {skillGroups.map((group) => (
                  <div key={group.category} className="bg-slate-900/40 p-2.5 rounded border border-slate-800">
                    <span className="font-mono text-slate-400 font-medium block mb-1">
                      {group.category}:
                    </span>
                    <span className="text-slate-200">
                      {group.skills.map(s => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3">
                Featured Projects
              </h2>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="text-xs space-y-1.5">
                    <div className="flex justify-between items-baseline flex-wrap gap-1">
                      <span className="font-semibold text-slate-100 text-sm">
                        {proj.title} — <span className="font-normal text-slate-400 text-xs">{proj.tagline}</span>
                      </span>
                      <span className="font-mono text-[11px] text-blue-400">
                        {proj.stack.slice(0, 4).join(', ')}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{proj.overview}</p>
                    <ul className="list-disc list-inside text-slate-400 space-y-0.5">
                      {proj.features.slice(0, 3).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3">
                Internship Experience
              </h2>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div key={exp.id} className="text-xs space-y-1">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="font-semibold text-slate-100">
                        {exp.role} <span className="font-normal text-slate-400">at</span> {exp.company}
                      </span>
                      <span className="font-mono text-slate-500 text-[11px] shrink-0">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-slate-400 space-y-0.5">
                      {exp.highlights.slice(0, 2).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2">
                Certifications
              </h2>
              <div className="space-y-1.5 text-xs">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex justify-between items-center text-slate-300">
                    <span><strong>{cert.title}</strong> — {cert.issuer}</span>
                    <span className="font-mono text-slate-500 text-[11px] shrink-0">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
