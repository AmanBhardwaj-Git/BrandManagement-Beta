import React from 'react';
import { motion } from 'framer-motion';
import { RiBarChartLine, RiLineChartLine, RiPieChartLine, RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';

const Analytics = () => {
  const metrics = [
    {
      title: 'Brand Reach',
      value: '2.4M',
      change: '+12.5%',
      isPositive: true,
      icon: RiBarChartLine
    },
    {
      title: 'Engagement Rate',
      value: '4.8%',
      change: '+2.1%',
      isPositive: true,
      icon: RiLineChartLine
    },
    {
      title: 'Content Performance',
      value: '89%',
      change: '-1.4%',
      isPositive: false,
      icon: RiPieChartLine
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
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
          <p className="text-blue-200 mt-2">Track your brand's performance metrics</p>
        </motion.div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="text-blue-400 text-2xl" />
                <div className={`flex items-center ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.isPositive ? <RiArrowUpLine /> : <RiArrowDownLine />}
                  <span className="ml-1">{metric.change}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{metric.value}</h3>
              <p className="text-blue-200">{metric.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Brand Performance</h2>
            <div className="aspect-[16/9] bg-white/5 rounded-lg">
              {/* Add your chart component here */}
              <div className="w-full h-full flex items-center justify-center text-blue-200">
                Chart Placeholder
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Engagement Trends</h2>
            <div className="aspect-[16/9] bg-white/5 rounded-lg">
              {/* Add your chart component here */}
              <div className="w-full h-full flex items-center justify-center text-blue-200">
                Chart Placeholder
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 