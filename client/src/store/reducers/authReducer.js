export const AuthReducer=(state,action)=>{
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log(action)
            const sessionId = action.user.sessionId;
            localStorage.setItem("sessionId", sessionId)
            localStorage.setItem("userName", action.user.username)
            localStorage.setItem("id", action.user.id)
            return{
                ...state,
                loggedIn: true,
                sessionId: action.user.sessionId,
                userName: action.user.username,
                id: action.user.id
            }            
        case "LOGIN_FAILED":
            return{
                ...state,
                loggedIn: false,
                sessionId: null
            }            
        case "LOGOUT":
            localStorage.removeItem("sessionId");
            localStorage.removeItem("userName");
            localStorage.removeItem("id");
            return{
                ...state,
                loggedIn: false,
                sessionId: null
            }            
    
        default:
            return state;
    }
}