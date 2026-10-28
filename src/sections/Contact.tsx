import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Send, Copy, Check, 
  ExternalLink, Sparkles, MapPin, AlertCircle, Loader2, CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Email form state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleResetForm = () => {
    setSenderName('');
    setSenderEmail('');
    setSubject('');
    setMessage('');
    setErrors({});
    setSubmitSuccess(false);
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: senderName.trim(),
          email: senderEmail.trim(),
          subject: subject.trim() || undefined,
          message: message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmitSuccess(true);
      } else {
        throw new Error(data.error || 'Unable to send message via email server.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        err.message || 'Network error occurred. Please try again or use direct mailto.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-blue-500/30 shrink-0 bg-slate-900">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border border-white dark:border-slate-900 rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {personal.name}
                  </h4>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    ● Typically responds within 24 hours
                  </p>
                </div>
              </div>

              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
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

          {/* Right Column: Direct Functional Email Contact Form */}
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
                    Directly delivers to <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">{personal.email}</span>
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Mail size={16} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  /* Success Feedback Card */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-6 sm:p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Delivered Successfully!</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-md mx-auto">
                        Thank you, <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">{senderName}</strong>! Your message has been sent directly to Bhushan's Gmail inbox. You'll receive a response shortly.
                      </p>
                    </div>
                    <button
                      onClick={handleResetForm}
                      type="button"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-md"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </motion.div>
                ) : (
                  /* Interactive Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4 text-xs sm:text-sm"
                  >
                    {errorMessage && (
                      <div className="p-3.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2.5">
                        <AlertCircle size={16} className="shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                        <div>
                          <p className="font-semibold">{errorMessage}</p>
                          <a
                            href={`mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Inquiry')}&body=${encodeURIComponent(message)}`}
                            className="underline text-blue-600 dark:text-blue-400 mt-1 block"
                          >
                            Click here to send via your email app instead →
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Sender Name */}
                      <div>
                        <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5 text-xs">
                          Your Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          disabled={isSubmitting}
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins (Recruiter / Lead)"
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors shadow-sm disabled:opacity-60"
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
                          disabled={isSubmitting}
                          value={senderEmail}
                          onChange={(e) => setSenderEmail(e.target.value)}
                          placeholder="e.g. sarah@company.com"
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors shadow-sm disabled:opacity-60"
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
                        disabled={isSubmitting}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Full-Stack Developer Role / Project Discussion"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors shadow-sm disabled:opacity-60"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5 text-xs">
                        Message / Opportunity Details <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        disabled={isSubmitting}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share role specifics, project scope, or any questions about my technical background..."
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none shadow-sm disabled:opacity-60"
                      />
                      {errors.message && (
                        <p className="text-rose-500 text-[11px] mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 border border-blue-500/40 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Sending Email...</span>
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            <span>Send Message Directly</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors text-center sm:text-right"
                      >
                        Direct Email: <span className="font-mono text-blue-600 dark:text-blue-400 underline">{personal.email}</span>
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
