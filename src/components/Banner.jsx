import React, { useState, useEffect, useMemo } from 'react';
import { Modal, Button } from 'react-bootstrap';
import profile from '../assets/img/profile.png';

function Banner() {
  const [videoSrc, setVideoSrc] = useState('');
  const [show, setShow] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = useMemo(() => ['Web Developer', 'Frontend Developer', 'Web Designer'], []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypedText((prev) => prev.slice(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);
      } else {
        setTypedText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }
    }, typeSpeed);

    if (!isDeleting && letterIndex === currentWord.length) {
      clearTimeout(timeout);
      setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
    } else if (isDeleting && letterIndex === 0) {
      clearTimeout(timeout);
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, wordIndex, words]);

  const handlePlayVideo = (src) => {
    const embedSrc = src.replace("watch?v=", "embed/");
    setVideoSrc(embedSrc);
    setShow(true);
  };

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
              <h1 className="display-3 mb-3">Ahmad Hassan</h1>
              <div style={{ height: '40px' }}>
                <h2 className="typed-text-output d-inline">{typedText}</h2>
              </div>
              <div className="d-flex align-items-center pt-5">
                <a href='/Ahmad_hassan_resume.pdf' className="btn btn-primary py-3 px-4 me-5" download="Ahmad_Hassan_CV.pdf">
                  Download CV
                </a>
                <button
                  type="button"
                  className="btn-play"
                  onClick={() => handlePlayVideo("https://www.youtube.com/watch?v=kgVCQFN9COY")}
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>YouTube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src={videoSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
