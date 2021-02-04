import React from "react";


import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import FavoriteCard from "../FavoriteCard";
import DeleteFavBtn from "../DeleteFavBtn";

function FavoriteGroup(props) {

    return (
        <div>
            <Container className="align-self-center" style={{ maxWidth: "500px" }}>
                <h1 style={{ marginBottom: "20px", marginTop: "10px", textAlign:"center" }}>My Favorites</h1>
                <ListGroup>
                    {props.favorites.map((favorites, i) =>
                        <div>
                            <FavoriteCard key={i + "-favorite"} favorites={favorites} />
                            {/* <DeleteFavBtn id={favorites.id} /> */}
                        </div>
                    )}
                </ListGroup>
            </Container>
        </div>
    );
}

export default FavoriteGroup;