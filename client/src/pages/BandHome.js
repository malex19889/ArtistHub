import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import BandJumbotron from "../components/BandJumbotron";
import BandBioCard from "../components/BandBioCard";
import EventsGroup from "../components/EventsGroup";
import MerchCard from "../components/MerchCard";
import Navibar from "../components/Navibar";
import Logout from "../components/LogoutBtn";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import API from "../utils/API";
// useParams to set id
export default function BandHome() {
    const band = {
        bandName: "band1",
        bandBio: "we rock",
        genre: "rock",
        bannerImage: "",
        contact: "2134567",
        youtube: "www.youtube.com",
        facebook: "samefacebooc.com",
        insta: "instagram.com",
        twitter: "twitter.com",
        bandmembers: [{ firstName: "me", lastName: "you", contact: "123456", bandRole: "bass", facebook: "facebook.com", insta: "insta.com", twitter: "twitter.com" }, { firstName: "2", lastName: "3", contact: "456789", bandRole: "guitar", facebook: "facebook2.com", insta: "insta2.com", twitter: "twitter2.com" }]
    };
    const tour = [
        {
            tourName: "Summer Slaughter Tour",
            date: "July 10, 2021",
            time: "9 PM",
            location: "Stubb's BBQ, Austin, TX",
            ticketPrice: "$15",
            notes: "BYOB, 1 hour set, opener has cancelled and we'll be going on at 10 PM."
        }
    ]
    const [bandState, setBandState] = useState({})
    let {id} = useParams();
    useEffect(() => {
       API.bandInfoById(id)
       .then((res) => {
           console.log(res)
           setBandState(res)
       })
       .catch(err=> console.log(err))
    })
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

            <BandJumbotron band={band} />
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        <BandBioCard band={band} />
                    </Col>
                    <Col lg={5}>
                        <EventsGroup tour={tour} />
                    </Col>
                    <Col lg={4}>
                        {/* <MembersCard /> */}
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="d-flex align-items-center justify-content-center">
                            <MerchCard />
                            <MerchCard />
                            <MerchCard />
                            <MerchCard />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}