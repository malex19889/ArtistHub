import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import FavoriteCard from "../FavoriteCard";
import DeleteBtn from "../DeleteBtn";

import { useAuthContext } from "../../store/contexts/authContext";
import API from "../../utils/API"

function FavoriteGroup(props) {

    const [bandState, setBandState] = useState({});
    const [authState, dispatch] = useAuthContext();
    let {id} = useParams();

    useEffect(() => {
        console.log(id)
       API.bandInfoById(id)
       .then((res) => {
           console.log(res)
        //    setBandState(res)
       })
       .catch(err=> console.log(err))
    })

    function handleDeleteFavorite(id) {
        console.log(authState);
        const obj = { id, authState }
        API.deleteFavorites(obj)
    }

    return (
        <div>
            <Container className="align-self-center" style={{ maxWidth: "500px" }}>
                <h1 style={{ marginBottom: "20px", marginTop: "10px" }}>My Favorites</h1>
                <ListGroup>
                    {props.favorites.map((favorites, i) =>
                        <div>
                            <FavoriteCard key={i + "-favorite"} favorites={favorites} />
                            <DeleteBtn handleDeleteFavorite={handleDeleteFavorite} id={props.favorites.id} />
                        </div>
                    )}
                </ListGroup>
            </Container>
        </div>
    );
}

export default FavoriteGroup;