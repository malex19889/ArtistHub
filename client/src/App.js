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

        <LoginModal open={this.state.loginModalIsOpen} handleLoginModal={this.handleLoginModal} />
        <RegisterModal open={this.state.registerModalIsOpen} handleRegisterModal={this.handleRegisterModal} />


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
