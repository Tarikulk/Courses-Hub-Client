import React from 'react'; 
import Card from 'react-bootstrap/Card';
import { FaDollarSign, FaEye } from 'react-icons/fa';

const PremiumCategory = ({premium}) => {
    const {rating, title, author, details} = premium;
    return (
        <div className='m-5'>
        <Card className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
         <img src={author.img} className="w-50" alt="" />
        <Card.Text>
           {details}
        </Card.Text> 
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

export default PremiumCategory;