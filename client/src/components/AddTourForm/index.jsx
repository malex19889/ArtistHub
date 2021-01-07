import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddTourForm(props) {

    return (
        <Form className="bandregister" >

            <h2>Add a Show</h2>

            <Form.Group controlId="formTourName">
                <Form.Label>Tour Name</Form.Label>
                <Form.Control type="tourName" placeholder="Enter Tour Name, or List Performers" />
            </Form.Group>

            {/* add a form.file for new cover photo */}
            {/* add a form.file for added images to a gallery */}

            <Form.Group controlId="formTourDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="i.e., October 31, 2021" />
            </Form.Group>

            <Form.Group controlId="formTourTime">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" placeholder="i.e., 8 PM" />
            </Form.Group>

            <Form.Group controlId="formTourLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="location" placeholder="Enter Venue" />
            </Form.Group>

            <Form.Group controlId="formTourTicketPrice">
                <Form.Label>Ticket Price</Form.Label>
                <Form.Control type="ticketPrice" placeholder="i.e., $20" />
            </Form.Group>

            <Form.Group controlId="formTourNotes">
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" type="notes" placeholder="Additional Notes" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>

        </Form>
    );
}