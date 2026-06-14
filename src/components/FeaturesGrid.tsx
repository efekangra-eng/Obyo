/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../translations';
import { Language } from '../types';
import { Zap, ShieldAlert, Smartphone, Percent, TrendingUp } from 'lucide-react';

interface FeaturesGridProps {
  lang: Language;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="features-section" className="w-full relative py-16 px-4 select-none">
      
      {/* Background radial soft light blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section header heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Obyo Web Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight leading-tight">
            {t.features.sectionTitle}
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed">
            {t.features.sectionSubtitle}
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-left">
          
          {/* Card 1: Lightning Execution (Big 7 spans on PC) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-primary/30 transition-all duration-300"
          >
            {/* Top glowing bar */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-4 right-4 text-[10px] font-mono text-white bg-white/10 border border-white/20 px-2.5 py-0.5 rounded font-bold uppercase">
              30ms latency
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-white mb-2">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight">
                {t.features.lightningTitle}
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md font-sans">
                {t.features.lightningDesc}
              </p>
            </div>
            
            {/* Architectural Grid Line decorations */}
            <div className="mt-8 border-t border-neutral-900/80 pt-4 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>TCP PROTOCOL INTERGATION</span>
              <span>ENGINE: V3 SLICE v1.0.8</span>
            </div>
          </motion.div>

          {/* Card 2: Highest yields Payout (5 spans) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-12 lg:col-span-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-white mb-2">
                <Percent className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight">
                {t.features.payoutTitle}
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                {t.features.payoutDesc}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 border border-neutral-900 bg-neutral-950 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold max-w-max">
              <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-neutral-400">Yield Multiplier:</span>
              <span className="text-emerald-500 font-bold">1.95x Active</span>
            </div>
          </motion.div>

          {/* Card 3: Deep Custody Cold Storage (5 spans) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-white mb-2">
                <ShieldAlert className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight">
                {t.features.secureTitle}
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                {t.features.secureDesc}
              </p>
            </div>

            <div className="mt-8 border-t border-neutral-900/80 pt-4 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>HSM ENCRYPT KEYWORDS</span>
              <span>2FA SECURE SHELL</span>
            </div>
          </motion.div>

          {/* Card 4: Mobile and PC Seamless adapt (7 spans) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-7 rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-primary/30 transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-white mb-2">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight">
                {t.features.responsiveTitle}
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-lg font-sans">
                {t.features.responsiveDesc}
              </p>
            </div>

            <div className="mt-8 border-t border-neutral-900/80 pt-4 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>PWA DEPLOYABLE SHELL</span>
              <span>100% PC WEB STACKS READY</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
