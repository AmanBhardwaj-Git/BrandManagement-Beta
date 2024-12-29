import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiCheckLine, RiCloseLine, RiStarLine } from 'react-icons/ri';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 3 team members',
        '5GB storage',
        'Basic brand assets management',
        'Limited analytics',
        'Email support',
        '2 brand profiles'
      ],
      notIncluded: [
        'Advanced analytics',
        'Custom templates',
        'Priority support',
        'API access'
      ],
      buttonText: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹2,499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 team members',
        '25GB storage',
        'Advanced brand management',
        'Full analytics dashboard',
        'Priority email support',
        '5 brand profiles',
        'Custom templates',
        'Social media integration'
      ],
      notIncluded: [
        'White-label options',
        'API access'
      ],
      buttonText: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹7,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        '100GB storage',
        'Enterprise brand management',
        'Advanced analytics & reporting',
        '24/7 priority support',
        'Unlimited brand profiles',
        'Custom templates',
        'White-label options',
        'API access',
        'Custom integration support',
        'Dedicated account manager'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  // Function to calculate price based on billing period
  const getPrice = (monthlyPrice) => {
    if (isAnnual) {
      // 20% discount for annual billing
      return `₹${Math.floor(monthlyPrice * 12 * 0.8).toLocaleString()}`;
    }
    return `₹${monthlyPrice.toLocaleString()}`;
  };

  // Function to get billing period text
  const getPeriodText = () => {
    return isAnnual ? '/year' : '/month';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Choose the perfect plan for your brand management needs
          </p>
        </motion.div>

        {/* Updated Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center items-center space-x-4 mb-12"
        >
          <span className={`text-blue-200 ${!isAnnual ? 'font-semibold' : ''}`}>
            Monthly Billing
          </span>
          <button 
            className="w-16 h-8 bg-blue-500/20 rounded-full p-1 relative"
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle billing period"
          >
            <motion.div
              className="w-6 h-6 bg-pink-400 rounded-full "
              animate={{ x: isAnnual ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-blue-200 ${isAnnual ? 'font-semibold' : ''}`}>
            Annual Billing <span className="text-pink-300">(Save 20%)</span>
          </span>
        </motion.div>

        {/* Updated Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border 
                ${plan.popular 
                  ? 'border-pink-500 shadow-lg shadow-blue-500/20' 
                  : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm flex items-center">
                    <RiStarLine className="mr-1" /> Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-violet-200 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">
                    {getPrice(parseInt(plan.price.replace(/[^0-9]/g, '')))}
                  </span>
                  <span className="text-violet-200 ml-2">{getPeriodText()}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center text-blue-100">
                    <RiCheckLine className="text-green-500 mr-2 text-xl" />
                    {feature}
                  </div>
                ))}
                {plan.notIncluded?.map((feature) => (
                  <div key={feature} className="flex items-center text-blue-300/50">
                    <RiCloseLine className="text-red-300/75 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-2 rounded-lg font-semibold transition-colors
                  ${plan.popular 
                    ? 'bg-pink-600  text-white hover:bg-gradient-to-bl   hover:from-blue-600 hover:to-pink-500 rounded-lg transition-all duration-300' 
                    : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-blue-200">
            Need help choosing? <a href="/contact" className="text-blue-400 hover:text-blue-300">Contact our team</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing; 