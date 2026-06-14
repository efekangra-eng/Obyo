/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../translations';
import { Language } from '../types';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq-section" className="w-full relative py-12 px-4 select-none">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/20 text-[#FF8A00] rounded-full text-[10px] font-mono font-bold uppercase tracking-wider mb-2 animate-pulse">
            <HelpCircle className="w-3 h-3 text-[#FF8A00]" />
            <span>Support Core</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight leading-tight">
            {t.faq.sectionTitle}
          </h2>
          <p className="mt-2 text-xs md:text-sm text-neutral-400 max-w-lg mx-auto font-sans">
            {t.faq.sectionSubtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-900 bg-neutral-950/60 overflow-hidden transition-colors hover:border-neutral-800"
              >
                {/* Accordion header button */}
                <button
                  type="button"
                  id={`faq-hdr-${idx}`}
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 p-4 font-display font-medium text-white text-sm md:text-base cursor-pointer hover:bg-neutral-900/40 transition-colors"
                >
                  <span className={`${isOpen ? 'text-primary' : 'text-neutral-200'} transition-colors`}>
                    {item.q}
                  </span>
                  <span className={`p-1 bg-neutral-900 rounded-lg text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary bg-primary/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Animated expandable body height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-body-${idx}`}
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-neutral-900 px-4 py-4 text-xs md:text-sm text-neutral-400 leading-relaxed font-sans bg-neutral-950/30">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
