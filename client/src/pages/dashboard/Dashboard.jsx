import React from 'react';
import { motion } from 'framer-motion';
import { RiDashboardLine, RiBrushLine, RiTeamLine } from 'react-icons/ri';
import { BiAnalyse } from 'react-icons/bi';

const Dashboard = () => {
  const stats = [
    { title: 'Total Projects', value: '24', icon: RiDashboardLine },
    { title: 'Brand Assets', value: '156', icon: RiBrushLine },
    { title: 'Team Members', value: '12', icon: RiTeamLine },
    { title: 'Active Campaigns', value: '8', icon: BiAnalyse },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-blue-200 mt-2">Welcome back to your brand management dashboard</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-white mt-1">{stat.value}</h3>
                </div>
                <stat.icon className="text-blue-400 text-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Activity items */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <RiBrushLine className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white">New brand asset uploaded</p>
                  <p className="text-blue-200 text-sm">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 