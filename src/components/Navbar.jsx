import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn ${showNavbar ? 'd-flex' : 'd-none'}`}
      data-wow-delay="0.1s"
    >
      <a href="/" className="navbar-brand d-block d-lg-none">
        <h1 className="text-primary fw-bold m-0">ProMan</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="#home" className="nav-item nav-link active">Home</a>
          <a href="#about" className="nav-item nav-link">About</a>
          <a href="#skill" className="nav-item nav-link">Skills</a>
          <a href="#service" className="nav-item nav-link">Services</a>
        </div>
        <a href="#home" className="navbar-brand py-3 px-4 mx-3 d-none d-lg-block" style={{backgroundColor:'rgb(255, 196, 72)'}}>
          <h1 className="text-primary fw-bold m-0">ProMan</h1>
        </a>
        <div className="navbar-nav me-auto py-0">
          <a href="#project" className="nav-item nav-link">Projects</a>
          {/* <a href="/" className="nav-item nav-link">Team</a> */}
          {/* <a href="/" className="nav-item nav-link">Testimonial</a> */}
          <a href="#contact" className="nav-item nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
