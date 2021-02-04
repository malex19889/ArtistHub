import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteTourBtn from "../DeleteTourBtn";
import { useAuthContext } from "../../store/contexts/authContext";
const dateFormat = require("dateformat");

//logic needed for these to pull from the last 3 artists added to the site
function EventsGroup(props) {

    const [authState, dispatch] = useAuthContext();

    return (
        <div>
            <CardGroup>
                <Card body className="bandevents" style={{ marginLeft: "10px", marginRight: "10px", float: "left", width: "100%" }}>
                    <Card.Title style={{ textAlign: "center", margin: "0 auto", fontWeight: "bolder", fontSize: "25px", border: "2px #dbe0e6 solid", padding: "5px" }}>Upcoming Shows</Card.Title>
                    {console.log("tour dates " + props.band.tour)}

                    {props.band.tour.map((tour, i) =>
                        <div>
                            <ListGroup key={i + "-card"} tour={tour} horizontal style={{ marginBottom: "5px", minWidth: "460px", paddingTop:"10px" }}>
                                {/* style these item fields to be the same size all the way across/fit to card */}
                                <ListGroup.Item style={{ fontWeight: "bold" }}>{tour.tourName} <br /> {authState.loggedIn && authState.isBand ? <DeleteTourBtn id={tour.id} /> : <div></div>}</ListGroup.Item>
                                <ListGroup.Item style={{ fontWeight: "bold" }}>Date: <br />{dateFormat(tour.date, "dddd, mmmm dS, yyyy")} @ {tour.time}</ListGroup.Item>
                                <ListGroup.Item style={{ fontWeight: "bold" }}>Location: <br />{tour.location}</ListGroup.Item>
                                <ListGroup.Item style={{ fontWeight: "bold" }}>Notes: <br />{tour.notes}</ListGroup.Item>
                                <ListGroup.Item style={{ fontWeight: "bold" }}>Price: <br />{tour.ticketPrice}</ListGroup.Item>
                                
                            </ListGroup>
                        </div>
                    )}
                </Card>
            </CardGroup>
        </div>
    );
}

export default EventsGroup;
