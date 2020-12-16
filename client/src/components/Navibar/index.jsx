import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Navibar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>ArtistHub</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#RegisterModalGoesHere">Register</Nav.Link>
                <Nav.Link href="#LoginModalGoesHere">Login</Nav.Link>
                {/* 
                logic for if logged in as a band - 
                show Home link, My Page, and Settings with search bar
                as a fan -
                show Home link, Favorites(?), and Settings with search bar
                 */}
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search For an Artist!" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Navibar;