import React from 'react'
import  Button  from "react-bootstrap/Button";
import API from "../../utils/API"
// global auth context
import { useAuthContext } from "../../store/contexts/authContext"
const Logout = () => {
    const [authState, dispatch] = useAuthContext()
    const handleLogout = (e)=>{
        e.preventDefault();
        API.userLogin(authState)
            .then(res => {
                console.log(res);
                dispatch({ type: "LOGOUT", user: res.data })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: "LOGOUT" });
            })

    }
    return (
        <div>
           <Button onClick={handleLogout}>Logout</Button> 
        </div>
    )
}

export default Logout
