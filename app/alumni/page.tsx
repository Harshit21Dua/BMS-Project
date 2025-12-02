"use client";
import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, Linkedin, Mail, ExternalLink, Filter } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/shared-components';

const AlumniPanel = () => {
  const [selectedBatch, setSelectedBatch] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState('all');

  const alumni = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      batch: "2019",
      degree: "PhD in Electrical Engineering",
      currentPosition: "Senior Research Scientist",
      company: "Tesla Inc.",
      domain: "Battery Technology",
      achievements: [
        "15+ research papers published",
        "Patent holder in BMS optimization",
        "IEEE Senior Member"
      ],
      linkedin: "#",
      email: "rajesh.k@example.com"
    },
    {
      id: 2,
      name: "Priya Sharma",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      batch: "2020",
      degree: "M.Tech in Power Electronics",
      currentPosition: "Lead Engineer - EV Division",
      company: "Tata Motors",
      domain: "Power Systems",
      achievements: [
        "Led development of advanced BMS",
        "Winner - Innovation Award 2023",
        "10+ technical publications"
      ],
      linkedin: "#",
      email: "priya.s@example.com"
    },
    {
      id: 3,
      name: "Amit Patel",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      batch: "2021",
      degree: "M.Tech in Embedded Systems",
      currentPosition: "Founder & CEO",
      company: "BatteryTech Solutions",
      domain: "Entrepreneurship",
      achievements: [
        "Founded successful BMS startup",
        "Raised $2M in funding",
        "Featured in Forbes 30 Under 30"
      ],
      linkedin: "#",
      email: "amit.p@example.com"
    },
    {
      id: 4,
      name: "Dr. Sneha Reddy",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      batch: "2018",
      degree: "PhD in Materials Science",
      currentPosition: "Principal Scientist",
      company: "ISRO",
      domain: "Research",
      achievements: [
        "Developed novel battery materials",
        "20+ international publications",
        "National Research Award recipient"
      ],
      linkedin: "#",
      email: "sneha.r@example.com"
    },
    {
      id: 5,
      name: "Vikram Singh",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      batch: "2022",
      degree: "M.Tech in Control Systems",
      currentPosition: "ML Engineer",
      company: "Google",
      domain: "AI/ML",
      achievements: [
        "AI-based BMS optimization expert",
        "Published in top AI conferences",
        "Google Cloud Certified"
      ],
      linkedin: "#",
      email: "vikram.s@example.com"
    },
    {
      id: 6,
      name: "Kavya Menon",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      batch: "2020",
      degree: "M.Tech in Electronics",
      currentPosition: "Technical Lead",
      company: "Ola Electric",
      domain: "EV Technology",
      achievements: [
        "Led BMS integration for Ola S1",
        "Filed 5 patents",
        "Speaker at EV conferences"
      ],
      linkedin: "#",
      email: "kavya.m@example.com"
    }
  ];

  const batches = ['all', '2018', '2019', '2020', '2021', '2022', '2023'];
  const domains = ['all', 'Battery Technology', 'Power Systems', 'AI/ML', 'Research', 'EV Technology', 'Entrepreneurship'];

  const filteredAlumni = alumni.filter(alum => {
    const batchMatch = selectedBatch === 'all' || alum.batch === selectedBatch;
    const domainMatch = selectedDomain === 'all' || alum.domain === selectedDomain;
    return batchMatch && domainMatch;
  });

  const stats = [
    { number: "150+", label: "Alumni Network" },
    { number: "25+", label: "Countries" },
    { number: "50+", label: "Fortune 500 Companies" },
    { number: "100+", label: "Patents Filed" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="alumni" />

      {/* Hero Section */}
      <div className="relative w-full pt-24 bg-white overflow-hidden">
        <div className="relative w-full h-[60vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/60 to-transparent"></div>
          
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

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <p className="text-teal-300 text-sm font-semibold mb-3 tracking-wide">
                  HOME / ALUMNI
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Our Alumni Network
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed">
                  Meet the brilliant minds who have contributed to Smart BMS research and are now making impact across the globe.
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

      {/* Filters Section */}
      <div className="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-teal-600" />
              <span className="font-semibold text-teal-900">Filter Alumni</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  {batches.map(batch => (
                    <option key={batch} value={batch}>
                      {batch === 'all' ? 'All Batches' : batch}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  {domains.map(domain => (
                    <option key={domain} value={domain}>
                      {domain === 'all' ? 'All Domains' : domain}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alum, index) => (
              <div
                key={alum.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Profile Header */}
                <div className="relative h-48 bg-gradient-to-br from-teal-600 to-teal-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-xl">
                      <img
                        src={alum.image}
                        alt={alum.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="p-6 pt-20">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-teal-900 mb-1">{alum.name}</h3>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{alum.degree}</span>
                    </div>
                    <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Batch of {alum.batch}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex items-start space-x-2 mb-3">
                      <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">{alum.currentPosition}</div>
                        <div className="text-sm text-gray-600">{alum.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-teal-600" />
                      <span className="text-sm font-medium text-gray-700">{alum.domain}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements</h4>
                    <ul className="space-y-1">
                      {alum.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-teal-600 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
                    <a
                      href={alum.linkedin}
                      className="text-teal-600 hover:text-teal-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${alum.email}`}
                      className="text-teal-600 hover:text-teal-800 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <button className="text-teal-600 hover:text-teal-800 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAlumni.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No alumni found matching the selected filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Alumni Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-900 mb-4">Alumni Testimonials</h2>
            <p className="text-xl text-gray-600">Hear from our alumni about their experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://randomuser.me/api/portraits/women/7.jpg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="font-bold text-teal-900">Ananya Desai</div>
                  <div className="text-sm text-gray-600">Senior Engineer, BMW Group</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The Smart BMS program provided me with invaluable hands-on experience and deep technical knowledge. The research environment was exceptional, and the mentorship I received has been instrumental in my career growth in the automotive industry."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://randomuser.me/api/portraits/men/8.jpg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="font-bold text-teal-900">Rohan Kapoor</div>
                  <div className="text-sm text-gray-600">Research Scientist, MIT</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Working on the Smart BMS project opened doors to cutting-edge research opportunities. The collaborative environment and access to state-of-the-art facilities prepared me well for my current role in advanced battery research."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Alumni Network</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Stay connected with fellow alumni, access exclusive resources, and contribute to the next generation of Smart BMS researchers.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Register as Alumni</span>
            <ExternalLink className="w-5 h-5" />
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
                    <li><Link href="/alumni" className="text-gray-600 hover:text-teal-600 transition-colors">Alumni</Link></li>
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

export default AlumniPanel;