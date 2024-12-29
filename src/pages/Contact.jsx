import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiSendPlaneLine } from 'react-icons/ri';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: RiMailLine,
      title: 'Email',
      content: 'dayalbhardwaj10@gmail.com',
      link: 'mailto:'
    },
    {
      icon: RiPhoneLine,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: RiMapPinLine,
      title: 'Location',
      content: 'Delhi, India',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Have questions about our platform? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10
                  hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <item.icon className="text-blue-400 text-2xl" />
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-blue-200">{item.content}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4
                      text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4
                      text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4
                    text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Message subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="mb-6">
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={2}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4
                    text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white font-semibold py-3
                  transition-colors duration-200 flex items-center justify-center
                      shadow-lg 
                   hover:bg-gradient-to-r hover:from-blue-600 hover:via-pink-500 hover:to-purple-600 rounded-lg  duration-600 "
              >
                <RiSendPlaneLine className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 