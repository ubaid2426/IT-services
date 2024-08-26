import React from 'react';
import { FaGlobe, FaUserShield, FaLock, FaUsers } from 'react-icons/fa';
import './Counter.css';

const Statistics = () => {
  const stats = [
    { id: 1, icon: <FaGlobe size={40} />, value: '3,452', label: 'Cybersecurity Projects' },
    { id: 2, icon: <FaUserShield size={40} />, value: '1,458', label: 'Clients Protection' },
    { id: 3, icon: <FaLock size={40} />, value: '100%', label: 'Service Guarantee' },
    { id: 4, icon: <FaUsers size={40} />, value: '85', label: 'Team Experts' },
  ];

  return (
    <div className="statistics">
      <div className="statistics-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value-container">
              <h2 className="stat-value">{stat.value}</h2>
              <span className="plus-sign">+</span>
            </div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
