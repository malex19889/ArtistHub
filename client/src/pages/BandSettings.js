import React, { useState } from "react";
import Navibar from "../components/Navibar";
import Footer from "../components/Footer";
import Logout from "../components/LogoutBtn";

import API from "../utils/API";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";



export default function BandSettings() {

    const [updateBandname, setUpdateBandname] = useState("");
    const [updateBandBio, setUpdateBandBio] = useState("");
    const [updateGenre, setUpdateGenre] = useState("");
    const [updateContact, setUpdateContact] = useState("");
    const [updateYoutube, setUpdateYoutube] = useState("");
    const [updateFacebook, setUpdateFacebook] = useState("");
    const [updateInsta, setUpdateInsta] = useState("");
    const [updateTwitter, setUpdateTwitter] = useState("");

    const user = {
        bandName: updateBandname,
        bandBio: updateBandBio,
        genre: updateGenre,
        contact: updateContact,
        youtube: updateYoutube,
        facebook: updateFacebook,
        insta: updateInsta,
        twitter: updateTwitter
    };

    const handleUpdateInfo = (event) => {
        event.preventDefault();
        console.log(user)
        //axios.put required to update band data
        API.update(user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navibar>
                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href="/band/home">My Band</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href="/band/settings">Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Logout>Logout</Logout>
                </Nav.Item>
            </Navibar>
            <Container>
                <Row className="Settings">
                    {/* GENERAL SETTINGS */}
                    <Col lg={4} style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}>
                        <Form className="bandregister" onSubmit={handleUpdateInfo}>

                            <h2>General Settings</h2>

                            <Form.Group controlId="formBandName">
                                <Form.Label>Band Name</Form.Label>
                                <Form.Control onChange={e => setUpdateBandname(e.target.value)} type="bandName" placeholder="Existing information, or blank" />
                            </Form.Group>

                            {/* add a form.file for new cover photo */}
                            {/* add a form.file for added images to a gallery */}

                            <Form.Group controlId="formBandBio">
                                <Form.Label>Band Biography</Form.Label>
                                <Form.Control as="textarea" onChange={e => setUpdateBandBio(e.target.value)} type="bandBio" placeholder="Existing information, or blank" />
                            </Form.Group>

                            <Form.Group controlId="formGenre">
                                <Form.Label>Genre</Form.Label>
                                <Form.Control onChange={e => setUpdateGenre(e.target.value)} type="genre" placeholder="Existing information, or blank" />
                            </Form.Group>

                            <Form.Group controlId="contact">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control onChange={e => setUpdateContact(e.target.value)} type="contact" placeholder="Existing information, or blank" />
                            </Form.Group>

                            <Form.Group controlId="formYoutube">
                                <Form.Label>Youtube Channel</Form.Label>
                                <Form.Control onChange={e => setUpdateYoutube(e.target.value)} type="youtube" placeholder="Existing information, or blank" />
                            </Form.Group>

                            <Form.Group controlId="facebook">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control onChange={e => setUpdateFacebook(e.target.value)} type="facebook" placeholder="Existing information, or blank" />
                            </Form.Group>
                            <Form.Group controlId="insta">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control onChange={e => setUpdateInsta(e.target.value)} type="insta" placeholder="Existing information, or blank" />
                            </Form.Group>
                            <Form.Group controlId="twitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control onChange={e => setUpdateTwitter(e.target.value)} type="twitter" placeholder="Existing information, or blank" />
                            </Form.Group>

                            <Button variant="dark" type="submit" handleUpdateInfo={handleUpdateInfo}>
                                Submit
                            </Button>

                        </Form>
                    </Col>

                    {/* ADD A TOUR DATE */}
                    <Col lg={4} style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}>
                        <Form className="bandregister" onSubmit={handleUpdateInfo}>

                            <h2>Add a Show</h2>

                            <Form.Group controlId="formTourName">
                                <Form.Label>Tour Name</Form.Label>
                                <Form.Control type="tourName" placeholder="Enter Tour Name, or List Performers" />
                            </Form.Group>

                            {/* add a form.file for new cover photo */}
                            {/* add a form.file for added images to a gallery */}

                            <Form.Group controlId="formTourDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="i.e., October 31, 2021" />
                            </Form.Group>

                            <Form.Group controlId="formTourTime">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="time" placeholder="i.e., 8 PM" />
                            </Form.Group>

                            <Form.Group controlId="formTourLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="location" placeholder="Enter Venue" />
                            </Form.Group>

                            <Form.Group controlId="formTourTicketPrice">
                                <Form.Label>Ticket Price</Form.Label>
                                <Form.Control type="ticketPrice" placeholder="i.e., $20" />
                            </Form.Group>

                            <Form.Group controlId="formTourNotes">
                                <Form.Label>Notes</Form.Label>
                                <Form.Control as="textarea" type="notes" placeholder="Additional Notes" />
                            </Form.Group>

                            <Button variant="dark" type="submit" handleUpdateInfo={handleUpdateInfo}>
                                Submit
                            </Button>

                        </Form>
                    </Col>

                    {/* ADD A BAND MEMBER */}
                    <Col lg={4} style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}>
                        <Form className="bandregister" onSubmit={handleUpdateInfo}>

                            <h2>Add Band Members</h2>

                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="firstName" placeholder="Enter First Name" />
                            </Form.Group>

                            {/* add a form.file for new cover photo */}
                            {/* add a form.file for added images to a gallery */}

                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="lastName" placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group controlId="formMemberContact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="memberContact" placeholder="XXXXXXXXXX" />
                            </Form.Group>

                            <Form.Group controlId="formBandRole">
                                <Form.Label>Band Role</Form.Label>
                                <Form.Control type="bandRole" placeholder="i.e., Guitarist" />
                            </Form.Group>

                            <Form.Group controlId="facebook">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control type="facebook" placeholder="Add Link" />
                            </Form.Group>

                            <Form.Group controlId="insta">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control type="insta" placeholder="Add Link" />
                            </Form.Group>

                            <Form.Group controlId="twitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control type="twitter" placeholder="Add Link" />
                            </Form.Group>

                            <Button variant="dark" type="submit" handleUpdateInfo={handleUpdateInfo}>
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}