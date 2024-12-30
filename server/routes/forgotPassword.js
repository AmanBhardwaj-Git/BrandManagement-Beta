const express = require('express');
const router = express.Router();
const { generateOTP, sendEmail } = require('../utils/helpers');
const User = require('../models/User');

// Store OTPs temporarily (in production, use Redis or similar)
const otpStore = new Map();

// Send OTP
router.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
    }

    // Generate OTP
    const otp = generateOTP();
    
    // Store OTP with email and timestamp
    otpStore.set(email, {
      otp,
      timestamp: Date.now(),
      attempts: 0
    });

    // Send email with OTP
    await sendEmail({
      to: email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is: ${otp}. This OTP will expire in 10 minutes.`
    });

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    
    const storedOTPData = otpStore.get(email);
    
    if (!storedOTPData) {
      return res.status(400).json({ message: 'OTP expired or not found' });
    }

    // Check if OTP is expired (10 minutes)
    if (Date.now() - storedOTPData.timestamp > 10 * 60 * 1000) {
      otpStore.delete(email);
      return res.status(400).json({ message: 'OTP expired' });
    }

    // Verify OTP
    if (storedOTPData.otp !== otp) {
      storedOTPData.attempts += 1;
      
      // Max 3 attempts
      if (storedOTPData.attempts >= 3) {
        otpStore.delete(email);
        return res.status(400).json({ message: 'Too many failed attempts' });
      }
      
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // OTP verified successfully
    otpStore.delete(email);
    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Reset Password
router.post('/reset', async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    
    // Find user and update password
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash password before saving
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router; 