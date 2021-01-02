import React, { useState } from "react";
import Navibar from "../components/Navibar";
import Footer from "../components/Footer";

import API from "../utils/API";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


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
            <Navibar />
            <Container>
                <Row className="justify-content-lg-center">
                    <Col style={{ maxWidth: "500px", marginTop: "30px", marginBottom: "30px" }}>
                        <Form className="bandregister" onSubmit={handleUpdateInfo}>

                            <h1>Settings</h1>

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
                </Row>
            </Container>

            <Footer />
        </div>
    );
}