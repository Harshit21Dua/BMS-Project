"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/shared-components';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: [
        "Thapar Institute of Engineering & Technology",
        "Patiala, Punjab - 147004",
        "India"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        "sbms@thapar.edu",
        "research@thapar.edu"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [
        "+91-175-239-3021",
        "Mon-Fri: 9:00 AM - 5:00 PM IST"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    {
      name: "Research Inquiries",
      email: "research@sbms.thapar.edu",
      description: "Questions about ongoing research and collaboration opportunities"
    },
    {
      name: "Technical Support",
      email: "support@sbms.thapar.edu",
      description: "Technical assistance with Smart BMS platform and modules"
    },
    {
      name: "Partnership",
      email: "partnerships@sbms.thapar.edu",
      description: "Industry partnerships and collaboration proposals"
    },
    {
      name: "Media Relations",
      email: "media@sbms.thapar.edu",
      description: "Press inquiries and media requests"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="contact" />

      {/* Hero Section */}
      <div className="relative w-full pt-24 bg-white overflow-hidden">
        <div className="relative w-full h-[50vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80)",
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
                  HOME / CONTACT
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Get In Touch
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed">
                  Have questions about Smart BMS? We're here to help. Reach out to us for research inquiries, technical support, or partnership opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-teal-600 mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-teal-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="research">Research Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Proposal</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {formStatus && (
                  <div className={`p-4 rounded-lg ${formStatus.includes('success') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {formStatus}
                  </div>
                )}
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1781474948936!2d76.36533931512236!3d30.35509408177647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86ae2425%3A0x7cbb415653ce98e3!2sThapar%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-teal-900 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-bold text-teal-900 mb-1">{dept.name}</h4>
                      <a href={`mailto:${dept.email}`} className="text-teal-600 hover:text-teal-800 text-sm block mb-2">
                        {dept.email}
                      </a>
                      <p className="text-gray-600 text-sm">{dept.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Visit Our Campus</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Schedule a visit to see our Smart BMS laboratory and meet our research team.
          </p>
          <Link 
            href="/about" 
            className="inline-flex items-center space-x-2 bg-white text-teal-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Learn More About Us</span>
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

export default ContactPage;