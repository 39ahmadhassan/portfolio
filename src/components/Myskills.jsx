import React from 'react';

function Myskills() {
  return (
    <div className="container-xxl py-6 pb-5" id="skill">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 mb-5">Skills & Experience</h1>
            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
            <h3 className="mb-4">My Skills</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">HTML</h6>
                    <h6 className="font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">CSS</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Bootstrap</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">JavaScript</h6>
                    <h6 className="font-weight-bold">90%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">C</h6>
                    <h6 className="font-weight-bold">90%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">ReactJS</h6>
                    <h6 className="font-weight-bold">90%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">NodeJS</h6>
                    <h6 className="font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">WordPress</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">PHP</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">C++</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
              <li className="nav-item w-50">
                <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">Experience</button>
              </li>
              <li className="nav-item w-50">
                <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">Education</button>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6">
                    <h5>Frontend Developer</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2024 - Present</p>
                    <h6 className="mb-0">Chat Pandas</h6>
                  </div>
                  <div className="col-sm-6">
                    <h5>Associate Software Enginner</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2022 - 2023</p>
                    <h6 className="mb-0">CodeAvour Private Limited</h6>
                  </div>
                  <div className="col-sm-6">
                    <h5>Virtual Assistant</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2020 - 2022</p>
                    <h6 className="mb-0">E-Solutions</h6>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6">
                    <h5>BS Computer Science</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2018 - 2022</p>
                    <h6 className="mb-0">Govt College University Faisalabad</h6>
                  </div>
                  <div className="col-sm-6">
                    <h5>ICS</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2016 - 2018</p>
                    <h6 className="mb-0">Govt Shalimar College Baghbanpura Lahore</h6>
                  </div>
                  <div className="col-sm-6">
                    <h5>Matric</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2014 - 2016</p>
                    <h6 className="mb-0">BISE Lahore</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myskills;
