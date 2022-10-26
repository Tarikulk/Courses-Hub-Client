import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Course.css'

const Course = ({ course }) => {
  const { img, name, id } = course;
  return (
    <div>
      <Card className="my-4">
      <Card.Body>
        <Card.Title>{name}</Card.Title> 
      </Card.Body>
      <Card.Img variant="top" className="h-75" src={img} />
      <Link to={`/course/${id}`} className="my-3"><Button variant="primary">View Details</Button></Link>
    </Card>
    </div>
  );
};

export default Course;
