import React from "react";


import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import FavoriteCard from "../FavoriteCard";
import DeleteBtn from "../DeleteBtn";

import API from "../../utils/API"

function FavoriteGroup(props) {
    function handleDeleteFavorite(id) {
        API.deleteFavorites(id)
    }

    return (
        <div>
            <Container className="align-self-center" style={{ maxWidth: "500px" }}>
                <h1 style={{ marginBottom: "20px", marginTop: "10px" }}>My Favorites</h1>
                <ListGroup>
                    {props.favorites.map((favorites, i) =>
                        <div>
                            <FavoriteCard key={i + "-favorite"} favorites={favorites} />
                            <DeleteBtn handleDeleteFavorite={handleDeleteFavorite} id={favorites.id} />
                        </div>
                    )}
                </ListGroup>
            </Container>
        </div>
    );
}

export default FavoriteGroup;