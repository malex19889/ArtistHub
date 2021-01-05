import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// hooks
import useHandleInputChange from "../../hooks/useHandleInputChange"
// contexts
import { useAuthContext } from "../../store/contexts/authContext"
import API from "../../utils/API";
import { Redirect } from 'react-router-dom'

function Login(props) {
    let content;
    // globall auth state
    const [authState, dispatch] = useAuthContext()
    // hook for form input change
    const { state, handleInputChange } = useHandleInputChange();
    console.log(authState)
    // handler for login submit
    const handleUserLogin = (e) => {
        e.preventDefault();
        API.userLogin(state)
            .then(res => {
                console.log(res);
                dispatch({ type: "LOGIN_SUCCESS", user: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: "LOGIN_FAILED" });
            })
    }
    const handleBandLogin = (e) => {
        e.preventDefault();
        API.bandLogin(state)
            .then(res => {
                console.log(res);
                dispatch({ type: "LOGIN_SUCCESS", user: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: "LOGIN_FAILED" });
            })
    }
    authState.loggedIn ? (content = <Redirect to= "/band/home/1" />): (content=(
    <Form>
        <Form.Group controlId="loginUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={handleInputChange} name="userName" type="username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleInputChange} name="password" type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="dark" onClick={handleBandLogin} type="submit" style={{margin:"5px"}}>
            Band Login
        </Button>
        <Button variant="dark" onClick={handleUserLogin} type="submit" style={{margin:"5px"}}>
            User Login
        </Button>
    </Form>))
    
    return (
        <div>
           {content}
        </div>
    )
}

export default Login;
