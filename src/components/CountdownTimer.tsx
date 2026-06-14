/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../translations';
import { Language } from '../types';
import { ShieldCheck, CalendarRange } from 'lucide-react';

interface CountdownTimerProps {
  lang: Language;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ lang }) => {
  // Target date: July 15, 2026 00:00:00 UTC+3 (Turkish timezone standard)
  const calculateTimeLeft = (): TimeLeft => {
    // Current time from server is 2026-06-13, we hardcode July 15, 2026 Target
    const targetDate = new Date('2026-07-15T00:00:00+03:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const t = translations[lang];

  // Helper to render dual-digits elegantly
  const formatNum = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const timeBlocks = [
    { label: t.countdown.days, value: timeLeft.days, id: 'days' },
    { label: t.countdown.hours, value: timeLeft.hours, id: 'hours' },
    { label: t.countdown.minutes, value: timeLeft.minutes, id: 'mins' },
    { label: t.countdown.seconds, value: timeLeft.seconds, id: 'secs' },
  ];

  return (
    <div id="countdown-block-container" className="w-full flex flex-col items-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 mb-4 text-xs font-mono font-bold tracking-widest text-[#FF8A00] bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full"
      >
        <CalendarRange className="w-4.5 h-4.5 animate-pulse text-[#FF8A00]" />
        <span>{t.countdown.remainingTime}</span>
      </motion.div>

      {/* Grid count display */}
      <div id="countdown" className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-2xl px-2">
        {timeBlocks.map((block, idx) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-3 sm:p-5 flex flex-col items-center justify-center glow-orange/10 backdrop-blur-md"
          >
            {/* Top glass lighting accent */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent" />

            <div className="relative font-mono font-black text-3xl sm:text-5xl md:text-6xl text-primary flex justify-center tracking-tight min-w-[50px] leading-tight">
              {/* Animation on number change */}
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={block.value}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="bg-gradient-to-b from-[#FFAA00] to-[#FF4500] bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,107,0,0.15)] font-bold font-mono"
                >
                  {formatNum(block.value)}
                </motion.span>
              </AnimatePresence>
            </div>

            <span className="mt-2 text-[10px] sm:text-xs font-bold font-display tracking-widest text-neutral-400">
              {block.label}
            </span>
          </motion.div>
        ))}
      </div>

      {timeLeft.isCompleted ? (
        <motion.div
          id="launch-completed-alert"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/10 text-emerald-400 font-medium text-sm flex items-center gap-2"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-400 animate-spin" />
          <span>Obyo Trade is LIVE! Launching operations now.</span>
        </motion.div>
      ) : (
        <p className="mt-5 text-xs text-neutral-500 text-center flex items-center gap-2 font-mono">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          {t.countdown.readyAlert}
        </p>
      )}
    </div>
  );
};
