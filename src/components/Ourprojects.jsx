import React from 'react';
import project1 from '../assets/img/project-1.jpg';
import project2 from '../assets/img/project-2.jpg';
import project3 from '../assets/img/project-3.jpg';
import project4 from '../assets/img/project-4.jpg';
import project5 from '../assets/img/project-5.jpg';
import project6 from '../assets/img/project-6.jpg';

function Ourprojects() {
  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Projects</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
              <li className="mx-3 active" data-filter="*">All Projects</li>
              <li className="mx-3" data-filter=".first">UI/UX Design</li>
              <li className="mx-3" data-filter=".second">Graphic Design</li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-4 col-md-6 portfolio-item first">
            <div className="portfolio-img rounded overflow-hidden">
              <img className="img-fluid" src={project1} alt="Project 1" />
              <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project1} data-lightbox="portfolio">
                  <i className="fa fa-eye"></i>
                </a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="/">
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second">
            <div className="portfolio-img rounded overflow-hidden">
              <img className="img-fluid" src={project2} alt="Project 2" />
              <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project2} data-lightbox="portfolio">
                  <i className="fa fa-eye"></i>
                </a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="/">
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item first">
            <div className="portfolio-img rounded overflow-hidden">
              <img className="img-fluid" src={project3} alt="Project 3" />
              <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project3} data-lightbox="portfolio">
                  <i className="fa fa-eye"></i>
                </a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="/">
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second">
            <div className="portfolio-img rounded overflow-hidden">
              <img className="img-fluid" src={project4} alt="Project 4" />
              <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project4} data-lightbox="portfolio">
                  <i className="fa fa-eye"></i>
                </a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="/">
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item first">
            <div className="portfolio-img rounded overflow-hidden">
              <img className="img-fluid" src={project5} alt="Project 5" />
              <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project5} data-lightbox="portfolio">
                  <i className="fa fa-eye"></i>
                </a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="/">
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second">
            <div className="portfolio-img rounded overflow-hidden">
              <img className="img-fluid" src={project6} alt="Project 6" />
              <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project6} data-lightbox="portfolio">
                  <i className="fa fa-eye"></i>
                </a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="/">
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourprojects;
