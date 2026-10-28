import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center gap-2 p-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isDark
          ? 'bg-slate-900/80 text-amber-300 hover:text-amber-200 hover:bg-slate-800 border border-slate-800'
          : 'bg-slate-100 text-blue-600 hover:text-blue-700 hover:bg-slate-200 border border-slate-200 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun size={16} className="transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon size={16} className="transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-medium font-mono">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};
