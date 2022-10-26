import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Course.css'

const Course = ({ course }) => {
  const { img, name, id } = course;
  console.log(course)
  return (
    <div>
      <Card className="my-4">
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title> 
      </Card.Body>
      <Card.Img variant="top" className="h-75" src={img} />
      <div className="text-center my-3">
      <Link to={`/category/${id}`} className="my-3"><Button variant="primary">View Details</Button></Link>
      </div>
    </Card>
    </div>
  );
};

export default Course;
