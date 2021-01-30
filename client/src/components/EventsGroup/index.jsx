import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import EventsCard from "../EventsCard";
import DeleteTourBtn from "../DeleteTourBtn";
import API from "../../utils/API";

//logic needed for these to pull from the last 3 artists added to the site
function EventsGroup(props) {

    function handleDeleteTourDate(id) {
        API.deleteTourDate(id);
    }
    return (
        <div>
            <CardGroup>
                <Card body className="bandevents" style={{ marginLeft: "10px", marginRight: "10px", float: "left", minWidth: "500px" }}>
                    <Card.Title style={{ textAlign: "center" }}>Upcoming Shows</Card.Title>
                    {props.band.tour.map((band, i) =>
                        <div>
                            <EventsCard key={i + "-card"} band={band} />
                            <DeleteTourBtn handleDeleteTourDate={handleDeleteTourDate} id={band.tour.id}/>
                     </div>
                     )}
                </Card>
            </CardGroup>
        </div>
    );
}

export default EventsGroup;
