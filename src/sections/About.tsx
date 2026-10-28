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
  const { education, certifications } = PORTFOLIO_DATA;
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
            className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            <p>
              I am a <strong className="text-white">Computer Engineering graduate</strong> (Sinhgad Institute of Technology, Pune) with practical full-stack development experience centered around the <strong className="text-blue-400 font-semibold">MERN stack</strong> (MongoDB, Express.js, React.js, Node.js).
            </p>

            <p>
              My focus is on the complete lifecycle of web applications—from drafting modular, component-based user interfaces with React and Tailwind CSS, to architecting RESTful APIs, securing endpoints with JSON Web Tokens (JWT), and implementing role-based authorization workflows.
            </p>

            <p>
              Throughout my degree and internships, I have emphasized writing predictable, maintainable software rooted in core Computer Science concepts: Data Structures & Algorithms, Object-Oriented Programming, and Relational & Document Database Management.
            </p>

            {/* Core Pillars Bullet Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 block">Responsive Frontend</strong>
                    <span className="text-slate-400 text-xs">React.js, Tailwind CSS, clean component architecture</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 block">REST APIs & Auth</strong>
                    <span className="text-slate-400 text-xs">Node.js, Express, JWT, Role-Based Access Control</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 block">Database Modeling</strong>
                    <span className="text-slate-400 text-xs">MongoDB schemas, aggregation, MySQL queries</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 block">Analytics & Tooling</strong>
                    <span className="text-slate-400 text-xs">Python data analysis, Power BI, Tableau, Git</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-blue-400 hover:text-blue-300 transition-colors"
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
            {/* Primary Academic Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-blue-500/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-blue-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <GraduationCap size={15} /> Primary Degree
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 font-mono text-xs font-bold border border-blue-500/20">
                  {primaryEdu.grade}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-100">{primaryEdu.degree}</h4>
              <p className="text-xs text-slate-400 mt-1">{primaryEdu.institution}, {primaryEdu.location}</p>
              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{primaryEdu.period}</span>
                <span className="text-emerald-400">Distinction Aggregate</span>
              </div>
            </div>

            {/* Factual Stack Snapshot */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Engineering Stack At A Glance
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Core Runtime & Backend:</span>
                  <span className="font-mono text-slate-200">Node.js, Express.js</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Client Architecture:</span>
                  <span className="font-mono text-slate-200">React.js, Tailwind CSS</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Primary Database:</span>
                  <span className="font-mono text-slate-200">MongoDB & MySQL</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Security & Authorization:</span>
                  <span className="font-mono text-slate-200">JWT, Password Hashing, RBAC</span>
                </div>
              </div>
            </div>

            {/* Certifications Badge Card */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Verified Cloud & Data Credentials
              </span>
              <div className="space-y-2 text-xs">
                {certifications.map(c => (
                  <div key={c.id} className="flex items-center justify-between gap-2">
                    <span className="text-slate-300 font-medium truncate">{c.title}</span>
                    <span className="font-mono text-[11px] text-blue-400 shrink-0">{c.date}</span>
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
