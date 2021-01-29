import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
    return (
        <div className="align-items-center justify-content-center">
            <Spinner animation="border" variant="dark" style={{margin:"10px"}} />
                <br />
                Loading...
        </div>
    )
}

export default Loading;