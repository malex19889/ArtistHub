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
                <Card.Title style={{ textAlign: "center", margin: "0 auto", fontWeight:"bolder", fontSize:"25px", border:"2px #dbe0e6 solid", padding:"5px" }}>Contact</Card.Title>
                <Card.Body >
                    <Row className="align-items-center justify-content-center">
                        <Col>
                            <ListGroup variant="flush">
                                {/* need conditional logic for empty fields */}
                                <ListGroup.Item style={{ fontWeight: "bold", textAlign: "center" }}>{props.band.firstName} {props.band.lastName}
                                    <hr />
                                    {/* <ListGroup.Item style={{ textAlign: "center", marginTop: "0 auto" }}> */}
                                    {props.band.contact ? <p style={{ fontWeight: "normal", color: "black", margin: "10px", textAlign: "center", marginTop: "0 auto" }}>Contact: {props.band.contact}</p> : <div></div>}
                                    {props.band.youtube ? <a style={{ fontWeight: "normal", color: "black", margin: "10px", textAlign: "center", marginTop: "0 auto" }} href={"https://" + props.band.youtube.replace("https://", "")}>Youtube</a> : <div></div>}
                                    {props.band.facebook ? <a style={{ fontWeight: "normal", color: "black", margin: "10px", textAlign: "center", marginTop: "0 auto" }} href={"https://" + props.band.facebook.replace("https://", "")}>Facebook</a> : <div></div>}
                                    {props.band.insta ? <a style={{ fontWeight: "normal", color: "black", margin: "10px", textAlign: "center", marginTop: "0 auto" }} href={"https://" + props.band.insta.replace("https://", "")}>Instagram</a> : <div></div>}
                                    {props.band.twitter ? <a style={{ fontWeight: "normal", color: "black", margin: "10px", textAlign: "center", marginTop: "0 auto" }} href={"https://" + props.band.twitter.replace("https://", "")}>Twitter</a> : <div></div>}
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