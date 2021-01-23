import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function SearchCard(props) {
    return (
        <Row>
            {console.log(props)}
            {props.search.map((search, i) =>
            <Card key={i+"-searched"} search={search} style={{margin:"10px"}}>
                <Card.Img variant="top" src={props.search.imgUrl} />
                <Card.Body>
                    <Card.Title><a href={"/band/home/" + props.search.id} style={{ color: "black" }}>{props.search.bandName}</a></Card.Title>
                    {console.log(props.search.bandName)}
                    <Card.Text>{props.search.bandBio}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Joined {props.search.createdAt}</small>
                </Card.Footer>
            </Card>
            )}
        </Row>
    );
}

export default SearchCard;