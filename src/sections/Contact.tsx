import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Send, Copy, Check, 
  ExternalLink, Sparkles, MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Email composer form state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validateAndSend = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!senderName.trim()) {
      newErrors.senderName = 'Please enter your name.';
    }
    if (!senderEmail.trim()) {
      newErrors.senderEmail = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      newErrors.senderEmail = 'Please provide a valid email address.';
    }
    if (!message.trim()) {
      newErrors.message = 'Please provide a message or inquiry details.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // Construct genuine mailto link with encoded subject and message
    const emailSubject = encodeURIComponent(
      subject.trim() || `Inquiry from ${senderName} regarding Full-Stack Opportunities`
    );
    const emailBody = encodeURIComponent(
      `Hello Bhushan,\n\n${message}\n\nFrom: ${senderName}\nContact: ${senderEmail}`
    );
    
    // Trigger user's mail client directly
    window.location.href = `mailto:${personal.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-slate-100/60 dark:bg-[#06080d]/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Have an idea? Let's build something useful."
          subtitle="I'm open to software engineering opportunities, full-stack developer roles, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Channels & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
                <span>Verified Direct Channels</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 break-all transition-colors"
                  >
                    {personal.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy Email"
                    aria-label="Copy email to clipboard"
                    className="p-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors shrink-0 shadow-sm"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Telephone (Click to Call)
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono"
                  >
                    {personal.phoneDisplay}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    type="button"
                    title="Copy Phone"
                    aria-label="Copy phone to clipboard"
                    className="p-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors shrink-0 shadow-sm"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white transition-all text-xs font-medium flex items-center justify-between shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon size={15} className="text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ExternalLink size={12} className="text-slate-400 dark:text-slate-500" />
                </a>

                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white transition-all text-xs font-medium flex items-center justify-between shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon size={15} className="text-slate-700 dark:text-slate-300" />
                    <span>GitHub</span>
                  </span>
                  <ExternalLink size={12} className="text-slate-400 dark:text-slate-500" />
                </a>
              </div>

              {/* Location pill */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-blue-600 dark:text-blue-400" />
                  <span>{personal.location}</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">IST (UTC+5:30)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Direct Email Composer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Send an Inquiry or Job Opportunity</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Opens directly in your email client addressed to <span className="font-mono text-blue-600 dark:text-blue-400">{personal.email}</span>
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Mail size={16} />
                </div>
              </div>

              <form onSubmit={validateAndSend} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Sender Name */}
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5 text-xs">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins (Recruiter / Lead)"
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors shadow-sm"
                    />
                    {errors.senderName && (
                      <p className="text-rose-500 text-[11px] mt-1">{errors.senderName}</p>
                    )}
                  </div>

                  {/* Sender Email */}
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5 text-xs">
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. sarah@company.com"
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors shadow-sm"
                    />
                    {errors.senderEmail && (
                      <p className="text-rose-500 text-[11px] mt-1">{errors.senderEmail}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5 text-xs">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Full-Stack Developer Role / Project Discussion"
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors shadow-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5 text-xs">
                    Message / Opportunity Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share role specifics, project scope, or any questions about my technical background..."
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none shadow-sm"
                  />
                  {errors.message && (
                    <p className="text-rose-500 text-[11px] mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 border border-blue-500/40"
                  >
                    <Send size={15} />
                    <span>Send Email Directly</span>
                  </button>

                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors text-center sm:text-right"
                  >
                    Or email via default app: <span className="font-mono text-blue-600 dark:text-blue-400 underline">{personal.email}</span>
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
