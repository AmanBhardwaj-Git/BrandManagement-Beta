// src/components/BrandProfile.js

import React from 'react';
import { motion } from 'framer-motion';

const BrandProfile = () => {
  return (
    <motion.section
      className="bg-gray-900 text-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Brand Profile</h2>
      <p>Manage your brand profiles, upload logos, and define brand guidelines.</p>
    </motion.section>
  );
};

export default BrandProfile;
