// import logo from './logo.svg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BandRegister from "./pages/BandRegister";
import UserRegister from "./pages/UserRegister";
import BandHome from "./pages/BandHome";
import NoMatch from "./pages/NoMatch";
import BandSettings from "./pages/BandSettings";
import UserSettings from "./pages/UserSettings";
import UserFavorites from "./pages/UserFavorites";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>

          <Route exact path="/user/register">
            <UserRegister />
          </Route>

          <Route exact path="/band/register">
            <BandRegister />
          </Route>

          <Route exact path="/band/home/">
            <BandHome />
          </Route>

          <Route exact path="/band/settings/">
            <BandSettings />
          </Route>

          <Route exact path="/user/settings/">
            <UserSettings />
          </Route>

          <Route exact path="/user/favorites/">
            <UserFavorites />
          </Route>

          <Route>
            <NoMatch />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;