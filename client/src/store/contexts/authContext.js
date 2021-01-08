import React, { createContext, useReducer, useContext } from "react";
import { AuthReducer } from "../reducers/authReducer"
const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ value = {}, ...props }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {
        loggedIn: false,
        isBand:false,
        id: null,
        userName: ""
    }, () => {
        const sessionId = localStorage.getItem("sessionId");
        const username = localStorage.getItem("userName");
        const id = localStorage.getItem("id");
        const isBand = localStorage.getItem("isBand")
        if (sessionId && isBand) {
            return { loggedIn: true, sessionId: sessionId, id: id, username: username, isBand:true };
        } else if (sessionId){
            return { loggedIn: true, sessionId: sessionId, id: id, username: username, isBand:false };
        } else {
            return { loggedIn: false };
        }
    })

    return <Provider value={[authState, dispatch]} {...props} />
}
const useAuthContext = () => {
    return useContext(AuthContext)
}
export { AuthProvider, useAuthContext }