import React from 'react';
import { motion } from 'framer-motion';
import { RiNotificationLine, RiLockLine, RiUserSettingsLine, RiBrushLine } from 'react-icons/ri';

const Settings = () => {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: RiUserSettingsLine,
      settings: [
        { name: 'Update Profile Information', description: 'Change your name, email, and other details' },
        { name: 'Profile Picture', description: 'Update your profile photo' },
        { name: 'Time Zone', description: 'Set your local time zone' }
      ]
    },
    {
      title: 'Brand Settings',
      icon: RiBrushLine,
      settings: [
        { name: 'Brand Colors', description: 'Customize your brand color scheme' },
        { name: 'Logo Settings', description: 'Update brand logos and icons' },
        { name: 'Brand Voice', description: 'Define your brand communication style' }
      ]
    },
    {
      title: 'Notifications',
      icon: RiNotificationLine,
      settings: [
        { name: 'Email Notifications', description: 'Manage email alert preferences' },
        { name: 'Push Notifications', description: 'Configure in-app notifications' },
        { name: 'Activity Alerts', description: 'Set up activity monitoring alerts' }
      ]
    },
    {
      title: 'Security',
      icon: RiLockLine,
      settings: [
        { name: 'Password', description: 'Change your password' },
        { name: 'Two-Factor Authentication', description: 'Enable additional security' },
        { name: 'Login History', description: 'View recent account activity' }
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
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-blue-200 mt-2">Manage your account and brand preferences</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {settingsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <section.icon className="text-blue-400 text-2xl" />
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-4">
                {section.settings.map((setting) => (
                  <div
                    key={setting.name}
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <h3 className="text-white font-medium mb-1">{setting.name}</h3>
                    <p className="text-blue-200 text-sm">{setting.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Save Changes Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-end"
        >
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            Save Changes
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings; 