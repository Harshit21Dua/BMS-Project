"use client";
import React, { useState } from 'react';
import { Calendar, Users, Tag, Github, ExternalLink, FileText, Award, ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/shared-components';

// Sample project data - in production, this would come from an API
const projectsData = {
  'ml-battery-prediction': {
    id: 'ml-battery-prediction',
    title: "ML-Based Battery Life Prediction",
    category: "Machine Learning",
    status: "Active",
    startDate: "January 2024",
    duration: "12 months",
    team: ["Dr. Rajesh Kumar", "Priya Sharma", "5 Research Assistants"],
    tags: ["Machine Learning", "Predictive Analytics", "Battery Health"],
    shortDescription: "Developing advanced machine learning algorithms for accurate battery life prediction and health monitoring.",
    fullDescription: `This project focuses on developing state-of-the-art machine learning models to predict battery life and health status with unprecedented accuracy. By analyzing historical data patterns, charging cycles, and environmental factors, our ML algorithms can forecast battery degradation and optimize maintenance schedules.

The research combines deep learning techniques with traditional statistical methods to create a robust prediction framework that adapts to various battery chemistries and usage patterns. Our approach has shown 95% accuracy in predicting battery end-of-life within a 6-month window.`,
    objectives: [
      "Develop accurate battery life prediction models using deep learning",
      "Create real-time health monitoring dashboard",
      "Integrate predictive maintenance recommendations",
      "Optimize charging strategies based on ML insights"
    ],
    methodology: [
      "Data collection from 500+ battery packs over 2 years",
      "Feature engineering for battery health indicators",
      "Implementation of LSTM and GRU networks for time-series prediction",
      "Validation through real-world testing scenarios"
    ],
    results: [
      "95% accuracy in battery life prediction",
      "30% improvement in maintenance cost reduction",
      "Real-time anomaly detection with 98% precision",
      "Successfully deployed in 50+ EV fleets"
    ],
    publications: [
      "IEEE Transactions on Industrial Electronics - 'Advanced ML Techniques for Battery Prognosis'",
      "Journal of Energy Storage - 'Deep Learning for Battery Health Estimation'",
      "International Conference on Smart Grid - 'Predictive Maintenance using AI'"
    ],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ],
    githubLink: "#",
    documentationLink: "#"
  },
  'thermal-management-system': {
    id: 'thermal-management-system',
    title: "Advanced Thermal Management System",
    category: "Thermal Engineering",
    status: "Active",
    startDate: "March 2024",
    duration: "18 months",
    team: ["Dr. Sneha Reddy", "Vikram Singh", "8 Research Assistants"],
    tags: ["Thermal Management", "Heat Dissipation", "Safety"],
    shortDescription: "Innovative cooling solutions for high-performance EV battery packs.",
    fullDescription: `This groundbreaking project addresses one of the most critical challenges in EV technology: efficient thermal management of high-capacity battery packs. Our research explores novel cooling architectures that maintain optimal operating temperatures while minimizing energy consumption.

Using computational fluid dynamics (CFD) simulations and experimental validation, we've developed a hybrid cooling system that combines liquid cooling with phase-change materials. This approach provides superior thermal regulation during both normal operation and fast-charging scenarios.`,
    objectives: [
      "Design efficient thermal management architecture",
      "Reduce battery temperature variance by 40%",
      "Minimize cooling system energy consumption",
      "Enhance battery safety during extreme conditions"
    ],
    methodology: [
      "CFD simulations for thermal flow analysis",
      "Experimental testing with thermal imaging",
      "Integration of phase-change materials",
      "Real-world validation in various climates"
    ],
    results: [
      "42% reduction in temperature variance",
      "25% improvement in fast-charging capability",
      "15% increase in battery life expectancy",
      "Patent pending for novel cooling architecture"
    ],
    publications: [
      "Applied Thermal Engineering - 'Hybrid Cooling Systems for EV Batteries'",
      "Energy Conversion and Management - 'Phase-Change Materials in Battery Thermal Management'"
    ],
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80"
    ],
    githubLink: "#",
    documentationLink: "#"
  },
  'wireless-bms-monitoring': {
    id: 'wireless-bms-monitoring',
    title: "Wireless BMS Monitoring System",
    category: "IoT & Communication",
    status: "Completed",
    startDate: "June 2023",
    duration: "12 months",
    team: ["Amit Patel", "Kavya Menon", "6 Research Assistants"],
    tags: ["IoT", "Wireless Communication", "Real-time Monitoring"],
    shortDescription: "IoT-enabled wireless monitoring system for distributed battery management.",
    fullDescription: `This project revolutionizes battery monitoring by eliminating complex wiring harnesses and enabling flexible, scalable battery pack configurations. Our wireless BMS uses advanced communication protocols to provide real-time data transmission with ultra-low latency.

The system employs a mesh network topology that ensures robust communication even in challenging electromagnetic environments. Each battery module acts as both a transmitter and repeater, creating a self-healing network that maintains connectivity even if individual nodes fail.`,
    objectives: [
      "Develop reliable wireless communication protocol for BMS",
      "Achieve <10ms latency for critical safety data",
      "Reduce installation complexity and cost",
      "Enable scalable battery pack configurations"
    ],
    methodology: [
      "Custom wireless protocol development based on IEEE 802.15.4",
      "Mesh network implementation for reliability",
      "Electromagnetic interference testing",
      "Field trials in commercial EV applications"
    ],
    results: [
      "Successfully deployed in 100+ vehicles",
      "8ms average latency for safety-critical data",
      "40% reduction in installation time",
      "99.9% communication reliability achieved"
    ],
    publications: [
      "IEEE Internet of Things Journal - 'Wireless Battery Management Systems'",
      "Sensors Journal - 'Reliable Communication in Harsh Environments'"
    ],
    images: [
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
    ],
    githubLink: "#",
    documentationLink: "#"
  }
};

const ProjectPage = () => {
  const params = useParams();
  const projectId = params?.id as string || 'ml-battery-prediction';
  const project = projectsData[projectId as keyof typeof projectsData] || projectsData['ml-battery-prediction'];

  const [activeTab, setActiveTab] = useState('overview');

  const relatedProjects = Object.values(projectsData)
    .filter(p => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="projects" />

      {/* Breadcrumb and Back Button */}
      <div className="pt-32 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <div className="text-sm text-gray-500 mb-2">
            HOME / PROJECTS / {project.category.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
              project.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'
            }`}>
              {project.status}
            </span>
            <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
              {project.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-teal-100 mb-6 max-w-3xl">{project.shortDescription}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6" />
              <div>
                <div className="text-sm text-teal-200">Start Date</div>
                <div className="font-semibold">{project.startDate}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6" />
              <div>
                <div className="text-sm text-teal-200">Team Size</div>
                <div className="font-semibold">{project.team.length} Members</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6" />
              <div>
                <div className="text-sm text-teal-200">Duration</div>
                <div className="font-semibold">{project.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'objectives', 'methodology', 'results', 'publications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-3xl font-bold text-teal-900 mb-6">Project Overview</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-teal-900 mb-6">Project Gallery</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.images.map((image, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden shadow-lg group">
                          <img
                            src={image}
                            alt={`Project image ${idx + 1}`}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'objectives' && (
                <div>
                  <h2 className="text-3xl font-bold text-teal-900 mb-6">Project Objectives</h2>
                  <div className="space-y-4">
                    {project.objectives.map((objective, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-gray-700 pt-1">{objective}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'methodology' && (
                <div>
                  <h2 className="text-3xl font-bold text-teal-900 mb-6">Research Methodology</h2>
                  <div className="space-y-6">
                    {project.methodology.map((method, idx) => (
                      <div key={idx} className="border-l-4 border-teal-600 pl-6 py-2">
                        <h4 className="font-semibold text-teal-900 mb-2">Phase {idx + 1}</h4>
                        <p className="text-gray-600">{method}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div>
                  <h2 className="text-3xl font-bold text-teal-900 mb-6">Key Results & Achievements</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg shadow-md">
                        <Award className="w-8 h-8 text-teal-600 mb-3" />
                        <p className="text-gray-700 font-medium">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'publications' && (
                <div>
                  <h2 className="text-3xl font-bold text-teal-900 mb-6">Publications & Research Output</h2>
                  <div className="space-y-4">
                    {project.publications.map((pub, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                          <FileText className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                          <div className="flex-grow">
                            <p className="text-gray-700">{pub}</p>
                            <button className="text-teal-600 hover:text-teal-800 text-sm font-medium mt-2 inline-flex items-center">
                              Read Paper <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Team Members */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-teal-900 mb-4">Team Members</h3>
                  <ul className="space-y-3">
                    {project.team.map((member, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-teal-600" />
                        <span className="text-gray-700">{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-teal-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-teal-900 mb-4">Resources</h3>
                  <div className="space-y-3">
                    <a
                      href={project.githubLink}
                      className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </a>
                    <a
                      href={project.documentationLink}
                      className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      <span>Documentation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={relatedProject.images[0]}
                  alt={relatedProject.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold">
                      {relatedProject.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      relatedProject.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {relatedProject.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">{relatedProject.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedProject.shortDescription}</p>
                  <div className="flex items-center text-teal-600 font-semibold">
                    Learn More <ChevronRight className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
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

export default ProjectPage;