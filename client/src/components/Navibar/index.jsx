import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


function Navibar(props) {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>ArtistHub</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/browse" style={{color:"white"}}>Browse</Nav.Link>
                {props.children}
            </Nav>
            <Form inline>
                <FormControl name="search" type="text" placeholder="Search For an Artist!" className="mr-sm-2" />
                <Button type="submit" variant="outline-info" >Search</Button>
            </Form>
        </Navbar>
    );
}
export default Navibar;