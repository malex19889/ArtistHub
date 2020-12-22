// import logo from './logo.svg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "holderjs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BandHome from "./pages/BandHome";
import NoMatch from "./pages/NoMatch";

import Navibar from './components/Navibar';
import Footer from "./components/Footer";

import LoginModal from './components/LoginModal';
import RegisterModal from "./components/RegisterModal";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  state = {
    user: {},
    loginModalIsOpen: false,
    registerModalIsOpen: false
  }

  handleLoginModal = () => {
    this.setState({ loginModalIsOpen: !this.state.loginModalIsOpen })
  }
  handleRegisterModal = () => {
    this.setState({ registerModalIsOpen: !this.state.registerModalIsOpen })
  }

  render() {
    return (
      <Router>
        <Navibar handleLoginModal={this.handleLoginModal} handleRegisterModal={this.handleRegisterModal} />

        <LoginModal open={this.state.loginModalIsOpen} handleLoginModal={this.handleLoginModal} >
          <Container>
            <Row className="justify-content-lg-center">
              <Col style={{ maxWidth: "500px", marginTop: "30px", marginBottom: "30px" }}>
                <Form className="bandregister">

                  <h1>Login</h1>

                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" href="/user/settings">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </LoginModal>

        <RegisterModal open={this.state.registerModalIsOpen} handleRegisterModal={this.handleRegisterModal}>
          <Container>
            <Row className="justify-content-lg-center">
              <Col style={{ maxWidth: "500px", marginTop: "30px", marginBottom: "30px" }}>
                <Form className="bandregister">

                  <h1>Register</h1>

                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="username" placeholder="Enter First Name" />
                  </Form.Group>

                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="username" placeholder="Enter Last Name" />
                  </Form.Group>

                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" href="/band/home/">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </RegisterModal>

        <div>
          <Switch>

            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>

            <Route exact path="/band/home/">
              <BandHome />
            </Route>

            <Route>
              <NoMatch />
            </Route>

          </Switch>
        </div>

        <Footer />
      </Router>
    );
  }
}

export default App;
