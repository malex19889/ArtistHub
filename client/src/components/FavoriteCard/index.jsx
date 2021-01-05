import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

//logic needed for these to pull from the last 3 artists added to the site
function FavoriteCard() {
    return (
        <div>
            <Container className="align-self-center">
            <Card style={{margin:"10px"}}>
                <Card.Img variant="top" src="https://via.placeholder.com/100" />
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
            </Container>
        </div >
    );
}

export default FavoriteCard;