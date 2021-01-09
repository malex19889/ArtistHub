import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/API"
import useHandleInputChange from "../../hooks/useHandleInputChange";
import { useAuthContext } from "../../store/contexts/authContext";
export default function AddTourForm(props) {

    const { state, handleInputChange } = useHandleInputChange();
    const [authState, dispatch] = useAuthContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        let insert = { ...state, ...authState }
        API.addTourDate(insert)
            .then(res => {
                console.log(res)
                window.location.href = "/band/home/" + authState.id
            })
            .catch(err => console.log(err))
    }
    return (
        <Form className="tourdates" >

            <h2>Add a Show</h2>

            <Form.Group controlId="formTourName">
                <Form.Label>Tour Name</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="tourName"
                    name="tourName"
                    placeholder="Enter Tour Name, or List Performers" />
            </Form.Group>

            {/* add a form.file for new cover photo */}

            <Form.Group controlId="formTourDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="date"
                    name="date"
                    placeholder="i.e., October 31, 2021" />
            </Form.Group>

            <Form.Group controlId="formTourTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="time"
                    name="time"
                    placeholder="i.e., 8 PM" />
            </Form.Group>

            <Form.Group controlId="formTourLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="location"
                    name="location"
                    placeholder="Enter Venue" />
            </Form.Group>

            <Form.Group controlId="formTourTicketPrice">
                <Form.Label>Ticket Price</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="ticketPrice"
                    name="ticketPrice"
                    placeholder="i.e., $20" />
            </Form.Group>

            <Form.Group controlId="formTourNotes">
                <Form.Label>Notes</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    as="textarea"
                    type="notes"
                    name="notes"
                    placeholder="Additional Notes" />
            </Form.Group>

            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Submit
            </Button>

        </Form>
    );
}