import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navibar from "../components/Navibar";
import Footer from "../components/Footer";
import Logout from "../components/LogoutBtn";
import Container from "react-bootstrap/Container";
import ModalA from "../components/Modal";
import Login from "../components/Login";
import Register from "../components/Register";
import useModal from "../hooks/useModal";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useHandleInputChange from "../hooks/useHandleInputChange";
import { useAuthContext } from "../store/contexts/authContext";
import API from "../utils/API";
import BandCard from "../components/BandCard";
import NoMatch from "./NoMatch";


let showHideButton = "none";


export default function Browse() {
    const { isShown, toggle } = useModal();
    const { state, handleInputChange } = useHandleInputChange();
    const [authState, dispatch] = useAuthContext();
    const [bands, setBands] = useState([]);
    const [search, setSearch] = useState();



    // this function will find the band search and then render to the page
    const handleSearch = (e) => {

        e.preventDefault();
        let sortedBands = bands;
        const band = state.search;
        let found = false;
        showHideButton = null;
        console.log("in clear function " + showHideButton);
        const filteredBand = sortedBands.filter((obj) => {
            let bandName = obj.bandName.toLowerCase();
            if (bandName === band.toLowerCase()) {
                found = true;
                return obj;
            }
        });

        if (found) {
            console.log(" return setSearch " + JSON.stringify(filteredBand));

            setBands(filteredBand);
        } else {
            console.log("Not found ");
            NoMatch();
        }



    }
    //   Clear Search function 
    const handleReset = (e) => {

        setBands(bands);


    }


    useEffect(() => {
        API.bands()
            //store this data in state, and map it in the SearchCard component
            .then(res => {
                console.log("HEY, A SEARCH: ", res.data)
                setBands(res.data);


                //window.location.href = "/results";
            })
            .catch(err =>
                console.log(err)
            )
    }, [])
    console.log()
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
                <div className="align-self-center">
                    <Container>
                        <h2 className="justify-content-center" style={{ marginTop:"20px", marginBottom: "20px", alignText: "center" }}>Browse</h2>
                        <Form inline style={{ marginBottom: "10px" }}>
                            <FormControl onChange={handleInputChange} name="search" type="text" placeholder="Search For an Artist!" className="mr-sm-2" />
                            <Button type="submit" variant="outline-info" onClick={handleSearch}>Search</Button>
                            <Button type="clearSearch" style={{ display: showHideButton }} variant="outline-info" onClick={handleReset}>Clear Search</Button>
                            {console.log("outside near button " + showHideButton)}
                        </Form>
                        {bands.map((band, i) => <BandCard key={i + "-card"} band={band} />)}
                        {/* {search.id ? (<SearchCard search={search} />) : (<div></div>)} */}
                    </Container>
                </div>
                <Footer />
            </div>
        )
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
                <div className="align-self-center">
                    <Container>
                    <h2 className="justify-content-center" style={{ marginTop:"20px", marginBottom: "20px", alignText: "center" }}>Browse</h2>
                        <Form inline style={{ marginBottom: "10px" }}>
                            <FormControl onChange={handleInputChange} name="search" type="text" placeholder="Search For an Artist!" className="mr-sm-2" />
                            <Button type="submit" variant="outline-info" onClick={handleSearch}>Search</Button>
                            <Button id="clearSearch" style={{ display: showHideButton }} variant="outline-info" onClick={handleReset}>Clear Search</Button>
                        </Form>
                        {bands.map((band, i) => <BandCard key={i + "-card"} band={band} />)}
                    </Container>
                </div>
                <Footer />
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
            <div className="align-self-center">
                <Container>
                <h2 className="justify-content-center" style={{ marginTop:"20px", marginBottom: "20px", alignText: "center" }}>Browse</h2>
                    {/* Search button and return info */}
                    <Form inline style={{ marginBottom: "10px" }}>
                        <FormControl onChange={handleInputChange} name="search" type="text" placeholder="Search For an Artist!" className="mr-sm-2" />
                        <Button type="submit" variant="outline-info" onClick={handleSearch}>Search</Button>
                        <Button type="clear search" style={{ display: showHideButton }} variant="outline-info" onClick={handleReset}>Clear Search</Button>
                    </Form>


                    {bands.map((band, i) => <BandCard key={i + "-card"} band={band} />)}
                    {/* {search.id ? (<SearchCard search={search} />) : (<div></div>)} */}
                </Container>
            </div>
            <Footer />
        </div>
    )
}