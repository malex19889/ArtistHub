import React from 'react'

import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// hooks
import useHandleInputChange from "../../hooks/useHandleInputChange"

// contexts
import { useAuthContext } from "../../store/contexts/authContext"
import API from "../../utils/API";

function Register() {

    return (
        <div style={{border:"5px dotted black", padding:"35px", margin:"5px"}}>
            <Row>
                <h2>Are you a Band?</h2>
                <Button variant="dark" href="/band/register" type="button" style={{margin:"5px 5px 5px 15px"}}>
                    Click Here!
                </Button>
            </Row>
            <hr />
            <Row>
                <h2>Or a Fan?</h2>
                <Button variant="dark" href="/user/register" type="button" style={{margin:"5px 5px 5px 15px"}}>
                    Click Here!
                </Button>
            </Row>
        </div>
    )
}

export default Register;