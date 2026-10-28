import React from 'react';
import { motion } from 'motion/react';
import { Cloud, BarChart2, ExternalLink, Calendar } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-16 sm:py-24 relative bg-[#06080d]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Verified Credentials"
          title="Certifications"
          subtitle="Industry-recognized certifications in cloud foundations and data analytics methodologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {cert.id === 'az-900' ? <Cloud size={20} /> : <BarChart2 size={20} />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                        <Calendar size={11} /> {cert.date}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                    {cert.badgeCode}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-2 mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {cert.credentialUrl && (
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-end">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Official Credential Info</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
