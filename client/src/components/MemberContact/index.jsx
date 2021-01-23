import React from "react";
import ListGroup from "react-bootstrap/ListGroup";


function MemberContact(props) {
    return (
        <ListGroup variant="flush" style={{textAlign:"center"}}>
            <ListGroup.Item style={{ fontWeight: "bold", textAlign: "center"}}>{props.band.firstName} {props.band.lastName} <hr /></ListGroup.Item>
            <ListGroup.Item style={{ textAlign: "center", marginTop:"0 auto" }}>
                {props.band.contact ? <p style={{ color: "black", margin: "10px" }}>Contact: {props.band.contact}</p> : <div></div>}
                {props.band.youtube ? <a style={{ color: "black", margin: "10px" }} href={"https://"+props.band.youtube.replace("https://","")}>Youtube</a> : <div></div>}
                {props.band.facebook ? <a style={{ color: "black", margin: "10px" }} href={"https://"+props.band.facebook.replace("https://","")}>Facebook</a> : <div></div>}
                {props.band.insta ? <a style={{ color: "black", margin: "10px" }} href={"https://"+props.band.insta.replace("https://","")}>Instagram</a> : <div></div>}
                {props.band.twitter ? <a style={{ color: "black", margin: "10px" }} href={"https://"+props.band.twitter.replace("https://","")}>Twitter</a> : <div></div>}
            </ListGroup.Item>
        </ListGroup>
    );
}

export default MemberContact;