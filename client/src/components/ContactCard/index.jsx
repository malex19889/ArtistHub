import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import API from "../../utils/API";

function ContactCard(props) {
    const band = []

    function handleFavorite(bandUserId) {
        API.favorite(bandUserId)
    }

    return (
        <div>
            <Card body className="contact" style={{ marginLeft: "10px", marginRight: "10px", float: "left", width: "100%" }}>
                <Card.Title>Contact</Card.Title>
                <Card.Body>

                    <Row>
                        <Col>
                            <ListGroup variant="flush">
                                {/* need conditional logic for empty fields */}
                                <ListGroup.Item style={{ fontWeight: "bold", textAlign: "center" }}>{props.band.firstName} {props.band.lastName}</ListGroup.Item>
                                <ListGroup.Item style={{ textAlign: "center" }}>
                                    <a style={{ color: "black", margin: "10px" }} href={props.band.youtube}>Youtube</a>
                                    <a style={{ color: "black", margin: "10px" }} href={props.band.facebook}>Facebook</a>
                                    <a style={{ color: "black", margin: "10px" }} href={props.band.insta}>Instagram</a>
                                    <a style={{ color: "black", margin: "10px" }} href={props.band.twitter}>Twitter</a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                        <Row>
                            <ListGroup variant="flush">
                                for loop
                                <ListGroup.Item style={{ fontWeight: "bold", textAlign: "center" }}>{props.band.bandMembers[0].firstName} {props.band.bandMembers[0].lastName}</ListGroup.Item>
                                <ListGroup.Item style={{ textAlign: "center" }}>
                                    {props.band.youtube ? <a style={{ color: "black", margin: "10px" }} href={props.band.youtube}>Youtube</a> : <div></div>}
                                    {props.band.facebook ? <a style={{ color: "black", margin: "10px" }} href={props.band.facebook}>Facebook</a> : <div></div>}
                                    {props.band.insta ? <a style={{ color: "black", margin: "10px" }} href={props.band.insta}>Instagram</a> : <div></div>}
                                    {props.band.insta<a style={{ color: "black", margin: "10px" }} href={props.band.twitter}>Twitter</a>}
                                </ListGroup.Item>
                            </ListGroup>
                        </Row>

                </Card.Body>
            </Card>


        </div>
    );
}

export default ContactCard;