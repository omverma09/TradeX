import React from 'react';
import { NavLink } from 'react-router-dom';
import "./mediaquires.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
      <div className="container-fluid">

        <NavLink to="/" className="navbar-brand" style={{ color: '#0D6EFD', fontWeight: '800' }}>
          TradeX
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-lg-end text-center">
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">Signup</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link">Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/support" className="nav-link">Support</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
