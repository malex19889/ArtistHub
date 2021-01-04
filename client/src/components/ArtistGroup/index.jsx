import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import ArtistCard from '../ArtistCard'

//logic needed for these to pull from the last 3 artists added to the site
function ArtistGroup(props) {
    return (
        <div>
            <h1 style={{ margin: "0 auto", textAlign: "center", marginBottom: "10px" }}>Recently Joined</h1>
            <CardGroup style={{ margin: "10px" }}>
                {
                    props.artists.map((artist, i) => <ArtistCard key={i + "-card"} artist={artist} />)
                }
            </CardGroup>
        </div>
    );
}

export default ArtistGroup;
