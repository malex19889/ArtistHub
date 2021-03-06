import React from "react";
import Card from "react-bootstrap/Card";

function BandCard(props) {
    return (
        <Card style={{marginBottom:"10px"}}>
            <Card.Img variant="top" src={props.band.imgUrl} />
            <Card.Body>
                <Card.Title><a href={"/band/home/" + props.band.id} style={{ color: "black" }}>{props.band.bandName}</a></Card.Title>
                <Card.Text>{props.band.bandBio}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Joined {props.band.createdAt}</small>
            </Card.Footer>
        </Card>
    );
}

export default BandCard;