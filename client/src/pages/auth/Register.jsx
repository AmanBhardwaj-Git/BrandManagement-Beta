import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiCheck } from 'react-icons/fi';

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Initial Form, 2: OTP Verification
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: ['', '', '', '', '', ''] // 6-digit OTP
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed to OTP verification
      setStep(2);
      // Here you would typically make an API call to send OTP to email
      console.log('Sending OTP to', formData.email);
    }
  };

  const handleOTPChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOTP = [...formData.otp];
      newOTP[index] = value;
      setFormData({ ...formData, otp: newOTP });
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    const enteredOTP = formData.otp.join('');
    if (enteredOTP.length === 6) {
      // Here you would verify the OTP with your backend
      console.log('Verifying OTP:', enteredOTP);
      // On success, redirect to login
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-md w-full mx-4"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-blue-200">Join our brand management platform</p>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                    <input
                      type="text"
                      className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-400' : 'border-white/10'} 
                        rounded-lg py-2 pl-10 pr-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                    <input
                      type="text"
                      className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-400' : 'border-white/10'} 
                        rounded-lg py-2 pl-10 pr-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                  {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                  <input
                    type="email"
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-400' : 'border-white/10'} 
                      rounded-lg py-2 pl-10 pr-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                  <input
                    type="password"
                    className={`w-full bg-white/5 border ${errors.password ? 'border-red-400' : 'border-white/10'} 
                      rounded-lg py-2 pl-10 pr-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="********"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                  <input
                    type="password"
                    className={`w-full bg-white/5 border ${errors.confirmPassword ? 'border-red-400' : 'border-white/10'} 
                      rounded-lg py-2 pl-10 pr-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="********"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg
                  transition-colors duration-200 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-violet-500 via-pink-400 to-purple-700 
                    hover:bg-gradient-to-tr hover:from-blue-600 hover:via-pink-500 hover:to-purple-600 "
              >
                Continue with Email Verification
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div>
                <label className="block text-blue-200 text-sm font-medium mb-4 text-center">
                  Enter the verification code sent to {formData.email}
                </label>
                <div className="flex justify-center space-x-2">
                  {formData.otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 text-center bg-white/5 border border-white/10 rounded-lg text-white text-xl
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={digit}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                    />
                  ))}
                </div>
                <p className="text-blue-200 text-sm text-center mt-4">
                  Didn't receive the code?{' '}
                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-300"
                    onClick={() => console.log('Resending OTP...')}
                  >
                    Resend
                  </button>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg
                  transition-colors duration-200 flex items-center justify-center"
              >
                <FiCheck className="mr-2" />
                Verify Email
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-blue-200">
              Already have an account?{' '}
              <Link to="/login" className="text-pink-300 hover:text-blue-200 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register; 