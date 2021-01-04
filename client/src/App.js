// import logo from './logo.svg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer"

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import BandRegister from "./pages/BandRegister";
import UserRegister from "./pages/UserRegister";
import BandHome from "./pages/BandHome";
import NoMatch from "./pages/NoMatch";
import BandSettings from "./pages/BandSettings";
import UserSettings from "./pages/UserSettings";
import UserFavorites from "./pages/UserFavorites";
// global state
import { AuthProvider,useAuthContext } from './store/contexts/authContext';

function App() {
  const [authState, dispatch] = useAuthContext()
  const PrivateRoute = ({ component: Component, authorization, ...rest }) => {
    return (<Route {...rest} render={props =>  authorization ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} /> } />)
  }
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

          {/* protected */}
          {/* <Route exact path="/band/home/">
            <BandHome />
          </Route> */}

          <PrivateRoute path="/band/settings/" authorization={authState && authState.loggedIn} component={BandSettings}/>

          <PrivateRoute path="/band/home/" authorization={authState && authState.loggedIn} component={BandHome}/>

          <PrivateRoute path="/user/settings/" authorization={authState && authState.loggedIn} component={UserSettings}/>

          <PrivateRoute path="/user/favorites/" authorization={authState && authState.loggedIn} component={UserFavorites}/>


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