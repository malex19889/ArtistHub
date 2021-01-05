import React, { createContext, useReducer, useContext } from "react";
import { AuthReducer } from "../reducers/authReducer"
const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ value = {}, ...props }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {
        loggedIn: false,
        id: null,
        userName: ""
    }, () => {
        const sessionId = localStorage.getItem("sessionId");
        if (sessionId) {
            return { loggedIn: true, sessionId: sessionId };
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