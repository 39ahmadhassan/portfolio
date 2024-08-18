import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
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
