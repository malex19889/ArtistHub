export const AuthReducer=(state,action)=>{
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("user",action)
            localStorage.setItem("sessionId", action.user.sessionId)
            localStorage.setItem("token", action.token)
            localStorage.setItem("userName", action.user.username)
            localStorage.setItem("id", action.user.id)
            return{
                ...state,
                loggedIn: true,
                sessionId: action.user.sessionId,
                userName: action.user.username,
                id: action.user.id
            }            
        case "BAND_LOGIN_SUCCESS":
            console.log("band",action)
            localStorage.setItem("sessionId", action.user.sessionId)
            localStorage.setItem("token", action.token)
            localStorage.setItem("userName", action.user.username)
            localStorage.setItem("id", action.user.id)
            localStorage.setItem("isBand", true)
            return{
                ...state,
                loggedIn: true,
                sessionId: action.user.sessionId,
                userName: action.user.username,
                id: action.user.id,
                isBand:true
            }            
        case "LOGIN_FAILED":
            return{
                ...state,
                loggedIn: false,
                sessionId: null
            }            
        case "LOGOUT":
            localStorage.removeItem("sessionId");
            localStorage.removeItem("token")
            localStorage.removeItem("userName");
            localStorage.removeItem("id");
            localStorage.removeItem("isBand");
            return{
                ...state,
                loggedIn: false,
                sessionId: null,
            }            
    
        default:
            return state;
    }
}