import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading...');

  const loadingMessages = [
    'Preparing your journey...',
    'Loading Sikkim\'s heritage...',
    'Connecting to monasteries...',
    'Gathering cultural treasures...',
    'Almost ready...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mountain Silhouettes */}
          <div className="absolute bottom-0 left-0 w-full h-1/3">
            <svg
              viewBox="0 0 1200 300"
              className="w-full h-full opacity-20"
              fill="currentColor"
            >
              <path
                d="M0,200 L100,150 L200,180 L300,120 L400,140 L500,100 L600,130 L700,90 L800,110 L900,80 L1000,100 L1100,70 L1200,90 L1200,300 L0,300 Z"
                fill="white"
              />
              <path
                d="M0,220 L150,170 L300,200 L450,140 L600,160 L750,120 L900,140 L1050,100 L1200,120 L1200,300 L0,300 Z"
                fill="white"
                opacity="0.7"
              />
            </svg>
          </div>

          {/* Floating Prayer Flags */}
          <div className="absolute top-10 left-1/4 w-2 h-16 bg-gradient-to-b from-orange-400 to-red-500 opacity-60 animate-pulse" />
          <div className="absolute top-20 right-1/3 w-2 h-20 bg-gradient-to-b from-orange-400 to-red-500 opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-16 left-2/3 w-2 h-18 bg-gradient-to-b from-orange-400 to-red-500 opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          {/* TEA Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.6 }}
            className="mb-8"
          >
            <div className="relative">
              {/* Outer Circle */}
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-orange-300 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 shadow-2xl">
                {/* Inner Circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  {/* Tea Leaf Symbol */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-white text-2xl font-bold"
                  >
                    T
                  </motion.div>
                </div>
              </div>
              
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-orange-400 border-dashed"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            TEA
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-orange-200 mb-8 font-medium"
          >
            Sikkim's Digital Heritage Tours
          </motion.p>

          {/* Loading Text */}
          <motion.div
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-orange-100 text-lg mb-6 min-h-[1.5rem]"
          >
            {loadingText}
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 mx-auto mb-4">
            <div className="h-2 bg-orange-900/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-orange-200 text-sm"
          >
            {progress}%
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-orange-300 rounded-full opacity-60" />
          <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-orange-300 rounded-full opacity-60" />
          <div className="absolute top-1/2 -left-8 w-4 h-4 bg-orange-300 rounded-full opacity-40" />
          <div className="absolute top-1/3 -right-6 w-3 h-3 bg-orange-300 rounded-full opacity-40" />
        </div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-300 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
