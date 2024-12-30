// src/pages/Register.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error and success messages
    setError('');
    setSuccess('');

    // Validate passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Make a request to the backend API to register the user
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // If the registration is successful, display a success message
        setSuccess('Registration successful! You can now log in.');
        console.log('User registered successfully:', result);
        
        // Optionally, you can redirect to the login page
        // window.location.href = '/login';
        
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        // If the registration fails, display an error message
        setError(result.message || 'An error occurred during registration.');
      }
    } catch (err) {
      // Handle any network or other errors
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400 animate__animated animate__bounceInDown">Register</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md animate__animated animate__zoomIn animate__delay-1s">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <div className="mb-4">
          <label className="block text-yellow-300 font-bold mb-2">Name</label>
          <div className="flex items-center border border-gray-700 rounded-md bg-gray-700">
            <FontAwesomeIcon icon={faUser} className="ml-3 text-yellow-300" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-transparent text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-yellow-300 font-bold mb-2">Email</label>
          <div className="flex items-center border border-gray-700 rounded-md bg-gray-700">
            <FontAwesomeIcon icon={faEnvelope} className="ml-3 text-yellow-300" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-transparent text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-yellow-300 font-bold mb-2">Password</label>
          <div className="flex items-center border border-gray-700 rounded-md bg-gray-700">
            <FontAwesomeIcon icon={faLock} className="ml-3 text-yellow-300" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-transparent text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-yellow-300 font-bold mb-2">Confirm Password</label>
          <div className="flex items-center border border-gray-700 rounded-md bg-gray-700">
            <FontAwesomeIcon icon={faUnlock} className="ml-3 text-yellow-300" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 bg-transparent text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <button type="submit" className="w-full px-6 py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-blue-700 animate__animated animate__pulse animate__infinite">
          Register
        </button>
      </form>
      <p className="mt-4 animate__animated animate__fadeInUp animate__delay-2s">Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login</a></p>
    </div>
  );
};

export default Register;
