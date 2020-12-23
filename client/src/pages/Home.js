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
import API from "../utils/API";

export default function Home() {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
    const [registerFirstname, setRegisterFirstname] = useState("")
    const [registerLastname, setRegisterLastname] = useState("")
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const userLogin = {
        userName:registerUsername,
        password:registerPassword
    }
    const user = {
        firstName:registerFirstname,
        lastName:registerLastname,
        userName:registerUsername,
        email:registerEmail,
        password:registerPassword
    };
    const handleLoginModal = () => {
          setLoginModalIsOpen(!loginModalIsOpen)
      }
      const handleRegisterModal = () => {
       setRegisterModalIsOpen(!registerModalIsOpen)
      }
      const handleRegisterSubmit = (event)=>{
          event.preventDefault();
          console.log(user)
          API.register(user)
          .then(res=> console.log(res))
          .catch(err=> console.log(err))
      }
      const handleLogin =(event)=>{
            event.preventDefault();
            API.userLogin(userLogin)
            .then(res=> console.log(res.data))
            .catch(err => console.log(err));
            // console.log("Login");
            // console.log(userLogin);
      }
     const handleInputChange = (event)=>{
         switch (event.target.name) {
             case "firstName":
                setRegisterFirstname(event.target.value)
                
                 return;
             case "userName":
                setRegisterUsername(event.target.value)
                 return;
             case "lastName":
                setRegisterLastname(event.target.value)
                 return;
             case "email":
                setRegisterEmail(event.target.value)
                 return;
             case "password":
                setRegisterPassword(event.target.value)
                 return;
         
             default:
                 break;
     }
         }
         
    return (
        <div>
             <Navibar handleLoginModal={handleLoginModal} handleRegisterModal={handleRegisterModal} />
            <LoginModal open={loginModalIsOpen} handleLoginModal={handleLoginModal} handleInputChange={handleInputChange} handleSubmit={handleLogin}/>
            <RegisterModal open={registerModalIsOpen} handleRegisterModal={handleRegisterModal} handleInputChange={handleInputChange} handleSubmit={handleRegisterSubmit}/>
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