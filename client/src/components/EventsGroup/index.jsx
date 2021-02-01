import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteTourBtn from "../DeleteTourBtn";
import { useAuthContext } from "../../store/contexts/authContext";

//logic needed for these to pull from the last 3 artists added to the site
function EventsGroup(props) {

    const [authState, dispatch] = useAuthContext();

    return (
        <div>
            <CardGroup>
                <Card body className="bandevents" style={{ marginLeft: "10px", marginRight: "10px", float: "left", minWidth: "500px" }}>
                    <Card.Title style={{ textAlign: "center" }}>Upcoming Shows</Card.Title>
                    {console.log("tour dates " + props.band.tour)}
                    
                    {props.band.tour.map((tour, i) =>
                        <ListGroup key={i + "-card"} tour={tour} horizontal style={{ marginBottom: "5px", minWidth: "460px" }}>
                            {/* style these item fields to be the same size all the way across/fit to card */}
                            <ListGroup.Item>{tour.tourName}</ListGroup.Item>
                            <ListGroup.Item>{tour.date} @ {props.band.time}</ListGroup.Item>
                            <ListGroup.Item>{tour.location}</ListGroup.Item>
                            <ListGroup.Item>{tour.notes}</ListGroup.Item>
                            <ListGroup.Item>{tour.ticketPrice}</ListGroup.Item>
                            {authState.loggedIn && authState.isBand ? <DeleteTourBtn id={tour.id} /> : <div></div>}
                        </ListGroup>
                    )}
                </Card>
            </CardGroup>
        </div>
    );
}

export default EventsGroup;
