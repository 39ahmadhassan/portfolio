import React from 'react';

function Footer() {
  return (
    <>
      <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-xxl pt-5 px-0">
          <div className="bg-dark">
		  <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ width: '100%', height: '450px', border: '0' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps location of New York, USA" 
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom text-secondary" href="/">Your Site Name</a>, All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a className="border-bottom text-secondary" href="https://htmlcodex.com">HTML Codex</a>
              <br />
              Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
