"use client";
import React from 'react';
import { ArrowRight, Users, Target, Award, Zap } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/shared-components';

const AboutPage = () => {

  const stats = [
    { number: "3+", label: "Partner Institutions" },
    { number: "50+", label: "Research Papers" },
    { number: "5+", label: "Industry Partners" },
    { number: "100%", label: "Success Rate" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation Excellence",
      description: "Pushing boundaries in battery management technology through cutting-edge research and development."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Approach",
      description: "Working together with leading institutions and industry partners to drive technological advancement."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Standards",
      description: "Maintaining highest standards in research, development, and implementation of BMS solutions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sustainable Impact",
      description: "Creating environmentally conscious solutions for the future of electric mobility."
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Project Inception",
      description: "Smart BMS project launched under MeitY ESDA sponsorship"
    },
    {
      year: "2022",
      title: "Prototype Development",
      description: "First working prototype with basic monitoring capabilities"
    },
    {
      year: "2023",
      title: "ML Integration",
      description: "Machine learning algorithms integrated for predictive analysis"
    },
    {
      year: "2024",
      title: "Advanced Features",
      description: "Cloud platform and comprehensive dashboard deployed"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="about" />

      {/* Hero Section */}
      <div className="relative w-full pt-24 bg-white overflow-hidden">
        <div className="relative w-full h-[60vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/60 to-transparent"></div>
          
          {/* Dotted Pattern */}
          <div className="absolute bottom-0 right-0 w-[230px] h-[230px] opacity-60">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="#d1d5db" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <p className="text-teal-300 text-sm font-semibold mb-3 tracking-wide animate-fade-in">
                  HOME / ABOUT
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  About Smart BMS
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed animate-slide-up-delay">
                  Pioneering intelligent battery management solutions for the future of electric mobility through collaborative research and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-teal-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-teal-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-teal-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Smart Battery Management System project represents a significant leap forward in electric vehicle technology. We are committed to developing intelligent, reliable, and efficient battery management solutions that enhance safety, performance, and longevity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through collaborative efforts between Thapar Institute of Engineering and Technology, IIT Kanpur, and NUMEL Solutions, we're creating cutting-edge technology that addresses real-world challenges in battery management and optimization.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                alt="Research Lab"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our research, development, and collaborative efforts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-teal-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in developing Smart BMS technology</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="text-3xl font-bold text-teal-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-teal-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">Collaborating with leading institutions and organizations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-teal-900 mb-2">Thapar Institute</h3>
              <p className="text-gray-600">Leading research and development</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-teal-900 mb-2">IIT Kanpur</h3>
              <p className="text-gray-600">Technical collaboration</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-teal-900 mb-2">NUMEL Solutions</h3>
              <p className="text-gray-600">Industry implementation</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Research Initiative</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Be part of the future of battery management technology. Explore opportunities to collaborate with us.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src="/images.png" alt="Thapar Institute" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-bold text-teal-900">THAPAR SBMS</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Smart Battery Management System - An intelligent monitoring and control system for electric vehicle batteries.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-teal-900 mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors">Home</Link></li>
                    <li><Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">About</Link></li>
                    <li><Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-900 mb-4">Resources</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Documentation</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Research</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-6 md:mb-0">
              Sponsored by Ministry of Electronics and Information Technology (MeitY), ESDA
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>© 2025 THAPAR SBMS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;