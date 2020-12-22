import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import BioCard from "../components/BioCard";
import ArtistCard from "../components/ArtistCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navibar from '../components/Navibar';
import LoginModal from '../components/LoginModal';
import RegisterModal from "../components/RegisterModal";

export default function Home() {
    // eslint-disable-next-line no-unused-vars
    const [user,setUserState] = useState({});
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

    const handleLoginModal = () => {
          setLoginModalIsOpen(!loginModalIsOpen)
      }
      const handleRegisterModal = () => {
       setRegisterModalIsOpen(!registerModalIsOpen)
      }
     const handleSubmit = (event)=>{
         event.preventDefault();
         console.log(event.target);
     }
    return (
        <div>
             <Navibar handleLoginModal={handleLoginModal} handleRegisterModal={handleRegisterModal} />
            <LoginModal handleSubmit={handleSubmit} open={loginModalIsOpen} handleLoginModal={handleLoginModal} />
            <RegisterModal handleSubmit={handleSubmit} open={registerModalIsOpen} handleRegisterModal={handleRegisterModal} />
            <Jumbotron />
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <BioCard />
                    </Col>
                    <Col md={8}>
                        <ArtistCard />
                    </Col>
                </Row>

                {/* need backend code to display last 3 band pages created */}

            </Container>
        </div>

    )
}