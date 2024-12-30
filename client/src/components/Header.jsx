import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Add effect to handle body blur and scroll lock
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    const body = document.body;

    if (isMenuOpen) {
      mainContent?.classList.add('blur-sm', 'transition-all', 'duration-300');
      body.style.overflow = 'hidden';
    } else {
      mainContent?.classList.remove('blur-sm');
      mainContent?.classList.add('blur-none');
      body.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      mainContent?.classList.remove('blur-sm', 'blur-none');
      body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all">
                BetaBrandM
              </Link>
            </div>

            {/* Main Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex space-x-6">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative group px-4 py-2"
                  >
                    <span className={`relative z-10 text-sm font-medium transition-colors duration-200
                      ${location.pathname === link.path ? 'text-white' : 'text-purple-200 group-hover:text-yellow-300'}`}
                    >
                      {link.name}
                    </span>
                    
                    {/* Background Effect */}
                    {location.pathname === link.path ? (
                      <motion.div
                        layoutId="navBackground"
                        className="absolute inset-0 bg-white/15 rounded-lg"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-white/0 rounded-lg transition-colors duration-200 group-hover:bg-purple-100/[0.05]" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Auth Buttons - Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              {!isLoggedIn ? (
                <>
                       <Link
                    to="/login"
                    className="text-sm font-medium text-blue-200 hover:text-pink-300 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.4)] transition-all duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-violet-500 via-pink-400 to-purple-700 
                    hover:bg-gradient-to-tr hover:from-blue-600 hover:via-pink-500 hover:to-purple-600 rounded-lg hover:scale-105 duration-600 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 
                    hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Dashboard
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-blue-200 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <RiCloseLine className="h-6 w-6" />
                ) : (
                  <RiMenu3Line className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation with higher z-index */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-16 left-0 right-0 z-50 bg-gradient-to-b from-violet-950 via-purple-950 to-gray-900 border-t border-white/15 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {mainNavLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-4 text-base font-medium rounded-lg transition-all duration-200
                      ${location.pathname === link.path 
                        ? 'text-yellow-200 bg-white/15' 
                        : 'text-purple-200 hover:text-white hover:bg-white/5'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Auth buttons in mobile menu */}
              <div className="pt-4 border-t border-white/10">
                {!isLoggedIn ? (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full py-2 text-center text-base font-medium text-white bg-gradient-to-r from-purple-700 to-gray-800 
                        hover:from-pink-900 hover:to-purple-600 rounded-lg transition-all duration-200"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full py-2 text-center text-base font-medium text-white bg-gradient-to-r from-pink-800 to-gray-800 
                        hover:from-purple-600 hover:to-pink-900 rounded-lg transition-all duration-200"
                    >
                      Sign Up
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full py-2 text-center text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 
                      hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-200"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;