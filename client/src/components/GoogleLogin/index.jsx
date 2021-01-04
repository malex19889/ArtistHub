import React from "react";
import GoogleLogin from 'react-google-login';

const Login = () => {

    const responseGoogle = (response) => {
    //    axios get to check for existing user

    // then if no user post email to db
    
      }
      return (
        <div>
    
       
        <GoogleLogin
          clientId="8307152712-qr7s4g959r5tmu5eeajh2fb10ucmjng5.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
         </div>
        );
    };

export default Login;