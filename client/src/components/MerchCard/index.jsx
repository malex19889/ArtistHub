import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export default function MerchCard(props) {

    return (
        <Row className="align-items-center justify-content-center">
            {console.log("merch " + props)}
            {props.merch.map((merch, i) =>
                <Card key={i + "-merchItem"} merch={merch} style={{ width: '18rem', margin: "10px" }}>
                    <Card.Img variant="top" src={props.merch.image} />
                    <Card.Body>
                        <Card.Title>{props.merch.itemName}</Card.Title>
                        <Card.Text>
                            {"$" + props.merch.price}
                            {props.merch.description}
                        </Card.Text>
                        <Button variant="dark">Purchase</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{props.merch.quantity}</Card.Footer>
                </Card>
            )}
        </Row>
    );
}