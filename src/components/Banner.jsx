import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../assets/img/profile.png';

function Banner() {
  // State to handle video URL and modal visibility
  const [videoSrc, setVideoSrc] = useState('');
  const [show, setShow] = useState(false);

  // Function to handle the modal video play button click
  const handlePlayVideo = (src) => {
    setVideoSrc(src);
    setShow(true);
  };

  // Function to handle modal close, to reset video source
  const handleClose = () => {
    setShow(false);
    setVideoSrc('');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="/" className="navbar-brand d-block d-lg-none">
          <h1 className="text-primary fw-bold m-0">ProMan</h1>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link active">Home</a>
            <a href="/" className="nav-item nav-link">About</a>
            <a href="/" className="nav-item nav-link">Skills</a>
            <a href="/" className="nav-item nav-link">Services</a>
          </div>
          <a href="/" className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
            <h1 className="text-primary fw-bold m-0">ProMan</h1>
          </a>
          <div className="navbar-nav me-auto py-0">
            <a href="/" className="nav-item nav-link">Projects</a>
            <a href="/" className="nav-item nav-link">Team</a>
            <a href="/" className="nav-item nav-link">Testimonial</a>
            <a href="/" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container-fluid bg-light my-6 mt-0" id="home">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
              <h3 className="text-primary mb-3">I'm</h3>
              <h1 className="display-3 mb-3">Kate Winslet</h1>
              <h2 className="typed-text-output d-inline">Frontend Developer</h2>
              <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
              <div className="d-flex align-items-center pt-5">
                <a href="/" className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                <button
                  type="button"
                  className="btn-play"
                  onClick={() => handlePlayVideo("https://www.youtube.com/watch?v=l3nvibMlFEM&t=578s")}
                >
                  <span></span>
                </button>
                <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={profile} alt="Profile" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>YouTube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src={videoSrc}
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Banner;
