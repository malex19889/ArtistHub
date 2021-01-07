import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddMemberForm() {

    return (
        <Form className="bandregister">

            <h2>Add Band Members</h2>

            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="Enter First Name" />
            </Form.Group>

            {/* add a form.file for new cover photo */}
            {/* add a form.file for added images to a gallery */}

            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Enter Last Name" />
            </Form.Group>

            <Form.Group controlId="formMemberContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="memberContact" placeholder="XXXXXXXXXX" />
            </Form.Group>

            <Form.Group controlId="formBandRole">
                <Form.Label>Band Role</Form.Label>
                <Form.Control type="bandRole" placeholder="i.e., Guitarist" />
            </Form.Group>

            <Form.Group controlId="facebook">
                <Form.Label>Facebook</Form.Label>
                <Form.Control type="facebook" placeholder="Add Link" />
            </Form.Group>

            <Form.Group controlId="insta">
                <Form.Label>Instagram</Form.Label>
                <Form.Control type="insta" placeholder="Add Link" />
            </Form.Group>

            <Form.Group controlId="twitter">
                <Form.Label>Twitter</Form.Label>
                <Form.Control type="twitter" placeholder="Add Link" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
                            </Button>

        </Form>
    );
}