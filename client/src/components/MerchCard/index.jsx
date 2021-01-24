import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useHandleInputChange from "../../hooks/useHandleInputChange";

export default function MerchCard(props) {

    const {state, handleInputChange} = useHandleInputChange();
    
    return (
        <Card style={{ width: '18rem', margin: "10px" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/80" />
            <Card.Body>
                <Card.Title>{props.merchItem}</Card.Title>
                <Card.Text>
                    {props.merchDesc}
                </Card.Text>
                <Button variant="dark">Purchase</Button>
            </Card.Body>
        </Card>
    );
}