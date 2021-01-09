import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// hooks
import useHandleInputChange from "../../hooks/useHandleInputChange"
import { useAuthContext } from "../../store/contexts/authContext"
import API from "../../utils/API"
//for bands: add logic to change navbar to have links to Band Home, Settings, and Logout
//for users: add logic to change navbar to have links to Favorites, Settings, and Logout


function Navibar(props) {
    // input change hook
    const { state, handleInputChange } = useHandleInputChange();
    const [authState, dispatch] = useAuthContext();
    // handler for searching for artists
    const handleSearch = (e) => {
        e.preventDefault();
        API.bandInfo(state)
            .then(res => console.log(res))
            .catch(err =>
                console.log(err)
            )
        console.log(state)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>ArtistHub</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {props.children}
            </Nav>
            <Form inline onSubmit={handleSearch}>
                <FormControl onChange={handleInputChange} name="search" type="text" placeholder="Search For an Artist!" className="mr-sm-2" />
                <Button type="submit" variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}
export default Navibar;