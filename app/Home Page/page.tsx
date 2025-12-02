"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const ThaparSBMSLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 overflow-hidden">
                <img src="/images.png" alt="Thapar Institute" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold text-teal-900">THAPAR INSTITUTE</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <button className="text-gray-700 hover:text-teal-600 flex items-center space-x-1">
                  <span>About</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <a href="#" className="text-gray-700 hover:text-teal-600">News</a>
                <a href="#" className="text-gray-700 hover:text-teal-600">Careers</a>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search the Lab"
                  className="pl-4 pr-10 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Secondary Navigation */}
          <div className="hidden lg:flex items-center space-x-8 pb-4 border-b border-gray-200">
            <button className="text-gray-700 hover:text-teal-600 flex items-center space-x-1">
              <span>Research</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-gray-700 hover:text-teal-600 flex items-center space-x-1">
              <span>Capabilities</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-gray-700 hover:text-teal-600 flex items-center space-x-1">
              <span>People</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-gray-700 hover:text-teal-600 flex items-center space-x-1">
              <span>Engage</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-teal-600">About</a>
              <a href="#" className="block text-gray-700 hover:text-teal-600">News</a>
              <a href="#" className="block text-gray-700 hover:text-teal-600">Careers</a>
              <a href="#" className="block text-gray-700 hover:text-teal-600">Research</a>
              <a href="#" className="block text-gray-700 hover:text-teal-600">Capabilities</a>
              <a href="#" className="block text-gray-700 hover:text-teal-600">People</a>
              <a href="#" className="block text-gray-700 hover:text-teal-600">Engage</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <div className="relative w-full pt-24 bg-white overflow-hidden">

        {/* Background Container */}
        <div className="relative w-full h-[90vh] overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://minghongpower.com/wp-content/uploads/2024/07/Functions-of-Battery-Management-System-BMS-in-Battery-1024x575.png)",
            }}
          ></div>

          {/* Left Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 via-teal-900/40 to-transparent"></div>

          {/* Dotted Pattern (right-bottom) */}
          <div className="absolute bottom-0 right-0 w-[230px] h-[230px] opacity-60 pointer-events-none">
            <svg
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" fill="#d1d5db" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          {/* CONTENT BOX */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-start pb-12">

            <div
              className="
              ml-12 
              w-[450px]
              bg-teal-700/80 
              backdrop-blur-md 
              px-10 py-12 
              rounded-lg 
              shadow-2xl 
              transition-all 
              duration-300 
              hover:bg-teal-800/90
            "
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 mb-4">
                <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
                <span className="text-cyan-300 text-xs font-semibold tracking-widest">
                  INTELLIGENT BATTERY MONITORING
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-white text-5xl font-bold leading-tight mb-8">
                Smart Battery
                <br /> Management
                <br /> System
              </h1>

              {/* Arrow Button */}
              <button className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center hover:bg-white transition duration-300 group">
                <svg
                  className="w-7 h-7 text-white group-hover:text-teal-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                  alt="Real-time Monitoring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-teal-600 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-teal-600 font-semibold text-sm">FEATURE • MONITORING</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Real-Time Battery Parameter Estimation
                </h3>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="ML Predictions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-teal-600 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-teal-600 font-semibold text-sm">FEATURE • AI/ML</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Machine Learning-Based Predictions
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 py-20 overflow-hidden">
        {/* Decorative dots background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mission-dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="currentColor" className="text-cyan-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mission-dots)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-yellow-400 opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-yellow-400 opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
                alt="EV Battery Technology"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>

            {/* Content */}
            <div className="text-white">
              <div className="inline-block mb-4">
                <div className="flex items-center space-x-2 border-l-4 border-yellow-400 pl-4">
                  <span className="text-yellow-400 font-bold text-sm tracking-wider">OUR VISION</span>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Intelligent Battery Management for EV Future
              </h2>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                The SBMS project develops intelligent monitoring and control systems for electric vehicle batteries, integrating real-time estimation of SoC and SoH parameters using hybrid modelling techniques to improve battery efficiency, lifespan, and reliability.
              </p>

              <button className="group inline-flex items-center space-x-3 bg-transparent border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-teal-900 transition-all duration-300 font-semibold">
                <span>EXPLORE SBMS</span>
                <div className="w-8 h-8 rounded-full border-2 border-white group-hover:border-teal-900 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Research & Capabilities Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vehicle Module Card */}
            <div className="relative bg-gradient-to-br from-teal-600 to-teal-700 p-12 rounded-lg shadow-xl group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="research-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#research-dots)" />
                </svg>
              </div>

              <div className="relative">
                <h2 className="text-4xl font-bold text-white mb-6">Vehicle Module</h2>
                <p className="text-xl text-white mb-8 leading-relaxed">
                  Monitor and manage multiple electric vehicles in real-time with detailed telemetry data, GPS tracking, and operational parameters.
                </p>
                <button className="group/btn w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-white group-hover/btn:text-teal-600 group-hover/btn:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Battery Module Card */}
            <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-12 rounded-lg shadow-xl group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="capabilities-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#capabilities-dots)" />
                </svg>
              </div>

              <div className="relative">
                <h2 className="text-4xl font-bold text-teal-900 mb-6">Battery Module</h2>
                <p className="text-xl text-teal-900 mb-8 leading-relaxed">
                  Track battery health, charge cycles, voltage, current, and temperature with real-time SoC and SoH estimation.
                </p>
                <button className="group/btn w-16 h-16 rounded-full border-2 border-teal-900 flex items-center justify-center hover:bg-teal-900 hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-teal-900 group-hover/btn:text-yellow-400 group-hover/btn:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovating for Impact Section */}
      <div className="relative py-24 bg-gray-100 overflow-hidden">
        {/* Decorative dots background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="impact-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-teal-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#impact-dots)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-teal-900 mb-8">
            ML-Powered Intelligence
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-10">
            Our integrated cloud-based ML environment enables development, testing, and evaluation of advanced algorithms for accurate battery parameter prediction and system optimization.
          </p>

          <button className="group inline-flex items-center space-x-3 bg-transparent border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-full hover:bg-teal-700 hover:text-white transition-all duration-300 font-bold text-lg">
            <span>EXPLORE PREDICTION</span>
            <div className="w-10 h-10 rounded-full border-2 border-teal-700 group-hover:border-white flex items-center justify-center group-hover:translate-x-1 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Collaborating Institutions Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-teal-900 mb-16">
            Research Collaborators
          </h2>

          {/* Institutions Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Institution 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-teal-500 transition-colors duration-300 shadow-lg flex items-center justify-center bg-white">
                  <img src="/thapar.jpeg" alt="Thapar Institute" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-teal-900 mb-2">Thapar Institute</h3>
              
              <div className="flex items-center justify-center space-x-2 mb-4">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-teal-600 font-semibold text-sm">Lead Institution, Patiala, India</p>
              </div>

              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "Pioneering research in intelligent battery management systems for electric vehicles and sustainable energy solutions."
              </p>

              <a href="#" className="text-teal-600 font-semibold hover:text-teal-800 transition-colors inline-flex items-center space-x-2">
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Institution 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-teal-500 transition-colors duration-300 shadow-lg flex items-center justify-center bg-white">
                  <img src="/iitk.jpg" alt="IIT Kanpur" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-teal-900 mb-2">IIT Kanpur</h3>
              
              <div className="flex items-center justify-center space-x-2 mb-4">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-teal-600 font-semibold text-sm">Collaborative Research, Kanpur, India</p>
              </div>

              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "Advanced ML algorithms and computational expertise for battery health prediction and performance analysis."
              </p>

              <a href="#" className="text-teal-600 font-semibold hover:text-teal-800 transition-colors inline-flex items-center space-x-2">
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Institution 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-teal-500 transition-colors duration-300 shadow-lg flex items-center justify-center bg-white">
                  <img src="/numel.avif" alt="NUMEL Solutions" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-teal-900 mb-2">NUMEL Solutions</h3>
              
              <div className="flex items-center justify-center space-x-2 mb-4">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-teal-600 font-semibold text-sm">Industry Partner, Hyderabad, India</p>
              </div>

              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "Real-world deployment expertise and industry standards integration for practical battery management solutions."
              </p>

              <a href="#" className="text-teal-600 font-semibold hover:text-teal-800 transition-colors inline-flex items-center space-x-2">
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-teal-900">
              System Modules
            </h2>
            <a href="#" className="text-teal-600 font-semibold hover:text-teal-800 transition-colors inline-flex items-center space-x-2 text-lg">
              <span>VIEW ALL</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Module Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Module 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80"
                  alt="Prediction Module"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 mb-3">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-teal-600 font-semibold text-sm">MODULE • ANALYTICS</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Prediction Module
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  <span className="font-semibold">Advanced Analytics</span> • ML-based predicted values compared with actual battery parameters, displaying results graphically and in tabular form for performance analysis.
                </p>
                <a href="#" className="text-teal-600 font-semibold hover:text-teal-800 transition-colors inline-flex items-center space-x-2">
                  <span>Explore</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                  alt="ML Environment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 mb-3">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-teal-600 font-semibold text-sm">MODULE • ML</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-600 transition-colors">
                  ML Environment
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  <span className="font-semibold">Cloud-Based Platform</span> • Integrated cloud environment with Python code compiler and terminal for developing, testing, and evaluating ML algorithms.
                </p>
                <a href="#" className="text-teal-600 font-semibold hover:text-teal-800 transition-colors inline-flex items-center space-x-2">
                  <span>Explore</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80"
                  alt="Models Repository"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 mb-3">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-teal-600 font-semibold text-sm">MODULE • REPOSITORY</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Models Module
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  <span className="font-semibold">Centralized Repository</span> • Performance evaluation interface for all ML models developed and deployed within SBMS, including accuracy metrics.
                </p>
                <a href="#" className="text-teal-600 font-semibold hover:text-teal-800 transition-colors inline-flex items-center space-x-2">
                  <span>Explore</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left - Logo and Description */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="/images.png" alt="Thapar Institute" className="w-full h-full object-cover" />
                  </div>
                <span className="text-2xl font-bold text-teal-900">THAPAR SBMS</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Smart Battery Management System - An intelligent monitoring and control system for electric vehicle batteries developed at Thapar Institute of Engineering and Technology, Patiala, India.
              </p>
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - Footer Links */}
            <div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-teal-900 mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Dashboard</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Modules</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Documentation</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-900 mb-4">Resources</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">API Documentation</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Research Papers</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Terms of Use</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-6 md:mb-0">
              Smart Battery Management System - Sponsored by Ministry of Electronics and Information Technology (MeitY), ESDA. A collaborative project of Thapar Institute, IIT Kanpur, and NUMEL Solutions.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Reference: 25(02)/2021-ESDA</span>
              <span>•</span>
              <span>© 2025 THAPAR SBMS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThaparSBMSLanding;