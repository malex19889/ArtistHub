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
    
    const [registerStreet, setRegisterStreet] = useState("");
    const [registerCity, setRegisterCity] = useState("");
    const [registerSt, setRegisterSt ] = useState("");
    const [registerZip, setRegisterZip ] = useState("");
    const [registerCountry, setRegisterCountry ] = useState("");

    //need to add mailing address properties to model
    //looking into Google Maps API for autofill/validation
    const user = {
        street: registerStreet,
        city: registerCity,
        st: registerSt,
        zip: registerZip,
        country: registerCountry
    };

    const handleUpdateAddress = (event) => {
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
                        <Form className="bandregister" onSubmit={handleUpdateAddress}>

                            <h1>Settings</h1>

                            <Form.Group controlId="formStreet">
                                <Form.Label>Street</Form.Label>
                                <Form.Control onChange={e => setRegisterStreet(e.target.value)} type="bandName" placeholder="Existing information, or blank" />
                            </Form.Group>

                            <Form.Group controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={e => setRegisterCity(e.target.value)} type="bandBio" placeholder="Existing information, or blank" />
                            </Form.Group>

                            <Form.Group controlId="formSt">
                                <Form.Label>State</Form.Label>
                                <Form.Control onChange={e => setRegisterSt(e.target.value)} type="genre" placeholder="Existing information, or blank" />
                            </Form.Group>

                            <Form.Group controlId="formZip">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control onChange={e => setRegisterZip(e.target.value)} type="contact" placeholder="Existing information, or blank" />
                            </Form.Group>

                            <Form.Group controlId="formCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control onChange={e => setRegisterCountry(e.target.value)} type="youtube" placeholder="Existing information, or blank" />
                            </Form.Group>


                            <Button variant="dark" type="submit" handleUpdateAddress={handleUpdateAddress}>
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