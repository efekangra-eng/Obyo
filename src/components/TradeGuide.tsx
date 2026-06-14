import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, Activity, Target } from 'lucide-react';

interface TradeGuideProps {
  lang: 'TR' | 'EN';
  onAddClose?: () => void; // Keep prop type to avoid typescript errors in parent if still passed
}

const stepsTR = [
  {
    title: 'Varlık Seçin',
    desc: 'İşlem yapmak istediğiniz kripto para birimini, hisse senedini veya döviz çiftini seçin. Sistemimiz gerçek zamanlı, gecikmesiz piyasa verileri sağlar.',
    icon: Activity,
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'Yön Belirleyin',
    desc: 'Fiyatın yukarı (Yükseliş) mi yoksa aşağı (Düşüş) mü gideceğini tahmin edin. Grafikleri ve teknik göstergeleri analiz edin.',
    icon: Target,
    color: 'text-accent-gold',
    bg: 'bg-accent-gold/10'
  },
  {
    title: 'Vade ve Tutar Belirleyin',
    desc: 'İşleminizin ne kadar süreceğini ve ne kadar yatırım yapacağınızı seçin. 1 dakika ile 1 ay arasında vade seçenekleri mevcuttur.',
    icon: Clock,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Sonucu Bekleyin',
    desc: 'Vade dolduğunda fiyat tahmininiz doğruysa saniyeler içerisinde %95\'e varan getiri elde edersiniz.',
    icon: TrendingUp,
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  }
];

const stepsEN = [
  {
    title: 'Select an Asset',
    desc: 'Choose the cryptocurrency, stock, or currency pair you want to trade. Our system provides real-time, lag-free market data.',
    icon: Activity,
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'Determine Direction',
    desc: 'Predict whether the price will go up (Call) or down (Put). Analyze charts and technical indicators.',
    icon: Target,
    color: 'text-accent-gold',
    bg: 'bg-accent-gold/10'
  },
  {
    title: 'Set Expiry and Amount',
    desc: 'Select how long your trade will last and how much you will invest. Expiry options range from 1 minute to 1 month.',
    icon: Clock,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Wait for the Result',
    desc: 'If your price prediction is correct when the expiry is reached, you get up to 95% return in seconds.',
    icon: TrendingUp,
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  }
];

const TradeGuide: React.FC<TradeGuideProps> = ({ lang }) => {
  const isTR = lang === 'TR';
  const steps = isTR ? stepsTR : stepsEN;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-3xl mx-auto px-4 py-8 relative z-10 w-full min-h-[80vh] flex flex-col pt-32 pb-40"
    >
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
          {isTR ? 'Nasıl İşlem Açılır?' : 'How to Trade?'}
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed">
          {isTR 
            ? 'Sıfırdan zirveye profesyonel yatırım deneyimi. Yalnızca 4 adımda ilk işleminizi açın.'
            : 'Professional trading experience from scratch. Open your first trade in just 4 steps.'}
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="flex items-start gap-6 group"
            >
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 ${step.bg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className={`w-7 h-7 ${step.color}`} />
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-[2px] h-full min-h-[4rem] bg-gradient-to-b from-white/10 to-transparent mt-4 rounded-full" />
                )}
              </div>
              
              <div className="pt-2 pb-8">
                <h3 className="text-2xl font-display font-semibold text-white mb-3 flex items-center gap-3">
                  <span className="text-sm font-medium px-2.5 py-1 rounded-md bg-white/5 text-neutral-400 border border-white/5">
                    {isTR ? 'Adım' : 'Step'} {index + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-lg max-w-lg">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TradeGuide;
