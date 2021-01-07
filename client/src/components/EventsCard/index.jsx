import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function EventsCard(props) {
    return (
        <div>
            <ListGroup horizontal style={{ marginBottom: "5px", minWidth:"460px"}}>
                {/* style these item fields to be the same size all the way across/fit to card */}
                <ListGroup.Item>{props.band.tourName}</ListGroup.Item>
                <ListGroup.Item>{props.band.date} @ {props.band.time}</ListGroup.Item>
                <ListGroup.Item>{props.band.location}</ListGroup.Item>
                <ListGroup.Item>{props.band.notes}</ListGroup.Item>
                <ListGroup.Item>{props.band.ticketPrice}</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default EventsCard;