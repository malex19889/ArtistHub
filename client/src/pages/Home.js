import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import BioCard from "../components/BioCard";
import BandGroup from "../components/BandGroup";
import Logout from "../components/LogoutBtn";
import Navibar from '../components/Navibar';
import ModalA from "../components/Modal";
import Login from "../components/Login";
import Register from "../components/Register";
// global auth context
import { useAuthContext } from "../store/contexts/authContext"
import API from "../utils/API";


//need an API call to get artists from the database


export default function Home() {


    const [authState, dispatch] = useAuthContext();
    const [bands, setBands] = useState([
        {
            bandName: "Black Sabbath",
            bandBio: "Black Sabbath were an English rock band formed in Birmingham in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and vocalist Ozzy Osbourne. They are often cited as pioneers of heavy metal music. The band helped define the genre with releases such as Black Sabbath (1970), Paranoid (1970), and Master of Reality (1971). The band had multiple line-up changes following Osbourne's departure in 1979, with Iommi being the only constant member throughout its history.",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabs.jpg/580px-Sabs.jpg",
            createdAt: "1968"
        },
        {
            bandName: "Rush",
            bandBio: "Rush was a Canadian rock band formed in Toronto in 1968, consisting of Geddy Lee (bass, vocals, keyboards, composer), Alex Lifeson (guitars, composer), and Neil Peart (drums, percussion, lyricist). After its formation in 1968, the band went through several configurations until arriving at its classic lineup with the addition of Peart in 1974, just after the release of their eponymous debut album, which contained their first highly-regarded song, \"Working Man\".",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yH1guXuFSm7h2TpDuDbA9QHaEh%26pid%3DApi&f=1",
            createdAt: "1968"
        },
        {
            bandName: "Pink Floyd",
            bandBio: "Pink Floyd were an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre.",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d6/Pink_Floyd_-_all_members.jpg",
            createdAt: "1965"
        },
    ]);
    useEffect(() => {
        API.bands()
            .then(res => {
                console.log("effect log", res.data)
                setBands(res.data)
            })
    }, [])
    //no login render
    if (!authState.loggedIn) {
        return (
            <div>
                <Navibar>
                    <ModalA
                        loginRegister="Login">
                        <h2>Login</h2>
                        <Login></Login>
                    </ModalA>

                    <ModalA
                        loginRegister="Register">
                        <h2>Register</h2>
                        <Register></Register>
                    </ModalA>
                </Navibar>
                <Jumbotron />
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <BioCard />
                        </Col>
                        <Col md={8}>
                            <BandGroup bands={bands} />
                        </Col>
                    </Row>
                </Container>

            </div>

        )
        //bandUser render
        // ANOTHER ELSE NEEDED: if authState.id = session's id, render page
    } else if (authState.loggedIn && authState.isBand) {
        return (
            <div>
                <Navibar>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/home/" + authState.id}>My Band</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/settings/" + authState.id}>Settings</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Logout>Logout</Logout>
                    </Nav.Item>
                </Navibar>
                <Jumbotron />
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <BioCard />
                        </Col>
                        <Col md={8}>
                            <BandGroup bands={bands} />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
        //user render
    } else return (
        <div>
            <Navibar>
                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href={"/user/favorites/" + authState.id}>Favorites</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href={"/user/settings/" + authState.id}>Settings</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Logout>Logout</Logout>
                </Nav.Item>
            </Navibar>
            <Jumbotron />
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <BioCard />
                    </Col>
                    <Col md={8}>
                        <BandGroup bands={bands} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}