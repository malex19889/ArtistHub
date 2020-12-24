import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup";

function EventsCard() {
    return (
        <div>

            <Card body className="bandevents" style={{ marginLeft: "10px", marginRight: "10px", float: "left" }}>
            <Card.Title style={{textAlign:"center"}}>Upcoming Shows</Card.Title>
                <ListGroup horizontal style={{marginBottom:"5px"}}>
                    {/* style these item fields to be the same size all the way across/fit to card */}
                    <ListGroup.Item>Tour name/Associated Acts/Production Company</ListGroup.Item>
                    <ListGroup.Item>Date, Time</ListGroup.Item>
                    <ListGroup.Item>Venue Name</ListGroup.Item>
                    <ListGroup.Item>Details</ListGroup.Item>
                    <ListGroup.Item>Tickets</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal style={{marginBottom:"5px"}}>
                    <ListGroup.Item>Tour name/Associated Acts/Production Company</ListGroup.Item>
                    <ListGroup.Item>Date, Time</ListGroup.Item>
                    <ListGroup.Item>Venue Name</ListGroup.Item>
                    <ListGroup.Item>Details</ListGroup.Item>
                    <ListGroup.Item>Tickets</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal style={{marginBottom:"5px"}}>
                    <ListGroup.Item>Tour name/Associated Acts/Production Company</ListGroup.Item>
                    <ListGroup.Item>Date, Time</ListGroup.Item>
                    <ListGroup.Item>Venue Name</ListGroup.Item>
                    <ListGroup.Item>Details</ListGroup.Item>
                    <ListGroup.Item>Tickets</ListGroup.Item>
                </ListGroup>
            </Card>

        </div>
    );
}

export default EventsCard;