// src/App.jsx
import React from 'react';
import HeaderNav from './HeaderNav';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import TeamPage from './TeamPage';
import BlogPage from './BlogPage';
import ActivitiesPage from './ActivitiesPage';
import ContactPage from './contactPage';
import DisclaimerPage from './DisclaimerPage'; 

function App() {
  return (
    <Router>
      <div className="App">

      <HeaderNav />

        <Routes>
          <>
            <Route path="/activities" element={<ActivitiesPage />} />
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route path="/team" element={<TeamPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} /> 

            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </>
        </Routes>
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a 
          href="/" 
          className="bg-fuchsia-700 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-600 transition-colors inline-block"
        >
          HomePage
        </a>
      </div>
    </div>
  );
}

export default App;