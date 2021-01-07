import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function FavoriteCard(props) {

    return (
        <div>
            <ListGroup.Item style={{marginBottom:"10px"}}>
                <a href={props.favorites.url}>{props.favorites.bandName}</a>
            </ListGroup.Item>
        </div>
    );
}

export default FavoriteCard;