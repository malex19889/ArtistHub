import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Navibar from "../components/Navibar";
import Footer from "../components/Footer";

import API from "../utils/API";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
require('dotenv').config();

export default function BandRegister() {

    let { id } = useParams();

    const [registerFirstname, setRegisterFirstname] = useState("");
    const [registerLastname, setRegisterLastname] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerBandname, setRegisterBandname] = useState("");
    const [registerBandBio, setRegisterBandBio] = useState("");
    const [registerGenre, setRegisterGenre] = useState("");
    const [registerContact, setRegisterContact] = useState("");
    const [registerYoutube, setRegisterYoutube] = useState("");
    const [registerFacebook, setRegisterFacebook] = useState("");
    const [registerInsta, setRegisterInsta] = useState("");
    const [registerTwitter, setRegisterTwitter] = useState("");
    const [imageState, setImageState] = useState("")

    const user = {
        firstName: registerFirstname,
        lastName: registerLastname,
        userName: registerUsername,
        email: registerEmail,
        password: registerPassword,
        bandName: registerBandname,
        bandBio: registerBandBio,
        genre: registerGenre,
        contact: registerContact,
        youtube: registerYoutube.replace("https://",""),
        facebook: registerFacebook.replace("https://",""),
        insta: registerInsta.replace("https://",""),
        twitter: registerTwitter.replace("https://",""),
        bannerImage: imageState
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        // console.log(user)
        API.bandRegister(user)
            .then(res => {
                console.log(res.data);
                if (res.data.errors){
                   alert(res.data.errors[0].message)
                } else if (!res.data.errors) {
                    console.log(res)
                    window.location.href="/home"
                }                
            })
            .catch(err => console.log(err))
    };

    const handleImageUpload = ()=>{
        let widget = window.cloudinary.createUploadWidget(
            {
              cloudName: process.env.REACT_APP_CLOUD_NAME,
              uploadPreset: "awq1uzrp",
              sources: ["local", "camera"]
            },
            (error, result) => {
              if (result.event === "success") {
              
                const file = result.info.url; 
                console.log("RESULT")
                console.log(result.info)
                console.log("file: ", file, result.info.resource_type);
                setImageState(result.info.url)
              }
            }
          );
          widget.open();
    }
    return (
        <div>
            <Navibar />
            <Container>
                <Row className="justify-content-lg-center">
                    <Col style={{ maxWidth: "500px", marginTop: "30px", marginBottom: "30px" }}>
                        <Form className="bandregister" onSubmit={handleRegisterSubmit}>

                            <h1>Band Register</h1>
                            
                            <Button onClick={handleImageUpload}>Upload band cover Pic</Button>
                            
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={e => setRegisterFirstname(e.target.value)} type="username" placeholder="Enter First Name" required />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={e => setRegisterLastname(e.target.value)} type="username" placeholder="Enter Last Name" required />
                            </Form.Group>

                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={e => setRegisterUsername(e.target.value)} type="username" placeholder="Enter username" required />
                            </Form.Group>

                            <Form.Group controlId="formBandName">
                                <Form.Label>Band Name</Form.Label>
                                <Form.Control onChange={e => setRegisterBandname(e.target.value)} type="bandName" placeholder="Enter Band Name" required />
                            </Form.Group>

                            <Form.Group controlId="formBandBio">
                                <Form.Label>Band Biography</Form.Label>
                                <Form.Control as="textarea" onChange={e => setRegisterBandBio(e.target.value)} type="bandBio" placeholder="Enter Band Bio" />
                            </Form.Group>

                            <Form.Group controlId="formGenre">
                                <Form.Label>Genre</Form.Label>
                                <Form.Control onChange={e => setRegisterGenre(e.target.value)} type="genre" placeholder="Genre" />
                            </Form.Group>

                            <Form.Group controlId="contact">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control onChange={e => setRegisterContact(e.target.value)} type="contact" placeholder="XXXXXXXXXX" />
                            </Form.Group>

                            <Form.Group controlId="formYoutube">
                                <Form.Label>Youtube Channel</Form.Label>
                                <Form.Control onChange={e => setRegisterYoutube(e.target.value)} type="youtube" placeholder="Add Link" />
                            </Form.Group>

                            <Form.Group controlId="facebook">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control onChange={e => setRegisterFacebook(e.target.value)} type="facebook" placeholder="Add Link" />
                            </Form.Group>
                            <Form.Group controlId="insta">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control onChange={e => setRegisterInsta(e.target.value)} type="insta" placeholder="Add Link" />
                            </Form.Group>
                            <Form.Group controlId="twitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control onChange={e => setRegisterTwitter(e.target.value)} type="twitter" placeholder="Add Link" />
                            </Form.Group>


                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={e => setRegisterEmail(e.target.value)} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e => setRegisterPassword(e.target.value)} type="password" placeholder="Password" required />
                            </Form.Group>

                           
                            <Form.Group>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Please agree to our Terms and Conditions.`}
                                        />
                                    </div>
                                ))}
                            </Form.Group>
                            
                            <Button variant="dark" type="submit" handleRegisterSubmit={handleRegisterSubmit}>
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
