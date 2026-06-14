/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../translations';
import { Language, UserSubscription } from '../types';
import { HeartHandshake, CheckCircle2, UserCheck, Mail, ClipboardCheck, Trophy } from 'lucide-react';

interface RegistrationFormProps {
  lang: Language;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ lang }) => {
  const t = translations[lang];

  // Form input states
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('RETAIL');

  // Error/validation states
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  // Registration persistence state
  const [registeredUser, setRegisteredUser] = useState<UserSubscription | null>(null);

  // Load persistent user registration on load
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('obyo_user_registration');
      if (savedUser) {
        setRegisteredUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error('Error parsing localStorage subscription:', e);
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field check guards
    if (!name.trim() || !email.trim()) {
      setErrorMsg(t.register.requiredErr);
      return;
    }

    // Email format validator
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg(t.register.invalidEmailErr);
      return;
    }

    // Double check if already registered in simulated queue
    const queueStartNum = 1424; // Static benchmark starting priority queue
    const randomOffset = Math.floor(Math.random() * 25) + 3;
    const finalQueueNumber = queueStartNum + randomOffset;

    const newSubscriber: UserSubscription = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role,
      queueNum: finalQueueNumber
    };

    try {
      localStorage.setItem('obyo_user_registration', JSON.stringify(newSubscriber));
      setRegisteredUser(newSubscriber);
    } catch (e) {
      console.error('LocalStorage write failed:', e);
      // Fallback update
      setRegisteredUser(newSubscriber);
    }
  };

  const handleUnsubscribe = () => {
    try {
      localStorage.removeItem('obyo_user_registration');
      setRegisteredUser(null);
      setName('');
      setEmail('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="registration-form" className="w-full relative py-12 px-4 select-none">
      <div className="max-w-xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl p-6 md:p-8 relative overflow-hidden hover:border-white/20 transition-all duration-300">
        
        {/* Decorative glass edge glow */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <AnimatePresence mode="wait">
          {!registeredUser ? (
            <motion.div
              key="subscription-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight leading-tight">
                {t.register.title}
              </h2>
              <p className="mt-3 text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
                {t.register.subtitle}
              </p>

              {/* Form elements */}
              <form onSubmit={handleFormSubmit} className="mt-8 flex flex-col gap-4 text-left">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-neutral-450">
                    {t.register.placeholderName}
                  </label>
                  <div className="flex items-center border border-neutral-800 bg-neutral-950/80 rounded-xl px-3 focus-within:border-primary/50 transition-colors">
                    <UserCheck className="w-4 h-4 text-neutral-500 shrink-0" />
                    <input
                      id="sub-name-input"
                      type="text"
                      className="w-full bg-transparent border-none text-white px-3 py-2.5 text-sm focus:outline-none placeholder-neutral-600"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-neutral-450">
                    {t.register.placeholderEmail}
                  </label>
                  <div className="flex items-center border border-neutral-800 bg-neutral-950/80 rounded-xl px-3 focus-within:border-primary/50 transition-colors">
                    <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                    <input
                      id="sub-email-input"
                      type="email"
                      className="w-full bg-transparent border-none text-white px-3 py-2.5 text-sm focus:outline-none placeholder-neutral-600"
                      placeholder="e.g. contact@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Trader Type Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-neutral-450">
                    {t.register.roleLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'RETAIL', name: t.register.roleRetail },
                      { id: 'VIP', name: t.register.roleVip },
                      { id: 'AFFILIATE', name: t.register.rolePartner }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        id={`role-opt-${item.id}`}
                        onClick={() => setRole(item.id)}
                        className={`py-2 px-3 text-xs bg-black/40 rounded-xl border font-medium text-center transition-all ${
                          role === item.id
                            ? 'border-white bg-white/10 text-white font-bold shadow-md shadow-white/5'
                            : 'border-white/5 text-neutral-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Validation warnings */}
                {errorMsg && (
                  <motion.p
                    id="form-error-alert"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs font-semibold uppercase tracking-wide font-mono mt-1 text-center"
                  >
                    ⚠ {errorMsg}
                  </motion.p>
                )}

                {/* Submit Trigger btn */}
                <button
                  type="submit"
                  id="form-submit-btn"
                  className="w-full mt-2 py-3 bg-white hover:bg-neutral-200 text-black font-display font-bold uppercase text-sm rounded-xl transition-all duration-300 hover:shadow-lg active:scale-[0.99] cursor-pointer"
                >
                  {t.register.ctaButton}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 animate-pulse">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-mono font-bold tracking-widest uppercase">
                {lang === 'TR' ? 'SIRA AYRILDI' : 'QUEUE SECURED'}
              </span>

              <h2 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight mt-4">
                {t.register.successMessage}
              </h2>
              <p className="mt-2 text-xs text-neutral-400 font-sans px-4">
                {lang === 'TR' 
                  ? `${registeredUser.name}, ön başvurunuz başarıyla 1. dereceden sisteme işlendi. Lansman öncesi e-posta doğrulaması için kutunuzu kontrol edin.`
                  : `Greetings ${registeredUser.name}, your initial prioritized allocation has been fully logged. Check your inbox for upcoming launch requirements.`}
              </p>

              {/* Secure Queue Number Display Card */}
              <div className="mt-6 border border-neutral-900 bg-neutral-950/80 py-5 px-4 rounded-xl relative overflow-hidden select-all">
                <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
                  <Trophy className="w-16 h-16 text-white" />
                </div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500 block">
                  {t.register.queueNumber}
                </span>
                <span className="text-emerald-500 font-mono text-3xl font-black mt-1.5 block tracking-tight glow-orange-text filter drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                  #{registeredUser.queueNum}
                </span>

                <div className="grid grid-cols-2 gap-2 mt-4 text-[10px] font-mono border-t border-neutral-900/60 pt-3 text-left">
                  <div className="text-neutral-500 uppercase">
                    USER EMAIL:
                  </div>
                  <div className="text-neutral-300 font-semibold truncate text-right">
                    {registeredUser.email}
                  </div>
                  <div className="text-neutral-500 uppercase">
                    ALLOCATED BENEFIT:
                  </div>
                  <div className="text-white font-bold text-right">
                    100% DOUBLE MATCH
                  </div>
                </div>
              </div>

              {/* Reset registration switch in footer */}
              <button
                id="reset-queue-btn"
                onClick={handleUnsubscribe}
                className="mt-6 text-[10px] font-mono text-neutral-500 hover:text-white transition-colors uppercase underline cursor-pointer"
              >
                {lang === 'TR' ? 'Bilgileri Temizle / Yeni Kayıt' : 'Clear Info / New Sign-up'}
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
