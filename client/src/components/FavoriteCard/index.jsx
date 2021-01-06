import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function FavoriteCard(props) {
    return (
        <div>
            <Container className="align-self-center">
            <Card style={{margin:"10px"}}>
                <Card.Img variant="top" src="https://via.placeholder.com/100" />
                <Card.Body>
                    <Card.Title><a href="/band/home/:id" style={{ color: "black" }}>{props.artist.bandName}</a></Card.Title>
                    <Card.Text>
                        {props.band.genre}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.band.createdAt}</small>
                </Card.Footer>
            </Card>
            </Container>
        </div >
    );
}

export default FavoriteCard;