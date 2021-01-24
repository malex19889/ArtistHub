import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../store/contexts/authContext";

import BandJumbotron from "../components/BandJumbotron";
import BandBioCard from "../components/BandBioCard";
import EventsGroup from "../components/EventsGroup";
import Navibar from "../components/Navibar";
import Logout from "../components/LogoutBtn";
import ContactCard from "../components/ContactCard";
import FavBtn from "../components/FavBtn";
import ModalA from "../components/Modal";
import Login from "../components/Login";
import Register from "../components/Register";
import MerchCard from "../components/MerchCard";

import useModal from "../hooks/useModal";

import API from "../utils/API";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export default function BandHome() {
    const { isShown, toggle } = useModal();

    const [authState, dispatch] = useAuthContext();
    const [band, setBand] = useState({
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
        ],

        tour: [
            {
                tourName: "Summer Slaughter Tour",
                date: "July 10, 2021",
                time: "9 PM",
                location: "Stubb's BBQ, Austin, TX",
                ticketPrice: "$15",
                notes: "BYOB, 1 hour set, opener has cancelled and we'll be going on at 10 PM."
            },
            {
                tourName: "Summer Slaughter Tour",
                date: "July 12, 2021",
                time: "9 PM",
                location: "Zombies, San Antonio, TX",
                ticketPrice: "$20",
                notes: "Open bar. Please bring ID, 21+ show."
            }
        ]
    });
    const [merch, setMerch] = useState(
        [
            {
                merchImg: "https://via.placeholder.com/80",
                merchItem: "Cool Ass T-Shirt",
                merchDesc: "Look at this sweet fuckin top yo, how sick is this",
                merchQuantity: "666"
            }
        ]
    )

    console.log(authState)
    let { id } = useParams();
    // useEffect(() => {
    //     console.log(id)
    //     API.merchInfoById(id)
    //         .then((res) => {
    //             setBand(res.data);
    //         })
    //         .catch(err => console.log(err));
    // }, [id])

    if (!authState.loggedIn) {
        return (
            <div>
                <Navibar>
                    <ModalA
                        onClick={toggle}
                        isShown={isShown}
                        hide={toggle}
                        loginRegister="Login">
                        <h2>Login</h2>
                        <Login></Login>
                    </ModalA>

                    <ModalA
                        onClick={toggle}
                        isShown={isShown}
                        hide={toggle}
                        loginRegister="Register">
                        <h2>Register</h2>
                        <Register></Register>
                    </ModalA>
                </Navibar>

                <BandJumbotron band={band} />
                <Container fluid>
                    <MerchCard merch={merch} />
                </Container>

            </div>
        );
    } else if (authState.loggedIn && authState.isBand) {
        return (
            <div>
                <Navibar>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/home/" + band.id}>My Band</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/settings/" + band.id}>Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Logout>Logout</Logout>
                    </Nav.Item>
                </Navibar>

                <BandJumbotron band={band} />
                <Container fluid>
                    <MerchCard merch={merch} />
                </Container>

            </div>
        )
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

            <BandJumbotron band={band} />
            <Container fluid>
                <MerchCard merch={merch} />
            </Container>

        </div>
    )
}