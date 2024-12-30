import React from 'react';

// Small spinner for inline loading
export const LoadingSpinner = ({ size = 'small', color = 'blue' }) => {
  const sizeClasses = {
    small: 'h-4 w-4 border-2',
    medium: 'h-8 w-8 border-3',
    large: 'h-16 w-16 border-4'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    gray: 'border-gray-500',
    white: 'border-white'
  };

  return (
    <div 
      className={`
        animate-spin rounded-full 
        border-t-transparent border-b-transparent
        ${sizeClasses[size]} 
        ${colorClasses[color]}
      `}
    />
  );
};

// Overlay loading for full-screen loading states
export const LoadingOverlay = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center">
        <LoadingSpinner size="large" />
        <p className="mt-4 text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;