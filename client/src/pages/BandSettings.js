import React, { useState, useEffect } from "react";
import Navibar from "../components/Navibar";
import Footer from "../components/Footer";
import Logout from "../components/LogoutBtn";
import Loading from "../components/Loading";
import BandGeneralSettings from "../components/BandGeneralSettings";
// import { useAuthContext } from "../store/contexts/authContext";
import { useParams } from "react-router-dom";

import API from "../utils/API";
import useModal from "../hooks/useModal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import AddTourForm from "../components/AddTourForm";
import AddMemberForm from "../components/AddMemberForm";
import AddMerchForm from "../components/AddMerch";
import SettingsModal from "../components/SettingsModal";


export default function BandSettings() {
    const { isShown, toggle } = useModal();

    let { id } = useParams();

    const [updateBandname, setUpdateBandname] = useState("");
    const [updateBandBio, setUpdateBandBio] = useState("");
    const [updateGenre, setUpdateGenre] = useState("");
    const [updateContact, setUpdateContact] = useState("");
    const [updateYoutube, setUpdateYoutube] = useState("");
    const [updateFacebook, setUpdateFacebook] = useState("");
    const [updateInsta, setUpdateInsta] = useState("");
    const [updateTwitter, setUpdateTwitter] = useState("");
    const [band, setBand] = useState();
    const user = {
        bandName: updateBandname,
        bandBio: updateBandBio,
        genre: updateGenre,
        contact: updateContact,
        youtube: updateYoutube.replace("https://", ""),
        facebook: updateFacebook.replace("https://", ""),
        insta: updateInsta.replace("https://", ""),
        twitter: updateTwitter.replace("https://", "")
    };
    useEffect(() => {
        API.bandInfoById(id)
            .then(res => {
                console.log(res.data)
                setBand(res.data);
                setUpdateBandname(res.data.bandName)
                setUpdateBandBio(res.data.bandBio);
                setUpdateGenre(res.data.genre);
                setUpdateContact(res.data.contact);
                setUpdateYoutube(res.data.youtube);
                setUpdateFacebook(res.data.facebook);
                setUpdateInsta(res.data.insta);
                setUpdateTwitter(res.data.twitter);
            })
    }, [id])

    const handleUpdateInfo = (event) => {
        event.preventDefault();
        console.log(user)
        //axios.put required to update band data
        API.bandUpdate(user)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    // const [authState, dispatch] = useAuthContext();
    if (band) {
        return (
            <div>
                <Navibar>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/home/" + id}>My Band</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/merch/" + band.id}>Shop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/settings/" + id}>Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Logout>Logout</Logout>
                    </Nav.Item>
                </Navibar>
                <Container>
                    <h1 style={{ marginTop: "20px", textAlign: "center" }}>Choose a Settings Option Below</h1>
                    <Row className="Settings">
                        {/* GENERAL SETTINGS */}
                        <Col lg={3} style={{ textAlign: "center", width: "100%", marginTop: "30px", marginBottom: "30px" }}>
                            <SettingsModal
                                onClick={toggle}
                                isShown={isShown}
                                hide={toggle}
                                option="General Settings">
                                <BandGeneralSettings handleUpdateInfo={handleUpdateInfo} />
                            </SettingsModal>

                        </Col>

                        {/* ADD A TOUR DATE */}
                        <Col lg={3} style={{ textAlign: "center", width: "100%", marginTop: "30px", marginBottom: "30px" }}>
                            <SettingsModal
                                onClick={toggle}
                                isShown={isShown}
                                hide={toggle}
                                option="Add Tour Date">
                                <AddTourForm></AddTourForm>
                            </SettingsModal>

                        </Col>

                        {/* ADD A BAND MEMBER */}
                        <Col lg={3} style={{ textAlign: "center", width: "100%", marginTop: "30px", marginBottom: "30px" }}>
                            <SettingsModal
                                onClick={toggle}
                                isShown={isShown}
                                hide={toggle}
                                option="Add Band Member">
                                <AddMemberForm></AddMemberForm>
                            </SettingsModal>
                        </Col>

                        {/* ADD MERCH */}
                        <Col lg={3} style={{ textAlign: "center", width: "100%", marginTop: "30px", marginBottom: "30px" }}>
                            <SettingsModal
                                onClick={toggle}
                                isShown={isShown}
                                hide={toggle}
                                option="Add Merch">
                                <AddMerchForm></AddMerchForm>
                            </SettingsModal>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </div>
        );
    } else {
        return (
            <Container style={{ textAlign: "center", marginTop: "50px" }}>
                <Loading />
            </Container>
        )
    }
}