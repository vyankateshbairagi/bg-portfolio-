import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  CheckCircle2, FileText, ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const { personal, education, certifications } = PORTFOLIO_DATA;
  const primaryEdu = education[0]; // B.E. Computer Engineering

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Profile & Philosophy"
          title="Turning ideas into working products."
          subtitle="Engineering responsive, maintainable full-stack systems with strong Computer Science fundamentals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative grounded strictly in resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            <p>
              I am a <strong className="text-slate-900 dark:text-white">Computer Engineering graduate</strong> (Sinhgad Institute of Technology, Pune) with practical full-stack development experience centered around the <strong className="text-blue-600 dark:text-blue-400 font-semibold">MERN stack</strong> (MongoDB, Express.js, React.js, Node.js).
            </p>

            <p>
              My focus is on the complete lifecycle of web applications—from drafting modular, component-based user interfaces with React and Tailwind CSS, to architecting RESTful APIs, securing endpoints with JSON Web Tokens (JWT), and implementing role-based authorization workflows.
            </p>

            <p>
              Throughout my degree and internships, I have emphasized writing predictable, maintainable software rooted in core Computer Science concepts: Data Structures & Algorithms, Object-Oriented Programming, and Relational & Document Database Management.
            </p>

            {/* Core Pillars Bullet Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Key Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">Responsive Frontend</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">React.js, Tailwind CSS, clean component architecture</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">REST APIs & Auth</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">Node.js, Express, JWT, Role-Based Access Control</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">Database Modeling</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">MongoDB schemas, aggregation, MySQL queries</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">Analytics & Tooling</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">Python data analysis, Power BI, Tableau, Git</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <FileText size={14} />
                <span>Inspect full curriculum & credentials in Resume Modal</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Factual Highlights Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Professional Portrait Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden relative group">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-white dark:border-slate-800 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-emerald-500 text-[10px] font-mono text-white rounded font-bold shadow-sm">
                    ACTIVE
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 block font-semibold">
                    Professional Profile
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white truncate">
                    {personal.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {personal.role}
                  </p>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Open for Full-Time Roles</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-400 text-[10px] block">SPECIALTY</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">MERN Stack</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-400 text-[10px] block">LOCATION</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Pune, MH</span>
                </div>
              </div>
            </div>

            {/* Primary Academic Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 border border-blue-200 dark:border-blue-500/30 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <GraduationCap size={15} /> Primary Degree
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold border border-blue-200 dark:border-blue-500/20">
                  {primaryEdu.grade}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{primaryEdu.degree}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{primaryEdu.institution}, {primaryEdu.location}</p>
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{primaryEdu.period}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Distinction Aggregate</span>
              </div>
            </div>

            {/* Factual Stack Snapshot */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Engineering Stack At A Glance
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400">Core Runtime & Backend:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-medium">Node.js, Express.js</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400">Client Architecture:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-medium">React.js, Tailwind CSS</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400">Primary Database:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-medium">MongoDB & MySQL</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Security & Authorization:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-medium">JWT, Password Hashing, RBAC</span>
                </div>
              </div>
            </div>

            {/* Certifications Badge Card */}
            <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 shadow-sm">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Verified Cloud & Data Credentials
              </span>
              <div className="space-y-2 text-xs">
                {certifications.map(c => (
                  <div key={c.id} className="flex items-center justify-between gap-2">
                    <span className="text-slate-800 dark:text-slate-300 font-medium truncate">{c.title}</span>
                    <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 shrink-0 font-medium">{c.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
