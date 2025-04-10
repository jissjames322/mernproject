import React from "react";
import college from '../images/image1.jpg';

const AboutUs = () => {
  return (
    <section className="py-5 bg-gradient-primary-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">About Our College</h2>
          <p className="lead text-muted">
            Discover our rich history, values, and commitment to excellence
          </p>
        </div>

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <img
              src={college}
              alt="College Campus"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">Pioneering Education Since 1950</h3>
            <p className="lead mb-4">
              Founded in 2001, our college has been at the forefront of
              providing quality education to students from diverse backgrounds.
              We believe in nurturing not just academic excellence but also
              character and leadership qualities in our students.
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div
                      className="bg-primary bg-opacity-10 rounded-circle p-3 mb-3 mx-auto"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <i className="fas fa-graduation-cap fa-2x text-primary"></i>
                    </div>
                    <h4 className="h5">Academic Excellence</h4>
                    <p className="text-muted small mb-0">
                      Top-ranked programs with industry-relevant curriculum
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div
                      className="bg-primary bg-opacity-10 rounded-circle p-3 mb-3 mx-auto"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <i className="fas fa-users fa-2x text-primary"></i>
                    </div>
                    <h4 className="h5">Diverse Community</h4>
                    <p className="text-muted small mb-0">
                      Students from 25+ countries creating a global learning
                      environment
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div
                      className="bg-primary bg-opacity-10 rounded-circle p-3 mb-3 mx-auto"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <i className="fas fa-flask fa-2x text-primary"></i>
                    </div>
                    <h4 className="h5">Research Focus</h4>
                    <p className="text-muted small mb-0">
                      Cutting-edge research facilities and opportunities
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div
                      className="bg-primary bg-opacity-10 rounded-circle p-3 mb-3 mx-auto"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <i className="fas fa-briefcase fa-2x text-primary"></i>
                    </div>
                    <h4 className="h5">Career Support</h4>
                    <p className="text-muted small mb-0">
                      95% placement rate with top companies worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold border-bottom pb-3 mb-3">Our Mission</h3>
                <p className="lead">
                  To empower students with knowledge, skills, and values that
                  prepare them to be responsible global citizens and leaders in
                  their chosen fields.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold border-bottom pb-3 mb-3">Our Vision</h3>
                <p className="lead">
                  To be recognized as a premier institution of higher learning
                  that transforms lives through education, innovation, and
                  service to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
