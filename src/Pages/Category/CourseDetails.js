import React from 'react';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaChessKing, FaDollarSign, FaEye, FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useReactToPrint} from 'react-to-print'

const CourseDetails = ({course}) => {
    const {rating, title, author, details, category_id} = course;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "emp-data",
        onAfterPrint: () => alert("Print success")
    })

    return (
        <div className='my-5 shadow-lg' data-aos="zoom-in-right">
            <div ref={componentRef} style={{width:"100%"}}>
 
      <Card className="text-center">
      <Card.Header className='d-flex align-items-center justify-content-between'>
      {title}
      <FaFileDownload onClick={handlePrint}></FaFileDownload>
      </Card.Header>
      
      <Card.Body>
         <img src={author.img} className="w-50 rounded" alt="" />
        <Card.Text>
           {details}
        </Card.Text>
        <div className='d-flex justify-content-center'>
        <Link to={`/checkout/${category_id}`}>
        <Button variant="primary" className='d-flex align-items-center'>Access Premium <FaChessKing className='ms-2'></FaChessKing></Button>
        </Link>
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
        </div>
    );
};

export default CourseDetails;