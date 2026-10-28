import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/30'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            aria-label="Bhushan Gavhane Home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-blue-500/25 border border-blue-400/30 group-hover:scale-105 transition-transform duration-200">
              {PORTFOLIO_DATA.personal.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-100 group-hover:text-blue-400 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-blue-600/80 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-colors"
            >
              <FileText size={14} className="text-blue-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-md shadow-blue-600/25 border border-blue-500/40"
            >
              <span>Let's Connect</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              type="button"
              aria-label="View Resume"
              className="p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs flex items-center gap-1"
            >
              <FileText size={15} className="text-blue-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden pt-20 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between px-6 pb-8 border-b border-slate-800">
          <div className="space-y-2 mt-4">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
              Navigation
            </span>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>
              );
            })}
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              type="button"
              className="w-full py-3 rounded-xl text-sm font-medium bg-slate-900 text-slate-200 border border-slate-800 flex items-center justify-center gap-2"
            >
              <FileText size={16} className="text-blue-400" />
              <span>View & Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
            >
              <span>Let's Connect</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
