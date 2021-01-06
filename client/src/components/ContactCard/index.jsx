import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import MemberContact from "../MemberContact";

function ContactCard(props) {

    return (
        <div>
            <Card body className="contact" style={{ float: "left", width: "100%" }}>
                <Card.Title style={{textAlign:"center", margin:"0 auto"}}>Contact</Card.Title>
                <Card.Body >
                    <Row className="align-items-center justify-content-center">
                        <Col>
                            <ListGroup variant="flush">
                                {/* need conditional logic for empty fields */}
                                <ListGroup.Item style={{ fontWeight: "bold", textAlign: "center" }}>{props.band.firstName} {props.band.lastName}</ListGroup.Item>
                                <ListGroup.Item style={{ textAlign: "center" }}>
                                    {props.band.contact ? <p style={{ color: "black", margin: "10px" }}>Contact: {props.band.contact}</p> : <div></div>}
                                    {props.band.youtube ? <a style={{ color: "black", margin: "10px" }} href={props.band.youtube}>Youtube</a> : <div></div>}
                                    {props.band.facebook ? <a style={{ color: "black", margin: "10px" }} href={props.band.facebook}>Facebook</a> : <div></div>}
                                    {props.band.insta ? <a style={{ color: "black", margin: "10px" }} href={props.band.insta}>Instagram</a> : <div></div>}
                                    {props.band.twitter ? <a style={{ color: "black", margin: "10px" }} href={props.band.twitter}>Twitter</a> : <div></div>}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row className="align-items-center justify-content-center">
                        {
                            props.band.bandMembers.map((band, i) => <MemberContact key={i + "-card"} band={band} />)
                        }
                    </Row>

                </Card.Body>
            </Card>


        </div>
    );
}

export default ContactCard;