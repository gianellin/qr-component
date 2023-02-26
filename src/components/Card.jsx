import React from "react";
import "../App.css";
import {Card} from "react-bootstrap";
import CardImage from "./CardImage.jsx";
import CardBody from "./CardBody.jsx";


const Build = () => {
    return (
       
        <Card style={{  width: '20rem',
                        padding: '1.3vh',
                     }}
        className="shadow p-3 bg-white rounded-4 ">
            <CardImage />
            <CardBody />
                
        </Card>
);

}

export default Build;