import React from "react";
import "../App.css";
import {Card} from "react-bootstrap";


const CardBody = () => {
    return (
       
        <Card.Body>
        <Card.Title className="my-2">Improve your front-end skills by building projects</Card.Title>
        <Card.Text className="my-3">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </Card.Text>
    </Card.Body>
    
);

};

export default CardBody;

