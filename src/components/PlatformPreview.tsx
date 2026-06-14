/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { translations } from '../translations';
import { Language } from '../types';
import { Maximize, Apple } from 'lucide-react';

interface PlatformPreviewProps {
  lang: Language;
}

export const PlatformPreview: React.FC<PlatformPreviewProps> = ({ lang }) => {
  const t = translations[lang];
  const [imageError, setImageError] = useState(false);

  return (
    <section id="platform-preview" className="w-full relative py-16 px-4 select-none flex flex-col items-center">
      
      {/* Background glass blur elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center mb-10 z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full text-[10px] font-mono font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
          <Apple className="w-3.5 h-3.5" />
          <span>Web Terminal Preview</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight leading-tight">
          {lang === 'TR' ? 'Sınırsız Web Deneyimi' : 'Limitless Web Experience'}
        </h2>
        <p className="mt-3 text-sm md:text-base text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed">
          {lang === 'TR' 
            ? 'Uygulama indirmeye gerek kalmadan, doğrudan tarayıcınız üzerinden profesyonel terminal arayüzüne erişim.'
            : 'Access professional terminal interfaces directly via your browser, without needing to download apps.'}
        </p>
      </div>

      {/* iPhone Glass Mockup Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] mx-auto rounded-[3rem] p-2.5 sm:p-3 bg-neutral-900/30 backdrop-blur-xl shadow-2xl shadow-primary/20 border border-neutral-700/50"
      >
        {/* Hardware details - Top notch / dynamic island area */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-between px-2">
           <div className="w-2 h-2 rounded-full bg-neutral-800 ml-1"></div>
           <div className="w-2 h-2 rounded-full bg-blue-900/50"></div>
        </div>
        
        {/* iPhone physical buttons */}
        <div className="absolute top-28 -left-1 w-1 h-12 bg-neutral-800 rounded-l-md" />
        <div className="absolute top-44 -left-1 w-1 h-12 bg-neutral-800 rounded-l-md" />
        <div className="absolute top-32 -right-1 w-1 h-16 bg-neutral-800 rounded-r-md" />

        {/* Inner Screen Area */}
        <div className="relative w-full aspect-[9/19.5] rounded-[2.2rem] overflow-hidden bg-black border border-white/5 shadow-2xl">
          
          {/* Status bar mock */}
          <div className="absolute top-0 inset-x-0 h-6 z-10 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

          {/* Actual image content */}
          {!imageError ? (
             <img 
               src="/app-screenshot.png" 
               alt="Platform interface preview" 
               className="w-full h-full object-cover"
               onError={() => setImageError(true)}
             />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-900 border border-neutral-800">
               <Maximize className="w-8 h-8 text-neutral-600 mb-3" />
               <p className="text-xs text-neutral-500 font-mono">
                 {lang === 'TR' ? 'Önizleme görseli public/app-screenshot.png konumunda bulunamadı. Lütfen sağlanan ekran görüntüsünü yükleyin.' : 'Preview image not found at public/app-screenshot.png. Please upload the provided screenshot.'}
               </p>
            </div>
          )}
        </div>

        {/* Ambient bottom reflection */}
        <div className="absolute -bottom-10 inset-x-10 h-10 bg-primary/20 blur-xl rounded-full" />
      </motion.div>

    </section>
  );
};
