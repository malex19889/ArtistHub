import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/API"
import useHandleInputChange from "../../hooks/useHandleInputChange";
import { useAuthContext } from "../../store/contexts/authContext";
require('dotenv').config();

export default function AddMerchForm() {
    const [imageState, setImageState] = useState("")
    const { state, handleInputChange } = useHandleInputChange();
    const [authState, dispatch] = useAuthContext();

    const handleImageUpload = ()=>{
        let widget = window.cloudinary.createUploadWidget(
            {
              cloudName: process.env.REACT_APP_CLOUD_NAME,
              uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
              sources: ["local", "camera"]
            },
            (error, result) => {
              if (result.event === "success") {
              
                const file = result.info.url; 
                console.log("RESULT")
                console.log(result.info)
                console.log("file: ", file, result.info.resource_type);
                setImageState(result.info.url)
              }
            }
          );
          widget.open();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let insert = { ...state, image:imageState }
        API.addMerch(insert)
            .then(res => {
                console.log(res)
                window.location.href = "/band/home/" + authState.id
            })
            .catch(err => console.log(err))
    }
    return (
        <Form className="merch" >

            <h2>Add a Piece of Merchandise</h2>

            <Button onClick={handleImageUpload}>Upload a Photo</Button>

            <Form.Group controlId="formItemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="itemName"
                    name="itemName"
                    placeholder="Enter item name here" />
            </Form.Group>

            {/* add a form.file for new cover photo */}

            <Form.Group controlId="formItemDescription">
                <Form.Label>Item Description</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="description"
                    name="description"
                    placeholder="Short description" />
            </Form.Group>

            <Form.Group controlId="formItemPrice">
                <Form.Label>Item Price</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="price"
                    name="price"
                    placeholder="i.e. $20" />
            </Form.Group>

            <Form.Group controlId="formItemQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="quantity"
                    name="quantity"
                    placeholder="Quantity" />
            </Form.Group>

            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Submit
            </Button>

        </Form>
    );
}