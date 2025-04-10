import React from "react";
const ContactUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Contact Us</h2>
          <p className="lead text-muted">
            We'd love to hear from you! Reach out with any questions or
            inquiries.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="card mb-4 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex mb-4">
                  <div className="bg-primary rounded-circle p-3 text-white me-4">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                  <div>
                    <h3 className="h5">Address</h3>
                    <p className="text-muted mb-0">
                      Macfast College, Education City
                    </p>
                    <p className="text-muted">
                      Thiruvalla, Pathanamthitta 689582
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="bg-primary rounded-circle p-3 text-white me-4">
                    <i className="fas fa-phone-alt fa-2x"></i>
                  </div>
                  <div>
                    <h3 className="h5">Phone</h3>
                    <p className="text-muted mb-0">+91 80 1234 5678</p>
                    <p className="text-muted">+91 98765 43210</p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="bg-primary rounded-circle p-3 text-white me-4">
                    <i className="fas fa-envelope fa-2x"></i>
                  </div>
                  <div>
                    <h3 className="h5">Email</h3>
                    <p className="text-muted mb-0">info@college.edu</p>
                    <p className="text-muted">admissions@college.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      rows="5"
                      className="form-control form-control-lg"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
