import React from "react";
import Card from "react-bootstrap/Card"

function BioCard(props) {
    return (
        <div>
            <Card body className="bandbio" style={{ float: "left", width:"100%" }}>
                <Card.Title style={{ textAlign: "center", margin: "0 auto", fontWeight:"bolder", fontSize:"25px", border:"2px #dbe0e6 solid", padding:"5px" }}>Band Bio</Card.Title>
                <Card.Body>{props.band.bandBio}</Card.Body>
            </Card>
        </div>
    );
}

export default BioCard;
