import React from "react";
import Nav from "react-bootstrap/Nav";

import Navibar from "../components/Navibar";
import Footer from "../components/Footer";
import Logout from "../components/LogoutBtn";

//import API from "../utils/API";

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import FavoriteGroup from "../components/FavoriteGroup"

const favorites = [
    {
        band: "Black Sabbath",
        url: "/band/home/1"
    },
    {
        band: "Metallica",
        url:"band/home/:id"
    }
]

export default function Favorites() {
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
                <FavoriteGroup favorites={favorites}/>
            </div>
            <Footer />
        </div>
    )
}