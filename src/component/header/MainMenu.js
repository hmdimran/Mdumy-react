import React from "react";

export default function MainMenu() {
  return (
    <section classNameName="main-nav">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand fs-2 fw-bold" href="https://facebook.com">
            Mdumy
          </a>
          <button
            className="btn btn-outline-info d-lg-none d-none d-md-block ms-auto me-3"
            type="submit"
          >
            Register
          </button>
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
            <ul className="navbar-nav me-auto mx-xxl-auto mx-lg-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://facebook.com"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="https://facebook.com" className="nav-link">
                  Course
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="https://facebook.com" className="nav-link">
                  Deals
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="https://facebook.com" className="nav-link">
                  Success
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="https://facebook.com" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="https://facebook.com" className="nav-link">
                  Register
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-info d-lg-block d-block d-md-none"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}
