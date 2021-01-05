import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import BandJumbotron from "../components/BandJumbotron";
import BandBioCard from "../components/BandBioCard";
import EventsGroup from "../components/EventsGroup";
import MerchCard from "../components/MerchCard";
import Navibar from "../components/Navibar";
import Logout from "../components/LogoutBtn";
import ContactCard from "../components/ContactCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import API from "../utils/API";

export default function BandHome() {
    const band = {
        firstName: "Ozzy",
        lastName: "Osbourne",
        bandName: "Black Sabbath",
        bandBio: "Black Sabbath were an English rock band formed in Birmingham in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and vocalist Ozzy Osbourne. They are often cited as pioneers of heavy metal music. The band helped define the genre with releases such as Black Sabbath (1970), Paranoid (1970), and Master of Reality (1971). The band had multiple line-up changes following Osbourne's departure in 1979, with Iommi being the only constant member throughout its history.",
        genre: "Doom",
        bannerImage: "",
        contact: "2134567",
        youtube: "https://www.youtube.com/",
        facebook: "https://www.facebook.com/",
        insta: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
        bandMembers: [
            {
                firstName: "Tony",
                lastName: "Iommi",
                contact: "6368425",
                bandRole: "Guitar",
                facebook: "https://www.facebook.com/",
                insta: "https://www.instagram.com/",
                twitter: "https://twitter.com/"
            },
            {
                firstName: "Geezer",
                lastName: "Butler",
                contact: "3792674",
                bandRole: "Bass",
                facebook: "https://www.facebook.com/",
                insta: "https://www.instagram.com/",
                twitter: "https://twitter.com/"
            },
            {
                firstName: "Bill",
                lastName: "Ward",
                contact: "2693573",
                bandRole: "Drums",
                facebook: "https://www.facebook.com/",
                insta: "https://www.instagram.com/",
                twitter: "https://twitter.com/"
            }
        ]
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
                        <ContactCard band={band} />
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