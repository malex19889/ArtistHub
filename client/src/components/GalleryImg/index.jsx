import React from "react";
import Card from "react-bootstrap/Card";



export default function GalleryImg() {
    return (
            <Card style={{ width: '18rem', margin:"10px" }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150"/>
            </Card>

    );
}