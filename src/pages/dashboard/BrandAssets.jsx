import React from 'react';
import { motion } from 'framer-motion';
import { RiImageLine, RiPaletteLine, RiFileTextLine } from 'react-icons/ri';

const BrandAssets = () => {
  const assets = [
    {
      type: 'Logo',
      icon: RiImageLine,
      items: ['Primary Logo', 'Secondary Logo', 'Icon Only'],
    },
    {
      type: 'Colors',
      icon: RiPaletteLine,
      items: ['Primary Colors', 'Secondary Colors', 'Gradients'],
    },
    {
      type: 'Typography',
      icon: RiFileTextLine,
      items: ['Primary Font', 'Secondary Font', 'Web Safe Fonts'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white">Brand Assets</h1>
          <p className="text-blue-200 mt-2">Manage and organize your brand assets</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((category, index) => (
            <motion.div
              key={category.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-4">
                <category.icon className="text-blue-400 text-2xl" />
                <h2 className="text-xl font-semibold text-white">{category.type}</h2>
              </div>
              <div className="space-y-3">
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

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Upload New Asset</h2>
          <div className="border-2 border-dashed border-blue-400/50 rounded-lg p-8 text-center">
            <RiImageLine className="mx-auto text-4xl text-blue-400 mb-3" />
            <p className="text-blue-200">Drag and drop your files here, or click to select files</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandAssets; 