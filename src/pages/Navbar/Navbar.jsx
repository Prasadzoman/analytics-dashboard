import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Dashboard</div>
      <ul className="navbar-links">
        <li><a href="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Overview</a></li>
        <li><a href="#charts">Charts</a></li>
        <li><a href="#metrics">Metrics</a></li>
        <li><a href="#campaign">Campaigns</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
