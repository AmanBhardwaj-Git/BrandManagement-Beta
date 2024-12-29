import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate , Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Dashboard Pages
// import Dashboard from './pages/Dashboard';
import Dashboard from './pages/dashboard/Dashboard';
import BrandAssets from './pages/dashboard/BrandAssets';
import Guidelines from './pages/dashboard/Guidelines';
import Projects from './pages/dashboard/Projects';
import ContentLibrary from './pages/dashboard/ContentLibrary';
import Analytics from './pages/dashboard/Analytics';
import TeamManagement from './pages/dashboard/TeamManagement';
import Settings from './pages/dashboard/Settings';

// Public Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header isLoggedIn={isLoggedIn} />
        <main id="main-content" className="flex-grow transition-all duration-300">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* Auth Routes */}
            <Route 
              path="/login" 
              element={
                <Login setIsLoggedIn={setIsLoggedIn} />
              } 
            />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/assets"
              element={
                <ProtectedRoute>
                  <BrandAssets />
                </ProtectedRoute>
              }
            />
            <Route
              path="/guidelines"
              element={
                <ProtectedRoute>
                  <Guidelines />
                </ProtectedRoute>
              }
            />
            <Route
              path="/projects"
              element={
                <ProtectedRoute>
                  <Projects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/content"
              element={
                <ProtectedRoute>
                  <ContentLibrary />
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/team"
              element={
                <ProtectedRoute>
                  <TeamManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />

            {/* 404 Route */}
            <Route 
              path="*" 
              element={
                <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950">
                  <div className="text-center text-white">
                    <h1 className="text-6xl font-bold mb-4">404</h1>
                    <p className="text-xl mb-8">Page not found</p>
                    <Link 
                      to="/" 
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                    >
                      Go Home
                    </Link>
                  </div>
                </div>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 