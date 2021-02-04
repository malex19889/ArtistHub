import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteFavBtn from "../DeleteFavBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FavoriteCard(props) {

    return (
        <div>
            <Row>
                <Col style={{ padding: "10px" }}>
                    <ListGroup.Item>
                        <a style={{color:"black", textDecoration:"underline"}}href={props.favorites.url}>{props.favorites.band}</a>
                    </ListGroup.Item>
                </Col>
                <Col style={{ margin: "10px", marginTop:"15px" }}>
                    <DeleteFavBtn style={{ float: "right"}} id={props.favorites.id} />
                </Col>
            </Row>
        </div>
    );
}

export default FavoriteCard;