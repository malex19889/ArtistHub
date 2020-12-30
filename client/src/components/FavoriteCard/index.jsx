import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

//logic needed for these to pull from the last 3 artists added to the site
function FavoriteCard() {
    return (
        <div>
            <Col md={4} >
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Band Name</Card.Title>
                    <Card.Text>
                        Genre
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Date Added Goes Here</small>
                </Card.Footer>
            </Card>
            </Col>
        </div >
    );
}

export default FavoriteCard;