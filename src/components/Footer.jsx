import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,  faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-4">
            <div className='contact'>
              <a href="tel:03030853614">
                <button><PhoneIcon /></button>
              </a>
              <span>0303-0853614</span>
            </div>
          </div>
          <div className="col-md-5">
            <div className='contact'>
              <a href="mailto:39ahmadhassan@gmail.com">
                <button><EmailIcon /></button>
              </a>
              <span>39ahmadhassan@gmail.com</span>
            </div>
          </div>
          <div className="col-md-3">
            <ul className='social'>
              <li><a href="https://www.linkedin.com/in/ahmad-hassan-a39b1626b/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100090061796348" rel="noreferrer" target='_blank'> <FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="https://github.com/39ahmadhassan" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='pb-4' />
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-12">
            <p className='copyright'>© 2023 copy-right Ahmad-Hassan Made.</p>
            <p className='top'><ArrowUpwardIcon /></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
