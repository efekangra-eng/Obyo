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
      <div id="countdown" className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 w-full max-w-2xl px-2">
        {timeBlocks.map((block, idx) => (
          <React.Fragment key={block.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[80px]"
            >
              <div className="relative font-mono font-light text-4xl sm:text-6xl md:text-[5rem] text-white flex justify-center tracking-tighter leading-none mb-2">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={block.value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="text-white filter drop-shadow-lg"
                  >
                    {formatNum(block.value)}
                  </motion.span>
                </AnimatePresence>
              </div>

              <span className="mt-1 text-[9px] sm:text-[11px] font-semibold font-display tracking-[0.2em] text-neutral-500 uppercase">
                {block.label}
              </span>
            </motion.div>
            {idx < timeBlocks.length - 1 && (
              <div className="text-3xl sm:text-5xl text-white/20 font-light pb-6 animate-pulse">
                :
              </div>
            )}
          </React.Fragment>
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
