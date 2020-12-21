import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"


export default function MerchCard() {
    return (
            <Card style={{ width: '18rem', margin:"10px" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Merch Item</Card.Title>
                    <Card.Text>
                        Short description of merch item.
                </Card.Text>
                    <Button variant="dark">Purchase</Button>
                </Card.Body>
            </Card>

    );
}