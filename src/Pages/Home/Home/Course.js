import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = ({ course }) => {
  const { img, name, id } = course;
  console.log(course);
  return (
    <div className="mt-5">
      <Card style={{ width: "18rem", height:"20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <div className="text-center m-3">
            <Link to={`/category/${id}`} className="my-3">
              <Button variant="primary" className=' w-100 mt-5'>View Details</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
