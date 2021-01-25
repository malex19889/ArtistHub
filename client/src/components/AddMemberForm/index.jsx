import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuthContext } from "../../store/contexts/authContext";
import useHandleInputChange from "../../hooks/useHandleInputChange";
import API from "../../utils/API"

export default function AddMemberForm() {

    const { state, handleInputChange } = useHandleInputChange();
    const [authState, dispatch] = useAuthContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        let insert = { ...state, ...authState }
        API.addMember(insert)
            .then(res => {
                console.log(res)
                window.location.href = "/band/home/" + authState.id
            })
            .catch(err => console.log(err))
    }
    return (
        <Form className="bandregister">

            <h2>Add Band Members</h2>

            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="firstName"
                    name="firstName"
                    placeholder="Enter First Name" />
            </Form.Group>

            {/* add a form.file for new cover photo */}
            {/* add a form.file for added images to a gallery */}

            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="lastName"
                    name="lastName"
                    placeholder="Enter Last Name" />
            </Form.Group>

            <Form.Group controlId="formMemberContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="memberContact"
                    name="memberContact"
                    placeholder="XXXXXXXXXX" />
            </Form.Group>

            <Form.Group controlId="formBandRole">
                <Form.Label>Band Role</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="bandRole"
                    name="bandRole"
                    placeholder="i.e., Guitarist" />
            </Form.Group>

            <Form.Group controlId="facebook">
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="facebook"
                    name="facebook"
                    placeholder="Add Link" />
            </Form.Group>

            <Form.Group controlId="insta">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="insta"
                    name="insta"
                    placeholder="Add Link" />
            </Form.Group>

            <Form.Group controlId="twitter">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="twitter"
                    name="twitter"
                    placeholder="Add Link" />
            </Form.Group>

            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Submit
            </Button>

        </Form>
    );
}