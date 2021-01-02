import React from "react";
import Navibar from "../components/Navibar";
import Footer from "../components/Footer";

//import API from "../utils/API";

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import FavoriteCard from "../components/FavoriteCard"

export default function Favorites() {
    return (
        <div>
            <Navibar />
            <div>
                <FavoriteCard />
                <FavoriteCard />
                <FavoriteCard />
            </div>
            <Footer />
        </div>
    )
}