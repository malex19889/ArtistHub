import React from "react";
import Card from "react-bootstrap/Card"

function BioCard() {
    return (
        <div>

            <Card body className="bandbio" style={{ marginLeft: "10px", marginRight: "10px", float: "left" }}>
                <Card.Title>Band Bio</Card.Title>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque est modi suscipit laborum explicabo, voluptate similique et adipisci libero dolores quis repudiandae aut tempora quo eos beatae iure perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis facilis officiis, atque eos repudiandae nulla totam eaque voluptatum necessitatibus deleniti veniam, vitae blanditiis aliquam dolores, velit explicabo voluptates corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aliquid sapiente mollitia saepe totam fuga ullam similique ipsa illum officiis quae sint dolorem dolores tenetur at quam eveniet sit delectus.
            </Card>
        </div>
    );
}

export default BioCard;