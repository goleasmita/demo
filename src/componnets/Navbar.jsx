import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ search, setSearch }) {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          React Notes
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/props">
                Props
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/render">
                Conditional Render
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/map">
                Map
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/fetch">
                Fetch
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Form
              </Link>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />

            <button
              className={`btn ${
                darkMode ? "btn-outline-light" : "btn-outline-success"
              }`}
              type="submit">
              Search
            </button>
          </form>

          {/* Dark / Light Mode Button */}
          <button
            onClick={toggleTheme}
            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
            type="button">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
