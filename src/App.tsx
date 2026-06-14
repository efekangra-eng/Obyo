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
import { AppDownload } from './components/AppDownload';
import { FeaturesGrid } from './components/FeaturesGrid';
import { RegistrationForm } from './components/RegistrationForm';
import { FAQSection } from './components/FAQSection';
import TradeGuide from './components/TradeGuide';

import { 
  ArrowRight, 
  MessageSquareCode, 
  ShieldCheck, 
  TrendingUp, 
  Wallet, 
  Coins, 
  Network,
  LayoutDashboard,
  Sparkles,
  UserPlus,
  Sun,
  Moon,
  BookOpen
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('TR'); // TR by default as requested, with EN swap
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isLight, setIsLight] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('obyo_theme_light');
      if (stored !== null) {
        return stored === 'true';
      }
    } catch(e) {}
    return true; // Default behavior
  });

  const [isPwa, setIsPwa] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'guide'>('home');

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setIsPwa(e.matches);
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    setIsPwa(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('obyo_theme_light', String(isLight));
    } catch(e) {}
    
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    const sections = ['platform-preview', 'features-section', 'registration-form'];
    sections.forEach(sec => {
      const el = document.getElementById(sec);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

      {/* 2. FLOATING OVAL NAVIGATION BAR */}
      <div className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[50] transition-all duration-500 w-[95%] max-w-5xl rounded-full border ${scrolled ? 'bg-neutral-900/60 backdrop-blur-xl border-white/10 shadow-2xl py-3 px-6' : 'bg-neutral-900/10 backdrop-blur-md border-white/5 py-4 px-6'}`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Anchor Left */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex items-center justify-center">
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 drop-shadow-md"
              >
                <path d="M50 0 L100 50 L75 50 L50 25 L25 50 L0 50 Z" fill="#FF6B00" />
                <path d="M0 50 L25 50 L50 75 L75 50 L100 50 L50 100 Z" fill="#FFAA00" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-medium text-lg leading-none tracking-tight text-white flex items-center gap-1">
                Obyo<span className="text-primary font-black">Trade</span>
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-white uppercase leading-none mt-1">
                OBYO GLOBAL
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
          </nav>

          {/* Secondary Controls - Right Side */}
          <div className="flex items-center gap-3">
            {/* Sliding Core Language Selector */}
            <LanguageSelector currentLang={lang} onChange={setLang} />
            
            {/* Primary Sign up Button */}
            <button
              id="header-cta-btn"
              onClick={() => scrollToSection('registration-form')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-display font-medium text-xs rounded-full shadow-md transition-colors active:scale-95 cursor-pointer"
            >
              <span>{t.nav.register}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* BOTTOM FLOATING ACTION BAR */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[50] transition-all duration-500 rounded-full border ${scrolled ? 'bg-neutral-900/80 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-neutral-900/40 backdrop-blur-md border-white/5'} p-1.5 flex items-center gap-2 shadow-lg`}>
        <button 
          onClick={() => { setCurrentView('home'); scrollToSection('platform-preview'); }} 
          className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeSection === 'platform-preview' && currentView === 'home' ? 'bg-white text-black shadow-md relative scale-110' : 'text-neutral-400 hover:text-white hover:bg-white/10'}`}
          title={lang === 'TR' ? 'Önizleme' : 'Preview'}
        >
          <LayoutDashboard className="w-5 h-5" />
        </button>
        <button 
          onClick={() => { setCurrentView('home'); scrollToSection('features-section'); }} 
          className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeSection === 'features-section' && currentView === 'home' ? 'bg-white text-black shadow-md relative scale-110' : 'text-neutral-400 hover:text-white hover:bg-white/10'}`}
          title={lang === 'TR' ? 'Yetenekler' : 'Features'}
        >
          <Sparkles className="w-5 h-5" />
        </button>
        <button
          onClick={() => { setCurrentView('home'); scrollToSection('registration-form'); }}
          className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeSection === 'registration-form' && currentView === 'home' ? 'bg-white text-black shadow-md relative scale-110' : 'text-neutral-400 hover:text-white hover:bg-white/10'}`}
          title={t.nav.register}
        >
          <UserPlus className="w-5 h-5" />
        </button>
        
        {isPwa && (
          <button
            onClick={() => setCurrentView('guide')}
            className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentView === 'guide' ? 'bg-white text-black shadow-md relative scale-110' : 'text-neutral-400 hover:text-white hover:bg-white/10'}`}
            title={lang === 'TR' ? 'Rehber' : 'Guide'}
          >
            <BookOpen className="w-5 h-5" />
          </button>
        )}

        <div className="w-[1px] h-6 bg-white/10 mx-1" />
        <button
          onClick={() => setIsLight(!isLight)}
          className="p-2.5 rounded-full transition-all duration-300 cursor-pointer text-neutral-400 hover:text-white hover:bg-white/10"
          title={lang === 'TR' ? 'Tema Değiştir' : 'Toggle Theme'}
        >
          {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>

      {/* 3. HERO & COUNTDOWN LANDING SPLASH */}
      {currentView === 'home' ? (
        <>
          <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-20 flex flex-col items-center">
        
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
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-200 text-black font-display font-medium text-sm rounded-xl transition-all duration-300 shadow-lg active:scale-98 cursor-pointer"
            >
              {t.hero.primaryCta}
            </button>
            <button
              id="hero-secondary-cta"
              onClick={() => scrollToSection('platform-preview')}
              className="w-full sm:w-auto px-8 py-4 bg-neutral-900/40 backdrop-blur-lg border border-white/10 hover:border-white/30 text-white font-display font-medium text-sm rounded-xl transition-all duration-300 hover:bg-neutral-800 shadow-md active:scale-98 cursor-pointer"
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

        {/* 5. PLATFORM PREVIEW - APP DOWNLOAD */}
        <div id="platform-preview" className="w-full">
          <AppDownload lang={lang} />
        </div>

        {/* 6. BENTO ADVANTAGES PORTAL */}
        <div id="features-section" className="w-full mt-8">
          <FeaturesGrid lang={lang} />
        </div>

        {/* 7. REVOLUTION WAITING CAPTURES SHEET */}
        <div id="registration-form" className="w-full">
          <RegistrationForm lang={lang} />
        </div>

        {/* Separator Section Lines */}
        <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-neutral-900/60 to-transparent my-12" />

        {/* 8. INTERACTIVE FAQ EXPANSIONS */}
        <div id="faq-section" className="w-full">
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
      </>
      ) : (
        <TradeGuide lang={lang} onAddClose={() => setCurrentView('home')} />
      )}

    </div>
  );
}
