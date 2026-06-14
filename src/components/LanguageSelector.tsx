/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLang: Language;
  onChange: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onChange,
}) => {
  return (
    <div
      id="language-selector-container"
      className="flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 rounded-full px-3 py-1.5 shadow-md shadow-black/20"
    >
      <Globe className="w-4 h-4 text-primary shrink-0 opacity-80" />
      <div className="relative flex items-center gap-1">
        {(['TR', 'EN'] as Language[]).map((lang) => {
          const isActive = currentLang === lang;
          return (
            <button
              key={lang}
              id={`lang-btn-${lang}`}
              onClick={() => onChange(lang)}
              className={`relative px-2.5 py-0.5 text-xs font-mono font-bold uppercase transition-colors duration-300 z-10 rounded-full ${
                isActive ? 'text-black' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-lang-bg"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {lang}
            </button>
          );
        })}
      </div>
    </div>
  );
};
