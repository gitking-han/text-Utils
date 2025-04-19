import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        props.mode === "light"
          ? "navbar-light bg-light"
          : props.mode === "dark"
          ? "navbar-dark bg-dark"
          : props.mode === "green"
          ? "navbar-dark"
          : "navbar-light"
      }`}
      style={{
        backgroundColor:
          props.mode === "green"
            ? "#013220"
            : props.mode === "yellow"
            ? "#fff9d6"
            : undefined,
        color: props.mode === "yellow" ? "#333" : undefined,
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {props.title}
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item list-unstyled">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item list-unstyled">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2 ms-auto">
            <button
              className="btn btn-dark btn-sm"
              onClick={() => props.setTheme("dark")}
            >
              Dark
            </button>
            <button
              className="btn btn-light btn-sm border"
              onClick={() => props.setTheme("light")}
            >
              Light
            </button>
            <button
              className="btn btn-success btn-sm"
              onClick={() => props.setTheme("green")}
            >
              Green
            </button>
            <button
              className="btn btn-warning btn-sm text-dark"
              onClick={() => props.setTheme("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
