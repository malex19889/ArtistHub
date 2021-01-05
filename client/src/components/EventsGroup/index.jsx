import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import EventsCard from "../EventsCard";

//logic needed for these to pull from the last 3 artists added to the site
function EventsGroup(props) {
    return (
        <div>
            <h1 style={{ margin: "0 auto", textAlign: "center", marginBottom: "10px" }}>Recently Joined</h1>
            <CardGroup style={{ margin: "10px" }}>
                <Card body className="bandevents" style={{ marginLeft: "10px", marginRight: "10px", float: "left" }}>
                    <Card.Title style={{ textAlign: "center" }}>Upcoming Shows</Card.Title>
                    {
                        props.band.map((band, i) => <EventsCard key={i + "-card"} band={band} />)
                    }
                </Card>
            </CardGroup>
        </div>
    );
}

export default EventsGroup;
