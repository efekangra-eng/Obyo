import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface AiAnalyzerProps {
  lang: 'TR' | 'EN';
  onAddClose?: () => void;
}

const AiAnalyzer: React.FC<AiAnalyzerProps> = ({ lang }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = {
    TR: {
      title: 'Yapay Zeka Grafik Analizi',
      subtitle: 'Grafiğinizi yükleyin, yapay zekamız teknik analizinizi saniyeler içinde yapsın.',
      uploadBox: 'Grafik Görselini Buraya Yükleyin',
      uploadHint: 'Tıkla veya sürükle. PNG, JPG max 5MB',
      analyzing: 'Yapay Zeka Analiz Ediyor...',
      analyzeBtn: 'Grafiği Analiz Et',
      newAnalysis: 'Yeni Analiz',
      error: 'Bir hata oluştu.',
      resultsHead: 'Analiz Sonucu'
    },
    EN: {
      title: 'AI Chart Analysis',
      subtitle: 'Upload your chart, and our AI will run a technical analysis in seconds.',
      uploadBox: 'Upload Chart Image Here',
      uploadHint: 'Click or drag. PNG, JPG max 5MB',
      analyzing: 'AI is Analyzing...',
      analyzeBtn: 'Analyze Chart',
      newAnalysis: 'New Analysis',
      error: 'An error occurred.',
      resultsHead: 'Analysis Result'
    }
  };

  const content = t[lang];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError(lang === 'TR' ? 'Dosya boyutu çok büyük (Max 5MB).' : 'File size too large (Max 5MB).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target?.result as string);
      setAnalysisResult(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await fetch('/api/analyze-chart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: selectedImage, lang }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server error');
      }

      setAnalysisResult(data.analysis);
    } catch (err: any) {
      setError(err.message || content.error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetState = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-4xl mx-auto px-4 py-8 relative z-10 w-full min-h-[80vh] flex flex-col pt-32 pb-40"
    >
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-gold mb-6 tracking-tight flex justify-center items-center gap-4">
          <Sparkles className="w-10 h-10 text-primary" />
          {content.title}
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed">
          {content.subtitle}
        </p>
      </div>

      <div className="glass-panel border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden text-left bg-neutral-900/60 backdrop-blur-xl">
        {!selectedImage ? (
          <label 
            className="border-2 border-dashed border-white/10 hover:border-primary/50 transition-colors rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer group bg-neutral-950/30 w-full"
          >
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Upload className="w-8 h-8 text-neutral-400 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">{content.uploadBox}</h3>
            <p className="text-neutral-500 text-sm">{content.uploadHint}</p>
          </label>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 shrink-0 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 w-full bg-neutral-950/50 aspect-video flex items-center justify-center mb-4">
                <img src={selectedImage} alt="Chart Preview" className="max-w-full max-h-[300px] object-contain" />
              </div>
              
              {!analysisResult && (
                <div className="w-full flex gap-4">
                  <button
                    onClick={resetState}
                    disabled={isAnalyzing}
                    className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-neutral-400 hover:text-white transition-colors"
                  >
                    Kapat
                  </button>
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="flex-[2] flex items-center justify-center py-3 px-4 bg-primary hover:bg-orange-600 text-black font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 animate-spin" /> {content.analyzing}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5" /> {content.analyzeBtn}
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>

            {(analysisResult || error) && (
              <div className="flex-[1.5] border border-white/5 rounded-2xl p-6 bg-black/40 h-fit max-h-[600px] overflow-y-auto custom-scrollbar">
                {error ? (
                  <div className="flex items-center gap-3 text-red-400 mb-4 p-4 bg-red-400/10 rounded-xl border border-red-400/20">
                    <AlertCircle className="w-6 h-6 shrink-0" />
                    <p>{error}</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent-gold" />
                      {content.resultsHead}
                    </h3>
                    <div className="prose prose-invert prose-p:text-neutral-300 prose-headings:text-white prose-strong:text-accent-gold max-w-none text-sm md:text-base">
                      <div className="markdown-body">
                        <ReactMarkdown>{analysisResult}</ReactMarkdown>
                      </div>
                    </div>
                  </>
                )}
                
                <button
                  onClick={resetState}
                  className="mt-8 w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-all border border-white/5"
                >
                  <RefreshCw className="w-4 h-4" />
                  {content.newAnalysis}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AiAnalyzer;
