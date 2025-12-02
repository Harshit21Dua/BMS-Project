"use client";
import React, { useState } from 'react';
import { ChevronRight, Calendar, Users, Filter } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/shared-components';

const ProjectsListingPage = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: 'ml-battery-prediction',
      title: "ML-Based Battery Life Prediction",
      category: "Machine Learning",
      status: "Active",
      startDate: "January 2024",
      team: "8 Members",
      description: "Developing advanced machine learning algorithms for accurate battery life prediction and health monitoring.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["Machine Learning", "Predictive Analytics", "Battery Health"]
    },
    {
      id: 'thermal-management-system',
      title: "Advanced Thermal Management System",
      category: "Thermal Engineering",
      status: "Active",
      startDate: "March 2024",
      team: "10 Members",
      description: "Innovative cooling solutions for high-performance EV battery packs.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      tags: ["Thermal Management", "Heat Dissipation", "Safety"]
    },
    {
      id: 'wireless-bms-monitoring',
      title: "Wireless BMS Monitoring System",
      category: "IoT & Communication",
      status: "Completed",
      startDate: "June 2023",
      team: "7 Members",
      description: "IoT-enabled wireless monitoring system for distributed battery management.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      tags: ["IoT", "Wireless Communication", "Real-time Monitoring"]
    },
  ];

  const categories = ['all', 'Machine Learning', 'Thermal Engineering', 'IoT & Communication'];
  const statuses = ['all', 'Active', 'Completed', 'Planning'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = filterCategory === 'all' || project.category === filterCategory;
    const statusMatch = filterStatus === 'all' || project.status === filterStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="projects" />

      {/* Hero Section */}
      <div className="relative w-full pt-24 bg-white overflow-hidden">
        <div className="relative w-full h-[50vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/60 to-transparent"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <p className="text-teal-300 text-sm font-semibold mb-3 tracking-wide">
                  HOME / PROJECTS
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Our Research Projects
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed">
                  Explore our cutting-edge research initiatives in battery management systems, machine learning, and sustainable energy solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-teal-600" />
              <span className="font-semibold text-teal-900">Filter Projects</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Statuses' : status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-teal-900 mb-2">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Active' ? 'bg-green-500 text-white' :
                      project.status === 'Completed' ? 'bg-blue-500 text-white' :
                      'bg-yellow-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-teal-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-teal-600" />
                      {project.startDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-teal-600" />
                      {project.team}
                    </div>
                  </div>

                  <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-800">
                    Learn More
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No projects found matching the selected filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Research Team</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Interested in collaborating on cutting-edge battery management research? Get in touch with us.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Contact Us</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © 2025 THAPAR SBMS - Sponsored by Ministry of Electronics and Information Technology (MeitY), ESDA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsListingPage;