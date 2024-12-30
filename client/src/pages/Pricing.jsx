import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCheckLine, RiCloseLine, RiStarLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextCard();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevCard();
    }
  };

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
          className="flex justify-center items-center space-x-6 sm:mb-10 mb-0 ml-6"
        >
          <span className={`text-blue-200 ${!isAnnual ? 'font-semibold' : ''}`}>
            Monthly Billing
          </span>
          <button 
            className="w-20 sm:w-16 h-8 bg-blue-500/20 rounded-full p-1 relative"
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

        {/* Mobile Carousel / Desktop Grid */}
        {isMobile ? (
          <div className="relative px-4 py-8">
            {/* Navigation Arrows - Now positioned absolutely */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 
              flex justify-between items-center px-2 z-10 pointer-events-none">
              <button
                onClick={prevCard}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                  transition-all duration-300 transform hover:scale-110
                  backdrop-blur-sm border border-white/10
                  pointer-events-auto"
                aria-label="Previous plan"
              >
                <RiArrowLeftSLine size={24} className="text-white" />
              </button>
              <button
                onClick={nextCard}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                  transition-all duration-300 transform hover:scale-110
                  backdrop-blur-sm border border-white/10
                  pointer-events-auto"
                aria-label="Next plan"
              >
                <RiArrowRightSLine size={24} className="text-white" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full"
              >
                {/* Single Card */}
                <div className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border 
                  transition-all duration-300 shadow-xl mx-auto max-w-sm
                  ${plans[currentIndex].popular 
                    ? 'border-pink-500 shadow-lg shadow-blue-500/20' 
                    : 'border-white/10'}`}
                >
                  {plans[currentIndex].popular && (
                    <motion.div 
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="absolute -top-4 left-[27%]  transform -translate-x-1/2"
                    >
                      <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm flex items-center">
                        <RiStarLine className="mr-1" /> Most Popular
                      </span>
                    </motion.div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 
                      group-hover:text-transparent group-hover:bg-clip-text 
                      group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400
                      transition-all duration-300">
                      {plans[currentIndex].name}
                    </h3>
                    <p className="text-violet-200 mb-4 group-hover:text-white/90 transition-colors">{plans[currentIndex].description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                        {getPrice(parseInt(plans[currentIndex].price.replace(/[^0-9]/g, '')))}
                      </span>
                      <span className="text-violet-200 ml-2 group-hover:text-white/90">{getPeriodText()}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {plans[currentIndex].features.map((feature) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-center text-blue-100 group-hover:text-white/90
                          transition-transform duration-200"
                        whileHover={{ x: 4 }}
                      >
                        <RiCheckLine className="text-green-500 mr-2 text-xl 
                          group-hover:scale-110 transition-transform" />
                        {feature}
                      </motion.div>
                    ))}
                    {plans[currentIndex].notIncluded?.map((feature) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-center text-blue-300/50"
                        whileHover={{ x: 4 }}
                      >
                        <RiCloseLine className="text-red-300/75 mr-2" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-2 rounded-lg font-semibold transition-all duration-300
                      transform group-hover:scale-105 group-hover:shadow-lg
                      ${plans[currentIndex].popular 
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-blue-600 hover:to-pink-500' 
                        : 'bg-white/10 hover:bg-white/20 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20'}`}
                  >
                    {plans[currentIndex].buttonText}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator - Now separate and below card */}
            <div className="flex justify-center space-x-2 mt-6">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${index === currentIndex 
                      ? 'bg-pink-500 w-4' 
                      : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to plan ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Grid View (your existing grid code)
          <div className="grid grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border 
                  transition-all duration-300 hover:shadow-2xl
                  group
                  ${plan.popular 
                    ? 'border-pink-500 shadow-lg shadow-blue-500/20 scale-105 z-10' 
                    : 'border-white/10 hover:border-white/30 opacity-75 hover:opacity-100'}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {plan.popular && (
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  >
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm flex items-center
                      shadow-lg shadow-pink-500/20">
                      <RiStarLine className="mr-1" /> Most Popular
                    </span>
                  </motion.div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 
                    group-hover:text-transparent group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400
                    transition-all duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-violet-200 mb-4 group-hover:text-white/90 transition-colors">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {getPrice(parseInt(plan.price.replace(/[^0-9]/g, '')))}
                    </span>
                    <span className="text-violet-200 ml-2 group-hover:text-white/90">{getPeriodText()}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {plan.features.map((feature) => (
                    <motion.div 
                      key={feature} 
                      className="flex items-center text-blue-100 group-hover:text-white/90
                        transition-transform duration-200"
                      whileHover={{ x: 4 }}
                    >
                      <RiCheckLine className="text-green-500 mr-2 text-xl 
                        group-hover:scale-110 transition-transform" />
                      {feature}
                    </motion.div>
                  ))}
                  {plan.notIncluded?.map((feature) => (
                    <motion.div 
                      key={feature} 
                      className="flex items-center text-blue-300/50"
                      whileHover={{ x: 4 }}
                    >
                      <RiCloseLine className="text-red-300/75 mr-2" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-all duration-300
                    transform group-hover:scale-105 group-hover:shadow-lg
                    ${plan.popular 
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-blue-600 hover:to-pink-500' 
                      : 'bg-white/10 hover:bg-white/20 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20'}`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        )}

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