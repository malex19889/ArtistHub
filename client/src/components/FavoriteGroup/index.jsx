import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import FavoriteCard from "../FavoriteCard";

function FavoriteGroup(props) {

    return (
        <div>
            <Container className="align-self-center" style={{maxWidth:"500px"}}>
                <h1 style={{marginBottom:"20px", marginTop:"10px"}}>My Favorites</h1>
                <ListGroup>
                    {props.favorites.map((favorites, i) => <FavoriteCard key={i + "-favorite"} favorites={favorites} />)}
                </ListGroup>
            </Container>
        </div>
    );
}

export default FavoriteGroup;