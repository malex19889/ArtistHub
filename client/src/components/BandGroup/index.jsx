import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import BandCard from '../BandCard'

//logic needed for these to pull from the last 3 artists added to the site
function BandGroup(props) {
    console.log("band Group props",props)
    return (
        <div>
            <h1 style={{ margin: "0 auto", textAlign: "center", marginBottom: "10px" }}>Featured</h1>
            <CardGroup style={{ margin: "10px" }}>
                {props.bands.slice(0,3).map((band, i) => <BandCard key={i + "-card"} band={band} />)}
            </CardGroup>
        </div>
    );
}

export default BandGroup;
