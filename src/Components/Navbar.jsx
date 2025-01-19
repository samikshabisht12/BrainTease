import React from "react";
    import "../index.css";
	import logo from "../data/logo-bg.png";
    import { Link } from "react-router-dom";

    function Navbar({ isDarkMode, toggleTheme }) {
      return (
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cgpa-calculator">CGPA Calculator</Link>
            </li>
            <li>
              <Link to="/lab-manual">Lab Manual</Link>
            </li>
            <li>
              <a href="#">Calendar</a>
            </li>
          </ul>
          <label className="theme-toggle">
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </nav>
      );
    }

    export default Navbar;
