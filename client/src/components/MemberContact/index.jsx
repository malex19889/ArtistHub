import React from "react";
import ListGroup from "react-bootstrap/ListGroup";


function MemberContact(props) {
    return (
        <ListGroup variant="flush" style={{textAlign:"center"}}>
            <ListGroup.Item style={{ fontWeight: "bold", textAlign: "center"}}>{props.band.firstName} {props.band.lastName} <hr /></ListGroup.Item>
            <ListGroup.Item style={{ textAlign: "center", marginTop:"0 auto" }}>
                {props.band.contact ? <p style={{ color: "black", margin: "10px" }}>Contact: {props.band.contact}</p> : <div></div>}
                {props.band.youtube ? <a style={{ color: "black", margin: "10px" }} href={props.band.youtube}>Youtube</a> : <div></div>}
                {props.band.facebook ? <a style={{ color: "black", margin: "10px" }} href={props.band.facebook}>Facebook</a> : <div></div>}
                {props.band.insta ? <a style={{ color: "black", margin: "10px" }} href={props.band.insta}>Instagram</a> : <div></div>}
                {props.band.twitter ? <a style={{ color: "black", margin: "10px" }} href={props.band.twitter}>Twitter</a> : <div></div>}
            </ListGroup.Item>
        </ListGroup>
    );
}

export default MemberContact;