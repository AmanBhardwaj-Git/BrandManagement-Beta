import React from 'react';
import { motion } from 'framer-motion';
import { RiImageLine, RiVideoLine, RiFileTextLine, RiFolderLine } from 'react-icons/ri';

const ContentLibrary = () => {
  const contentCategories = [
    {
      type: 'Images',
      icon: RiImageLine,
      count: 245,
      items: [
        { name: 'Product Photos', files: 86 },
        { name: 'Team Photos', files: 34 },
        { name: 'Event Coverage', files: 125 }
      ]
    },
    {
      type: 'Videos',
      icon: RiVideoLine,
      count: 52,
      items: [
        { name: 'Product Videos', files: 18 },
        { name: 'Promotional Content', files: 24 },
        { name: 'Brand Stories', files: 10 }
      ]
    },
    {
      type: 'Documents',
      icon: RiFileTextLine,
      count: 128,
      items: [
        { name: 'Brand Guidelines', files: 15 },
        { name: 'Marketing Materials', files: 73 },
        { name: 'Press Releases', files: 40 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Content Library</h1>
            <p className="text-blue-200 mt-2">Manage and organize your brand content</p>
          </div>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            Upload New
          </button>
        </motion.div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contentCategories.map((category, index) => (
            <motion.div
              key={category.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <category.icon className="text-blue-400 text-2xl" />
                  <h2 className="text-xl font-semibold text-white">{category.type}</h2>
                </div>
                <span className="text-blue-200">{category.count} files</span>
              </div>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">{item.name}</span>
                      <span className="text-blue-300 text-sm">{item.files} files</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Files */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Recent Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <RiFolderLine className="text-blue-400 text-xl" />
                  <div>
                    <p className="text-white">File Name {item}</p>
                    <p className="text-blue-200 text-sm">Added 2 days ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentLibrary; 