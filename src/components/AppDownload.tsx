/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../translations';
import { Language } from '../types';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

interface AppDownloadProps {
  lang: Language;
}

export const AppDownload: React.FC<AppDownloadProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="platform-preview" className="w-full relative py-20 px-4 select-none flex flex-col items-center">
      
      {/* Background glass blur elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl mx-auto rounded-[2.5rem] bg-neutral-900/30 backdrop-blur-2xl border border-white/10 p-10 md:p-16 text-center shadow-2xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-full text-xs font-mono font-bold tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span>{lang === 'TR' ? 'Her Yerde Seninle' : 'Everywhere With You'}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-6">
          {lang === 'TR' ? 'Tercih Ettiğiniz Ortamda' : 'In Your Preferred Environment'}
        </h2>
        
        <p className="mt-4 text-sm md:text-lg text-neutral-400 max-w-xl mx-auto font-sans leading-relaxed mb-12">
          {lang === 'TR' 
            ? 'Web tabanlı güçlü altyapımız ile hiçbir uygulama indirmeden erişin. Veya yakında App Store ve Google Play üzerinden yerel deneyimi yaşayın.'
            : 'Access our powerful web-based infrastructure without downloading any apps. Or experience our native apps soon on the App Store and Google Play.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center text-left w-full sm:w-[220px] px-6 py-3.5 bg-neutral-950/80 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-neutral-900 transition-all duration-300 rounded-2xl text-white group cursor-not-allowed">
            <div className="w-10 flex items-center justify-center shrink-0 mr-3">
              <FaApple className="w-9 h-9 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col items-start leading-none gap-1 shrink-0 mt-0.5">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{lang === 'TR' ? 'Yakında' : 'Coming Soon'}</span>
              <span className="font-display font-medium text-base">App Store</span>
            </div>
          </button>
          
          <button className="flex items-center text-left w-full sm:w-[220px] px-6 py-3.5 bg-neutral-950/80 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-neutral-900 transition-all duration-300 rounded-2xl text-white group cursor-not-allowed">
            <div className="w-10 flex items-center justify-center shrink-0 mr-3">
              <FaGooglePlay className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col items-start leading-none gap-1 shrink-0 mt-0.5">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{lang === 'TR' ? 'Yakında' : 'Coming Soon'}</span>
              <span className="font-display font-medium text-base">Google Play</span>
            </div>
          </button>
        </div>
      </motion.div>

    </section>
  );
};
