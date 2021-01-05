import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function EventsCard(props) {
    return (
        <div>
            {props.band.map((band, i) =>
                <ListGroup key={i} band={band} horizontal style={{ marginBottom: "5px" }}>
                    {/* style these item fields to be the same size all the way across/fit to card */}
                    <ListGroup.Item>{props.band.tour[i].tourName}</ListGroup.Item>
                    <ListGroup.Item>{props.band.tour[i].date}, {props.tour.time}</ListGroup.Item>
                    <ListGroup.Item>{props.band.tour[i].location}</ListGroup.Item>
                    <ListGroup.Item>{props.band.tour[i].notes}</ListGroup.Item>
                    <ListGroup.Item>{props.band.tour[i].ticketPrice}</ListGroup.Item>
                </ListGroup>
            )}
        </div>
    );
}

export default EventsCard;