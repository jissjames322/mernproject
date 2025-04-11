import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Card } from "react-bootstrap";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://mernproject-backend-kmmt.onrender.com/getStudents")
      .then((result) => setStudents(result.data))
      .catch((err) => console.log(err));
  }, []);

  const DeleteHandler = (rno) => {
    axios
      .delete(
        `https://mernproject-backend-kmmt.onrender.com/deleteStudent/${rno}`
      )
      .then((result) => {
        console.log(result);
        alert("Student Details Deleted Successfully......");
        // Refresh the list after deletion
        axios
          .get("https://mernproject-backend-kmmt.onrender.com/getStudents")
          .then((result) => setStudents(result.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid p-3">
      <h1 className="text-center text-primary mb-4">Student Details</h1>

      {/* Desktop Table View */}
      <div className="d-none d-md-block">
        <Card className="shadow">
          <Card.Body className="p-0">
            <div className="table-responsive">
              <Table striped bordered hover className="mb-0">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Course</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Contact No</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.rollno}>
                      <td>{student.rollno}</td>
                      <td>{student.name}</td>
                      <td>{student.gender}</td>
                      <td>{student.course}</td>
                      <td>{student.address}</td>
                      <td>{student.email}</td>
                      <td>{student.contactno}</td>
                      <td className="d-flex gap-2">
                        <Link
                          to={`/update/${student.rollno}`}
                          className="btn btn-sm btn-success"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => DeleteHandler(student.rollno)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Mobile Card View */}
      <div className="d-md-none">
        {students.map((student) => (
          <Card key={student.rollno} className="mb-3 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h5 className="text-primary">{student.name}</h5>
                <span className="badge bg-secondary">{student.rollno}</span>
              </div>
              <p>
                <strong>Course:</strong> {student.course}
              </p>
              <p>
                <strong>Gender:</strong> {student.gender}
              </p>
              <p>
                <strong>Email:</strong> {student.email}
              </p>
              <p>
                <strong>Contact:</strong> {student.contactno}
              </p>
              <p>
                <strong>Address:</strong> {student.address}
              </p>
              <div className="d-flex gap-2 mt-2">
                <Link
                  to={`/update/${student.rollno}`}
                  className="btn btn-sm btn-success flex-grow-1"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger flex-grow-1"
                  onClick={() => DeleteHandler(student.rollno)}
                >
                  Delete
                </button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentDetails;
