import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#0b041a] z-50"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.9, ease: "easeInOut" }
      }}
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-500/50 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/75 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Brand name with gradient */}
        <motion.h1 className="text-2xl lg:text-6xl font-bold mb-6 relative">
          {'Brand Management'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated loading bar */}
        <div className="relative w-48 h-1 mx-auto bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Preparing your experience...
        </motion.p>
      </motion.div>

      {/* Signature at bottom */}
      <motion.div
        className="absolute bottom-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.p 
          className="text-lg font-light"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gray-400">Made by </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 font-bold">
            Aman Bhardwaj
          </span>
        </motion.p>
        
        {/* Animated underline */}
        <motion.div
          className="h-[1px] w-0 mx-auto mt-1 bg-gradient-to-r from-pink-400 to-violet-400"
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;