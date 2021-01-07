import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navibar from "../components/Navibar";
import Footer from "../components/Footer";
import Logout from "../components/LogoutBtn";
import { useAuthContext } from "../store/contexts/authContext";


// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import FavoriteGroup from "../components/FavoriteGroup"
import API from "../utils/API";


export default function Favorites() {
    const [authState, dispatch] = useAuthContext();
    const [favorites, setFavorites] = useState([
        {
            bandName: "Black Sabbath",
            url: "/band/home/1"
        },
        {
            bandName: "Metallica",
            url: "band/home/:id"
        }
    ]);
    
    useEffect(() => {
        API.getFavorites(1)
            .then(res => {
                console.log(res.data)
                setFavorites(res.data)
            })
    }, [authState.id])

    return (
        <div>
            <Navibar>
                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href="/favorites">Favorites</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href="/user/settings">Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Logout>Logout</Logout>
                </Nav.Item>
            </Navibar>
            <div>
                <FavoriteGroup favorites={favorites} />
            </div>
            <Footer />
        </div>
    )
}