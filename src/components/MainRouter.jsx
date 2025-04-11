import React from "react";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Registration from "./pages/Registration";
import StudentDetails from "./pages/StudentDetails";
import Update from "./pages/Update";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Routes, Route, Link } from "react-router-dom";

const MainRouter = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Responsive Navbar */}
      <Navbar bg="primary" expand="lg" fixed="top" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-warning fs-4 fs-lg-3">
            CollegeWeb
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="Registration" className="text-white">
                Registration
              </Nav.Link>
              <Nav.Link as={Link} to="StudDetails" className="text-white">
                StudentDetails
              </Nav.Link>
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item as={Link} to="contactus">
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="aboutus">
                  About Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content with padding to account for fixed navbar and footer */}
      <div
        className="flex-grow-1"
        style={{ paddingTop: "56px", paddingBottom: "60px" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="StudDetails" element={<StudentDetails />} />
          <Route path="update/:rno" element={<Update />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="contactus" element={<Contactus />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-light py-2">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="mb-1">CollegeWeb</h5>
              <p className="mb-0">Contact Number: 1234567890</p>
            </div>
            <div className="col-md-6 text-md-end">
              © 2025 CollegeWeb. All Rights Reserved
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default MainRouter;
