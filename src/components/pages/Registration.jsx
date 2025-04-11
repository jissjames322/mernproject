import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

const Registration = () => {
  const [rollno, setRollno] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [course, setCourse] = useState("MCA");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://mernproject-backend-kmmt.onrender.com/getMaxrollno")
      .then((result) => {
        const new_rollno = result.data.maxValue + 1;
        setRollno(new_rollno);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mernproject-backend-kmmt.onrender.com/registration", {
        rollno,
        name,
        gender,
        course,
        address,
        email,
        contactno,
      })
      .then((result) => {
        console.log(result);
        alert("Registration completed successfully");
        navigate("/StudDetails");
      })
      .catch((err) => {
        console.log(err);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center text-primary mb-4">
                Student Registration
              </h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Roll No</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={rollno || ""}
                    readOnly
                    className="text-center"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Name</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Gender</strong>
                  </Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Male"
                      name="gender"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={() => setGender("Male")}
                      required
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Female"
                      name="gender"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={() => setGender("Female")}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Course</strong>
                  </Form.Label>
                  <Form.Select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  >
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="MSc">MSc</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Address</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Email</strong>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}"
                    title="Please enter a valid email address"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    <strong>Contact Number</strong>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter Contact Number"
                    value={contactno}
                    onChange={(e) => setContactno(e.target.value)}
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit numeric contact number"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Register
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
