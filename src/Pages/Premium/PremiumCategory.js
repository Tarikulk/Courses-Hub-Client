import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaDollarSign, FaEye } from "react-icons/fa";

const PremiumCategory = ({ premium }) => {
  const { rating, title, author, details } = premium;
  return (
    <Card className="mt-5">
      <Card.Img variant="top" src={author.img} style={{ height: "250px" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Card.Footer className="text-muted">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              {rating.number}
              <FaEye className="ms-2"></FaEye>
            </div>
            <div className="d-flex align-items-center">
              {rating.price}
              <FaDollarSign></FaDollarSign>
            </div>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default PremiumCategory;

 