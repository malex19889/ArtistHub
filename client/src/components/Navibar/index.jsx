import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

// come back to the modals later
// import LoginModal from "../LoginModal";
// import RegisterModal from "../RegisterModal";

//for bands: add logic to change navbar to have links to Band Home, Settings, and Logout
//for users: add logic to change navbar to have links to Favorites, Settings, and Logout


function Navibar(props) {
    return (<Navbar bg="dark" variant="dark">
        <Navbar.Brand>ArtistHub</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <button onClick={props.handleRegisterModal}>Register</button>
            <button onClick={props.handleLoginModal}>Login</button>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search For an Artist!" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
    );
}


// function Navibar() {
//     return (
//         <Navbar bg="dark" variant="dark">
//             <Navbar.Brand>ArtistHub</Navbar.Brand>
//             <Nav className="mr-auto">
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/band/register">Register</Nav.Link>
//                 <Nav.Link href="/login">Login</Nav.Link>
//                 {/* 
//                 logic for if logged in as a band - 
//                 show Home link, My Page, and Settings with search bar
//                 as a fan -
//                 show Home link, Favorites(?), and Settings with search bar
//                  */}
//             </Nav>
//             <Form inline>
//                 <FormControl type="text" placeholder="Search For an Artist!" className="mr-sm-2" />
//                 <Button variant="outline-info">Search</Button>
//             </Form>
//         </Navbar>
//     );
// }

export default Navibar;