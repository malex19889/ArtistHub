import React from 'react';
import { Redirect } from "react-router-dom";
import  Button  from "react-bootstrap/Button";
import API from "../../utils/API"

// global auth context
import { useAuthContext } from "../../store/contexts/authContext"
const Logout = () => {
    const [authState, dispatch] = useAuthContext()
    const handleLogout = (e)=>{
        e.preventDefault();
        API.logout(authState)
            .then(res => {
                console.log(res);
                dispatch({ type: "LOGOUT", user: res.data });
                window.location.replace("/home")
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: "LOGOUT" });
            })

    }
    return (
        <div>
           <Button variant="outline-none" style={{ backgroundColor: "#343a40", color: "white" }}onClick={handleLogout}>Logout</Button> 
        </div>
    )
}

export default Logout;
