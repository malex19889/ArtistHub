import React from "react";
import Card from "react-bootstrap/Card"

function BioCard(props) {
    return (
        <div>
            <Card body className="bandbio" style={{ marginLeft: "10px", marginRight: "10px", float: "left" }}>
                <Card.Title>Band Bio</Card.Title>
                {props.band.bandBio}
            </Card>
        </div>
    );
}

export default BioCard;