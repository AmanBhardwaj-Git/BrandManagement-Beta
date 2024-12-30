// src/components/ContentCalendar.js

import React from 'react';
import { motion } from 'framer-motion';

const ContentCalendar = () => {
  return (
    <motion.section
      className="bg-gray-900 text-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Content Calendar</h2>
      <p>Plan and organize marketing campaigns and content schedules.</p>
    </motion.section>
  );
};

export default ContentCalendar;
