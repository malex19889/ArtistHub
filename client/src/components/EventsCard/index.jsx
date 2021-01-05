import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function EventsCard(props) {
    return (
        <div>
            <ListGroup horizontal style={{ marginBottom: "5px" }}>
                {/* style these item fields to be the same size all the way across/fit to card */}
                <ListGroup.Item>{props.band.tour.tourName}</ListGroup.Item>
                <ListGroup.Item>{props.band.tour.date}, {props.tour.time}</ListGroup.Item>
                <ListGroup.Item>{props.band.tour.location}</ListGroup.Item>
                <ListGroup.Item>{props.band.tour.notes}</ListGroup.Item>
                <ListGroup.Item>{props.band.tour.ticketPrice}</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default EventsCard;