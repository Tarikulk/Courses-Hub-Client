import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaChessKing, FaDollarSign, FaEye } from 'react-icons/fa';

const CourseDetails = ({course}) => {
    const {rating, title, author, details} = course;

    return (
        <div className='mt-5'>
           <Card className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
         <img src={author.img} className="w-50" alt="" />
        <Card.Text>
           {details}
        </Card.Text>
        <div className='d-flex justify-content-center'>
        <Button variant="primary" className='d-flex align-items-center'>Access Premium <FaChessKing className='ms-2'></FaChessKing></Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
       <div className='d-flex align-items-center justify-content-between'>
       <div className='d-flex align-items-center'>
        {rating.number}
        <FaEye className='ms-2'></FaEye>
        </div>
        <div className='d-flex align-items-center'>
            {rating.price}
            <FaDollarSign></FaDollarSign>
        </div>
       </div>
        </Card.Footer>
    </Card> 
        </div>
    );
};

export default CourseDetails;