"use client";
import React, { useState } from 'react';
import { Battery, Zap, Thermometer, Activity, TrendingUp, AlertTriangle, CheckCircle, Settings, Download, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/shared-components';

const SmartBMSDashboard = () => {
  const [selectedBattery, setSelectedBattery] = useState('pack-1');
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const batteryPacks = [
    { id: 'pack-1', name: 'Battery Pack 1', status: 'healthy', soc: 87, health: 95, temp: 32, voltage: 403.2 },
    { id: 'pack-2', name: 'Battery Pack 2', status: 'warning', soc: 45, health: 88, temp: 38, voltage: 398.5 },
    { id: 'pack-3', name: 'Battery Pack 3', status: 'healthy', soc: 92, health: 97, temp: 30, voltage: 405.1 },
    { id: 'pack-4', name: 'Battery Pack 4', status: 'critical', soc: 15, health: 72, temp: 42, voltage: 385.3 }
  ];

  const selectedPack = batteryPacks.find(pack => pack.id === selectedBattery) || batteryPacks[0];

  const systemMetrics = [
    {
      icon: <Battery className="w-8 h-8" />,
      label: "State of Charge",
      value: `${selectedPack.soc}%`,
      change: "+2.3%",
      trend: "up",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      label: "Battery Health",
      value: `${selectedPack.health}%`,
      change: "-0.5%",
      trend: "down",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      label: "Temperature",
      value: `${selectedPack.temp}°C`,
      change: "+1.2°C",
      trend: "up",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: "Voltage",
      value: `${selectedPack.voltage}V`,
      change: "+0.8V",
      trend: "up",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const alerts = [
    {
      type: "warning",
      message: "Battery Pack 2 temperature exceeding normal range",
      time: "5 minutes ago",
      priority: "medium"
    },
    {
      type: "critical",
      message: "Battery Pack 4 State of Charge critically low",
      time: "12 minutes ago",
      priority: "high"
    },
    {
      type: "info",
      message: "Scheduled maintenance due in 3 days",
      time: "1 hour ago",
      priority: "low"
    }
  ];

  const cellData = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    voltage: (3.6 + Math.random() * 0.4).toFixed(2),
    temp: (28 + Math.random() * 10).toFixed(1),
    status: Math.random() > 0.1 ? 'normal' : 'warning'
  }));

  const performanceData = [
    { time: '00:00', power: 45, efficiency: 92 },
    { time: '04:00', power: 38, efficiency: 94 },
    { time: '08:00', power: 52, efficiency: 89 },
    { time: '12:00', power: 68, efficiency: 87 },
    { time: '16:00', power: 75, efficiency: 85 },
    { time: '20:00', power: 58, efficiency: 90 },
    { time: '24:00', power: 42, efficiency: 93 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage="dashboard" />

      {/* Main Content */}
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-teal-900 mb-2">System Overview</h1>
              <p className="text-gray-600">Real-time monitoring and analytics for Smart BMS</p>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live Data • Last updated: Just now</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleRefresh}
                className={`p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
                  refreshing ? 'animate-spin' : ''
                }`}
                aria-label="Refresh data"
              >
                <RefreshCw className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700 hidden sm:inline">Refresh</span>
              </button>
              <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors" aria-label="Settings">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Battery Pack Selector */}
          <div className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-teal-900 mb-4">Select Battery Pack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {batteryPacks.map((pack) => (
                <button
                  key={pack.id}
                  onClick={() => setSelectedBattery(pack.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedBattery === pack.id
                      ? 'border-teal-600 bg-teal-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Battery className={`w-6 h-6 ${
                      pack.status === 'healthy' ? 'text-green-600' :
                      pack.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                    }`} />
                    <span className={`w-3 h-3 rounded-full ${
                      pack.status === 'healthy' ? 'bg-green-500' :
                      pack.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{pack.name}</div>
                    <div className="text-sm text-gray-600">SoC: {pack.soc}%</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {systemMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${metric.bgColor} p-3 rounded-lg ${metric.color}`}>
                    {metric.icon}
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="text-gray-600 text-sm mb-1">{metric.label}</div>
                <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Performance Chart */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-teal-900">Performance Metrics (24h)</h2>
                <button className="text-teal-600 hover:text-teal-800 text-sm font-medium">
                  View Details
                </button>
              </div>
              
              {/* Simple Bar Chart Visualization */}
              <div className="space-y-4">
                {performanceData.map((data, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-16 text-sm text-gray-600">{data.time}</div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2">
                        <div className="flex-grow bg-gray-100 rounded-full h-6 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-teal-500 to-teal-600 h-full rounded-full flex items-center justify-end pr-2"
                            style={{ width: `${data.power}%` }}
                          >
                            <span className="text-xs text-white font-medium">{data.power}%</span>
                          </div>
                        </div>
                        <div className="w-20 text-sm text-gray-600">η: {data.efficiency}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts Panel */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-teal-900 mb-6">System Alerts</h2>
              <div className="space-y-4">
                {alerts.map((alert, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-l-4 ${
                      alert.type === 'critical' ? 'bg-red-50 border-red-500' :
                      alert.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                      'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {alert.type === 'critical' ? (
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      ) : alert.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-grow">
                        <p className="text-sm text-gray-900 font-medium mb-1">{alert.message}</p>
                        <p className="text-xs text-gray-600">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="w-full text-center text-teal-600 hover:text-teal-800 text-sm font-medium py-2">
                  View All Alerts
                </button>
              </div>
            </div>
          </div>

          {/* Cell Monitoring Grid */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-teal-900">Cell Monitoring</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Normal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Warning</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {cellData.map((cell) => (
                <div
                  key={cell.id}
                  className={`p-4 rounded-lg border-2 ${
                    cell.status === 'normal'
                      ? 'border-green-200 bg-green-50'
                      : 'border-yellow-200 bg-yellow-50'
                  } hover:shadow-lg transition-shadow`}
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-600 mb-2">Cell {cell.id}</div>
                    <div className="text-lg font-bold text-gray-900 mb-1">{cell.voltage}V</div>
                    <div className="text-xs text-gray-600">{cell.temp}°C</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-teal-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Export Report</span>
            </button>
            <button className="flex-1 bg-white text-teal-600 border-2 border-teal-600 px-6 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors flex items-center justify-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>View Analytics</span>
            </button>
            <button className="flex-1 bg-white text-gray-700 border-2 border-gray-300 px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © 2025 THAPAR SBMS - Real-time Battery Management System Dashboard
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartBMSDashboard;