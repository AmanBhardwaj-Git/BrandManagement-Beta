import React from 'react';
import { motion } from 'framer-motion';
import { RiBookLine, RiPaletteLine, RiImageLine, RiFileTextLine } from 'react-icons/ri';

const Guidelines = () => {
  const guidelineCategories = [
    {
      title: 'Logo Usage',
      icon: RiImageLine,
      description: 'Guidelines for logo placement, sizing, and variations',
      items: [
        'Minimum Size Requirements',
        'Clear Space Rules',
        'Color Variations',
        'Incorrect Usage'
      ]
    },
    {
      title: 'Color Palette',
      icon: RiPaletteLine,
      description: 'Official brand colors and their applications',
      items: [
        'Primary Colors',
        'Secondary Colors',
        'Color Combinations',
        'Digital Color Codes'
      ]
    },
    {
      title: 'Typography',
      icon: RiFileTextLine,
      description: 'Font families and typographic rules',
      items: [
        'Primary Typeface',
        'Secondary Typeface',
        'Font Hierarchy',
        'Text Styling'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white">Brand Guidelines</h1>
          <p className="text-blue-200 mt-2">Official guidelines for maintaining brand consistency</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {guidelineCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-4">
                <category.icon className="text-blue-400 text-2xl" />
                <h2 className="text-xl font-semibold text-white">{category.title}</h2>
              </div>
              <p className="text-blue-200 mb-4 text-sm">{category.description}</p>
              <div className="space-y-2">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <p className="text-blue-100">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Access Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors">
              <RiBookLine className="text-blue-400 text-2xl mb-2" />
              <p className="text-white">Download Full Guidelines</p>
            </button>
            {/* Add more quick access buttons as needed */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guidelines; 