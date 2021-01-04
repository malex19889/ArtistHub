import React from "react";
import GoogleLogout from 'react-google-login';


function Logout(){
    function logout(){
    console.log("you are logged out now");
}

    return(
        <GoogleLogout
        clientId="8307152712-qr7s4g959r5tmu5eeajh2fb10ucmjng5.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
        cookiePolicy={'single_host_origin'}
      >
      </GoogleLogout>  
    )
}
export default Logout;