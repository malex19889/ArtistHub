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

import SearchCard from "../components/SearchCard";

export default function SearchResults() {
    const [authState, dispatch] = useAuthContext();
    const [band, setBand] = useState({});

    return (
        <div>
            <Navibar>
                <Nav.Item>
                    {authState.loggedIn && authState.isBand ? <Nav.Link style={{ color: "white" }} href={"/band/home/" + authState.id}>My Band</Nav.Link> : <Nav.Link style={{ color: "white" }} href={"/user/favorites/" + authState.id}>Favorites</Nav.Link>}
                </Nav.Item>
                <Nav.Item>
                    {authState.loggedIn && authState.isBand ? <Nav.Link style={{ color: "white" }} href={"/band/settings/" + authState.id}>Settings</Nav.Link> : <Nav.Link style={{ color: "white" }} href={"/user/settings/" + authState.id}>Settings</Nav.Link>}
                </Nav.Item>
                <Nav.Item>
                    <Logout>Logout</Logout>
                </Nav.Item>
            </Navibar>
            <div className="align-self-center">
                <h2>Search Results</h2>
                <SearchCard 
                band={band}/>
            </div>
            <Footer />
        </div>
    )
}