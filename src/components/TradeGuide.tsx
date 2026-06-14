import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, TrendingDown, Clock, Activity } from 'lucide-react';

interface TradeGuideProps {
  onAddClose?: () => void;
  lang: 'TR' | 'EN';
}

const TradeGuide: React.FC<TradeGuideProps> = ({ onAddClose, lang }) => {
  const t = {
    TR: {
      title: 'Nasıl İşlem Açılır?',
      subtitle: 'Platformumuzda işlem açmak çok basittir, aşağıdaki adımları izleyin.',
      step1Title: '1. Varlık Seçin',
      step1Desc: 'İşlem yapmak istediğiniz kripto para birimini, hisse senedini veya döviz çiftini seçin. Sistemimiz gerçek zamanlı, gecikmesiz piyasa verileri sağlar.',
      step2Title: '2. Yön Belirleyin',
      step2Desc: 'Fiyatın yukarı (Yükseliş) mi yoksa aşağı (Düşüş) mü gideceğini tahmin edin. Grafikleri ve teknik göstergeleri analiz edin.',
      step3Title: '3. Vade ve Tutar Belirleyin',
      step3Desc: 'İşleminizin ne kadar süreceğini ve ne kadar yatırım yapacağınızı seçin. 1 dakika ile 1 ay arasında vade seçenekleri mevcuttur.',
      step4Title: '4. Sonucu Bekleyin',
      step4Desc: 'Vade dolduğunda fiyat tahmininiz doğruysa saniyeler içerisinde %95\'e varan getiri elde edersiniz.',
      back: 'Geri Dön'
    },
    EN: {
      title: 'How to Trade?',
      subtitle: 'Opening a trade on our platform is simple, just follow these steps.',
      step1Title: '1. Select an Asset',
      step1Desc: 'Choose the cryptocurrency, stock, or currency pair you want to trade. Our system provides real-time, lag-free market data.',
      step2Title: '2. Determine Direction',
      step2Desc: 'Predict whether the price will go up (Call) or down (Put). Analyze charts and technical indicators.',
      step3Title: '3. Set Expiry and Amount',
      step3Desc: 'Select how long your trade will last and how much you will invest. Expiry options range from 1 minute to 1 month.',
      step4Title: '4. Wait for the Result',
      step4Desc: 'If your price prediction is correct when the expiry is reached, you get up to 95% return in seconds.',
      back: 'Go Back'
    }
  };

  const content = t[lang];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-4xl mx-auto px-4 py-8 relative z-10 w-full min-h-[80vh] flex flex-col pt-32"
    >
      {onAddClose && (
        <button 
          onClick={onAddClose}
          className="self-start mb-6 flex items-center gap-2 text-neutral-400 hover:text-white transition-colors glass-panel border border-white/5 rounded-full px-4 py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{content.back}</span>
        </button>
      )}

      <div className="glass-panel border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-left">
        {/* Decorative Grid inside Guide */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">
            {content.title}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="glass-card bg-neutral-900/40 border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{content.step1Title}</h3>
            <p className="text-neutral-400 leading-relaxed">{content.step1Desc}</p>
          </div>

          <div className="glass-card bg-neutral-900/40 border border-white/5 p-6 rounded-2xl hover:border-accent-gold/30 transition-colors group">
            <div className="flex gap-2 mb-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{content.step2Title}</h3>
            <p className="text-neutral-400 leading-relaxed">{content.step2Desc}</p>
          </div>

          <div className="glass-card bg-neutral-900/40 border border-white/5 p-6 rounded-2xl hover:border-blue-500/30 transition-colors group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{content.step3Title}</h3>
            <p className="text-neutral-400 leading-relaxed">{content.step3Desc}</p>
          </div>

          <div className="glass-card bg-neutral-900/40 border border-white/5 p-6 rounded-2xl md:col-span-2 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">{content.step4Title}</h3>
            <p className="text-neutral-400 leading-relaxed text-center md:text-left">{content.step4Desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TradeGuide;
