import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, FileText, Check, Copy
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { SocialLinks } from '../components/SocialLinks';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal, heroCodeSnippet, techStrip } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'profile' | 'apiResponse'>('profile');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(heroCodeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background glow & subtle grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 dark:opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-mono text-blue-600 dark:text-blue-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
              <span>{personal.statusBadge}</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-slate-600 dark:text-slate-400">CGPA 8.56</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-500">
                digital experiences
              </span>{' '}
              that work beautifully.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">{personal.name}</strong>, a Full-Stack Web Developer specialized in the{' '}
              <span className="text-blue-600 dark:text-blue-400 font-medium">MERN stack</span> (MongoDB, Express.js, React.js, Node.js). 
              I design clean RESTful APIs, implement secure JWT authentication with role-based access, and build responsive, database-driven web applications with high performance.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/30 border border-blue-500/50 group"
              >
                <span>Explore My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 border border-slate-200 dark:border-slate-700/80 shadow-sm"
              >
                <span>Get In Touch</span>
              </a>

              {personal.resumeConfigured && (
                <button
                  onClick={onOpenResume}
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 transition-all duration-200 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <FileText size={16} className="text-blue-600 dark:text-blue-400" />
                  <span>Resume</span>
                </button>
              )}
            </div>

            {/* Social Links & Location indicator */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <SocialLinks size="sm" showLabels={true} />
              <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>{personal.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Custom Workstation / Code IDE Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient decorative blur behind workstation */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 rounded-2xl blur-lg opacity-70" />

            <div className="relative rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-[#0c1220] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/70 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">dev-workstation // bhushan</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-md border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'profile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    developer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('apiResponse')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'apiResponse' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    api-auth.json
                  </button>
                </div>
              </div>

              {/* Code Panel */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 overflow-x-auto min-h-[290px] relative">
                <button
                  onClick={handleCopyCode}
                  aria-label="Copy snippet"
                  className="absolute top-4 right-4 p-1.5 rounded bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                >
                  {copiedSnippet ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </button>

                {activeTab === 'profile' ? (
                  <pre className="leading-relaxed">
                    <code>
                      <span className="text-slate-500">// Bhushan Gavhane — Profile Specification</span>{'\n'}
                      <span className="text-cyan-400">const</span>{' '}
                      <span className="text-blue-300">developer</span> = {'{'}{'\n'}
                      {'  '}<span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"Bhushan Gavhane"</span>,{'\n'}
                      {'  '}<span className="text-slate-400">degree:</span>{' '}
                      <span className="text-emerald-300">"B.E. Computer Engineering"</span>,{'\n'}
                      {'  '}<span className="text-slate-400">aggregate:</span>{' '}
                      <span className="text-amber-300">8.56</span> <span className="text-slate-500">/* CGPA */</span>,{'\n'}
                      {'  '}<span className="text-slate-400">coreStack:</span> [{'\n'}
                      {'    '}<span className="text-emerald-300">"React.js"</span>,{'\n'}
                      {'    '}<span className="text-emerald-300">"Node.js"</span>,{'\n'}
                      {'    '}<span className="text-emerald-300">"Express.js"</span>,{'\n'}
                      {'    '}<span className="text-emerald-300">"MongoDB"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}<span className="text-slate-400">capabilities:</span> [{'\n'}
                      {'    '}<span className="text-emerald-300">"REST APIs"</span>,{' '}
                      <span className="text-emerald-300">"JWT Auth & RBAC"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}<span className="text-slate-400">readyToDeploy:</span>{' '}
                      <span className="text-blue-400">true</span>{'\n'}
                      {'}'};{'\n\n'}
                      <span className="text-cyan-400">export default</span> developer;
                    </code>
                  </pre>
                ) : (
                  <pre className="leading-relaxed">
                    <code>
                      <span className="text-slate-500">// HTTP 200 OK — POST /api/v1/auth/verify</span>{'\n'}
                      {'{'}{'\n'}
                      {'  '}<span className="text-cyan-400">"status"</span>: <span className="text-emerald-300">"success"</span>,{'\n'}
                      {'  '}<span className="text-cyan-400">"authenticated"</span>: <span className="text-blue-400">true</span>,{'\n'}
                      {'  '}<span className="text-cyan-400">"user"</span>: {'{'}{'\n'}
                      {'    '}<span className="text-cyan-400">"name"</span>: <span className="text-emerald-300">"Bhushan Gavhane"</span>,{'\n'}
                      {'    '}<span className="text-cyan-400">"roles"</span>: [<span className="text-emerald-300">"FullStackDeveloper"</span>, <span className="text-emerald-300">"Engineer"</span>],{'\n'}
                      {'    '}<span className="text-cyan-400">"location"</span>: <span className="text-emerald-300">"Pune, Maharashtra"</span>,{'\n'}
                      {'    '}<span className="text-cyan-400">"verifiedCredentials"</span>: <span className="text-blue-400">true</span>{'\n'}
                      {'  '}{'}'},{'\n'}
                      {'  '}<span className="text-cyan-400">"token"</span>: <span className="text-amber-300">"eyJhbGciOiJIUzI1NiIsIn..."</span>{'\n'}
                      {'}'}
                    </code>
                  </pre>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-[#070b14] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-400">MERN Stack • Active</span>
                </div>
                <span>UTF-8 • TypeScript</span>
              </div>
            </div>

            {/* Floating Tech Badges (JavaScript, React, Node.js, MongoDB) */}
            <div className="hidden sm:flex items-center justify-between gap-2 mt-4 px-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-amber-600 dark:text-amber-300 font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400" />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-cyan-700 dark:text-cyan-300 font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-emerald-700 dark:text-emerald-300 font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-emerald-700 dark:text-emerald-400 font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                <span>MongoDB</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slim Technology Strip Below Hero */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 shrink-0">
              Core Technical Competencies:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {techStrip.map((item) => (
                <span
                  key={item.name}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/30 transition-colors shadow-sm"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
