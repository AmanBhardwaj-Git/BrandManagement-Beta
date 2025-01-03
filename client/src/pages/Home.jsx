import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiBrushLine, RiPaletteLine, RiTeamLine, RiDashboardLine } from 'react-icons/ri';
import { MdContentCopy } from 'react-icons/md';
import { BiAnalyse } from 'react-icons/bi';

const Home = () => {
  const brandFeatures = [
    {
      icon: <RiDashboardLine className="text-3xl" />,
      title: "Brand Dashboard",
      description: "Comprehensive overview of your brand's performance"
    },
    {
      icon: <RiBrushLine className="text-3xl" />,
      title: "Asset Management",
      description: "Store and organize all brand assets in one place"
    },
    {
      icon: <MdContentCopy className="text-3xl" />,
      title: "Content Library",
      description: "Manage your brand's content and media files"
    }
  ];

  const toolFeatures = [
    {
      icon: <RiPaletteLine className="text-3xl" />,
      title: "Brand Guidelines",
      description: "Maintain consistent brand identity standards"
    },
    {
      icon: <RiTeamLine className="text-3xl" />,
      title: "Team Access",
      description: "Collaborate with team members seamlessly"
    },
    {
      icon: <BiAnalyse className="text-3xl" />,
      title: "Analytics",
      description: "Track and analyze brand performance metrics"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950">
      {/* Background Pattern - Simplified */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>

      {/* Main Content */}
      <div className="relative w-full min-h-screen pt-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h1 
                className="text-2xl md:text-5xl font-bold text-white mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400">
                  Brand Management Tool
                </span>
              </motion.h1>
              
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-[-15px] left-0 h-[3px] bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400"
                initial={{ width: "0%" }}
                animate={{ 
                  width: ["0%", "100%", "100%", "0%"],
                  left: ["0%", "0%", "0%", "100%"]
                }}
                transition={{
                  duration: 1.5,
                  times: [0, 0.4, 0.6, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute -bottom-[-6px] left-0 h-[3px] bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 blur-[2px]"
                initial={{ width: "0%" }}
                animate={{ 
                  width: ["0%", "100%", "100%", "0%"],
                  left: ["0%", "0%", "0%", "100%"]
                }}
                transition={{
                  duration: 1.5,
                  times: [0, 0.4, 0.6, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </motion.div>
            <motion.p 
              className="md:mt-2 text-md lg:text-3xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Manage your brand profiles, social media accounts, content calendar, and more in one unified platform.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/login" 
                className="px-4 py-2 md:px-8 md:py-3 bg-purple-600 hover:bg-purple-400 text-white  hover:text-blue-100 font-semibold 
                  shadow-lg transition-all duration-300
                   hover:bg-gradient-to-r hover:from-blue-600 hover:via-pink-500 hover:to-purple-600 rounded-lg hover:scale-105 duration-600 hover:shadow-lg hover:shadow-blue-100/50"
              >
                Login to Dashboard
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-4 sm:py-12">
            {/* Combined Features for Mobile, Separate for Desktop */}
            <div className="block md:hidden">
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {/* Combine both feature arrays for mobile */}
                {[...brandFeatures, ...toolFeatures].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 
                      transition-all duration-300 border border-white/10"
                  >
                    <div className="flex flex-col justify-start">
                      <div className="text-blue-400 mb-3">{feature.icon}</div>
                      <h3 className="text-sm font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Desktop View - Original Separate Sections */}
            <div className="hidden md:block">
              {/* Brand Features */}
              <motion.div 
                className="grid md:grid-cols-3 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {brandFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 
                      transition-all duration-300 border border-white/10"
                  >
                    <div className="flex flex-row justify-start">
                      <div className="text-blue-400 mb-3">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2 ml-5">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tool Features */}
              <motion.div 
                className="grid md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {toolFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 
                      transition-all duration-300 border border-white/10"
                  >
                    <div className="flex flex-row justify-start">
                      <div className="text-blue-400 mb-3">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2 ml-5">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
