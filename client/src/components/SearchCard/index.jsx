import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function SearchCard(props) {
    return (
        <Row>
            {props.bands.map((band, i) =>
            <Card key={i+"-searched"} band={band} style={{margin:"10px"}}>
                <Card.Img variant="top" src={props.band.imgUrl} />
                <Card.Body>
                    <Card.Title><a href={"/band/home/" + props.band.id} style={{ color: "black" }}>{props.band.bandName}</a></Card.Title>
                    <Card.Text>{props.band.bandBio}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Joined {props.band.createdAt}</small>
                </Card.Footer>
            </Card>
            )}
        </Row>
    );
}

export default SearchCard;