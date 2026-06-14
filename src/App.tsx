/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from './types';
import { translations } from './translations';
import { LanguageSelector } from './components/LanguageSelector';
import { CountdownTimer } from './components/CountdownTimer';
import { PlatformPreview } from './components/PlatformPreview';
import { FeaturesGrid } from './components/FeaturesGrid';
import { RegistrationForm } from './components/RegistrationForm';
import { FAQSection } from './components/FAQSection';

import { 
  ArrowRight, 
  MessageSquareCode, 
  ShieldCheck, 
  TrendingUp, 
  Wallet, 
  Coins, 
  Network
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('TR'); // TR by default as requested, with EN swap

  const t = translations[lang];

  // Dynamic scroll helper to target specific IDs smoothly
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="obyo-app-root" className="min-h-screen bg-background-black text-gray-100 font-sans relative overflow-x-hidden selection:bg-primary selection:text-black">
      
      {/* 1. ARCHITECTURAL CYBER-GRID DECORATION (Static Grid Backdrop) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        
        {/* Glowing Ambient Radial Lights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute top-[800px] right-1/4 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[300px] left-10 w-[450px] h-[450px] bg-primary/4 rounded-full blur-[120px]" />

        {/* CSS Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6B0006_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0006_1px,transparent_1px)] bg-[size:4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80" />
      </div>

      {/* 2. STICKY BLURRED CORE NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-900/60 bg-background-black/65 backdrop-blur-md select-none transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Brand Logo Anchor Left */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/logo.png" 
              alt="Obyo Logo" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23FF6B00'/%3E%3Ctext x='50' y='70' font-size='60' font-family='Arial' font-weight='bold' fill='white' text-anchor='middle'%3EO%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="flex flex-col text-left">
              <span className="font-display font-medium text-lg leading-none tracking-tight text-white flex items-center gap-1">
                Obyo<span className="text-primary font-black">Trade</span>
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#FFAA00]/85 uppercase leading-none mt-1">
                WEB TERMINAL
              </span>
            </div>
          </div>

          {/* Nav Anchors - Center on PC */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wide uppercase text-neutral-400">
            <button 
              id="nav-link-demo"
              onClick={() => scrollToSection('platform-preview')} 
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {t.nav.interactiveDemo}
            </button>
            <button 
              id="nav-link-features"
              onClick={() => scrollToSection('features-section')} 
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {lang === 'TR' ? 'Yetenekler' : 'Features'}
            </button>
            <button 
              id="nav-link-faq"
              onClick={() => scrollToSection('faq-section')} 
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {t.faq.sectionTitle}
            </button>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            <span className="text-[10px] font-mono tracking-widest text-[#FF8A00] font-black">
              {t.nav.comingSoon}
            </span>
          </nav>

          {/* Secondary Controls - Right Side */}
          <div className="flex items-center gap-3">
            {/* Sliding Core Language Selector */}
            <LanguageSelector currentLang={lang} onChange={setLang} />
            
            {/* Primary Sign up Button */}
            <button
              id="header-cta-btn"
              onClick={() => scrollToSection('registration-form')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-hover text-black font-display font-bold uppercase text-xs rounded-full shadow-md shadow-primary/10 transition-colors active:scale-95 cursor-pointer"
            >
              <span>{t.nav.register}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </header>

      {/* 3. HERO & COUNTDOWN LANDING SPLASH */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-20 flex flex-col items-center">
        
        {/* Marketing Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-neutral-950 border border-[#FF6B00]/25 rounded-full text-[10px] sm:text-xs font-mono font-black tracking-widest text-primary mb-6 shadow-sm shadow-primary/5 uppercase leading-none"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>{t.hero.badge}</span>
        </motion.div>

        {/* Mega Page Headline Title */}
        <div className="text-center max-w-4xl select-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-white tracking-tight leading-[1.08] flex flex-col pt-1"
          >
            <span>{t.hero.titleFirst}</span>
            <span className="bg-gradient-to-r from-[#FF9F00] via-[#FF5C00] to-[#FF1E00] bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,107,0,0.1)] py-2 font-black">
              {t.hero.titleHighlight}
            </span>
            <span>{t.hero.titleSecond}</span>
          </motion.h1>

          {/* Modern Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Action Cta Controls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <button
              id="hero-primary-cta"
              onClick={() => scrollToSection('registration-form')}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#FF3D00] hover:from-[#FFAA00] hover:to-[#FF6B00] text-black font-display font-black uppercase text-xs tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-[#FF6B00]/15 hover:shadow-[#FF6B00]/25 active:scale-98 cursor-pointer"
            >
              {t.hero.primaryCta}
            </button>
            <button
              id="hero-secondary-cta"
              onClick={() => scrollToSection('platform-preview')}
              className="w-full sm:w-auto px-8 py-3.5 bg-neutral-950 border border-neutral-850 hover:border-neutral-700 text-white font-display font-bold uppercase text-xs tracking-wider rounded-xl transition-all duration-300 hover:bg-neutral-900 shadow-md active:scale-98 cursor-pointer"
            >
              {t.hero.secondaryCta}
            </button>
          </motion.div>

          {/* Real-time waiting list queue pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-5 flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono text-neutral-500"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span>{t.hero.activeUsersBadge}</span>
          </motion.div>
        </div>

        {/* 4. CHRONO-METER LAUNCH TIMER MODULE */}
        <div className="w-full mt-16 max-w-4xl mx-auto">
          <CountdownTimer lang={lang} />
        </div>

        {/* Separator Section Lines */}
        <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-neutral-900/60 to-transparent my-16" />

        {/* 5. PLATFORM PREVIEW - MOBILE MOCKUP */}
        <div className="w-full">
          <PlatformPreview lang={lang} />
        </div>

        {/* 6. BENTO ADVANTAGES PORTAL */}
        <div className="w-full mt-8">
          <FeaturesGrid lang={lang} />
        </div>

        {/* 7. REVOLUTION WAITING CAPTURES SHEET */}
        <div className="w-full">
          <RegistrationForm lang={lang} />
        </div>

        {/* Separator Section Lines */}
        <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-neutral-900/60 to-transparent my-12" />

        {/* 8. INTERACTIVE FAQ EXPANSIONS */}
        <div className="w-full">
          <FAQSection lang={lang} />
        </div>

      </main>

      {/* 9. DETAILED TRADING DISCLOSURES FOOTER */}
      <footer id="footer-section" className="relative z-10 border-t border-neutral-900 bg-neutral-999 select-none py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Secure transaction network badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 text-[11px] font-mono text-neutral-500 select-none">
            <div className="flex items-center gap-1.5 bg-neutral-950 border border-neutral-900 px-3 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>SSL SHIELD COMPLIANT</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-950 border border-neutral-900 px-3 py-1 rounded-md">
              <Wallet className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>COLD CUSTODY WALLETS</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-950 border border-neutral-900 px-3 py-1 rounded-md">
              <Coins className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>TRC20 / ERC20 TETHERS</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-950 border border-neutral-900 px-3 py-1 rounded-md">
              <Network className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>30ms NODE CHANNELS</span>
            </div>
          </div>

          {/* Main detailed regulatory risk warnings */}
          <div className="border border-neutral-900 bg-neutral-950/40 rounded-xl p-5 md:p-6 max-w-4xl text-left">
            <h5 className="text-[#FF8A00] font-display font-black text-xs md:text-sm tracking-widest uppercase mb-2">
              ⚠️ {t.footer.riskWarningTitle}
            </h5>
            <p className="text-[10px] md:text-xs text-neutral-400 font-sans leading-relaxed">
              {t.footer.riskWarningText}
            </p>
          </div>

          {/* Copyright and signature lines */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 w-full border-t border-neutral-900 pt-6 text-[10px] font-mono text-neutral-500 max-w-4xl select-none">
            
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-white px-1 relative">Obyo</span>
              <span>{t.footer.allRightsReserved}</span>
            </div>

            <div className="text-right flex items-center gap-3">
              <span>{t.footer.tradeSecures}</span>
            </div>

          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-4 mt-6 text-neutral-600 hover:text-neutral-500 transition-colors select-none">
            <a href="#telegram" className="hover:text-primary transition-all duration-300 transform scale-90 hover:scale-100">
              <MessageSquareCode className="w-5 h-5" />
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
