import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navibar from "../components/Navibar";
import Footer from "../components/Footer";
import Logout from "../components/LogoutBtn";
import { useAuthContext } from "../store/contexts/authContext";

import API from "../utils/API";


// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import BandCard from "../components/BandCard";

export default function Browse() {
    const [authState, dispatch] = useAuthContext();
    const [bands, setSearch] = useState([]);

    useEffect (() => {
         API.bands()
            //store this data in state, and map it in the SearchCard component
            .then(res => {
                console.log("HEY, A SEARCH: ", res.data)
                setSearch(res.data);

                //window.location.href = "/results";
            })
            .catch(err =>
                console.log(err)
            )
    }, [])
    console.log()
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
                <h2>Browse</h2>
                {bands.map((band, i) => <BandCard key={i + "-card"} band={band} />)}
                {/* {search.id ? (<SearchCard search={search} />) : (<div></div>)} */}
            </div>
            <Footer />
        </div>
    )
}