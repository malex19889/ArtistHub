import React from "react";
import Card from "react-bootstrap/Card"

function BioCard() {
    return (
        <Card body className="col-lg-4" style={{ margin: "10px" }}>
            ArtistHub is a multifunctional platform that allows artists and content creators to create a simple platform for interacting
            with their fans! Not only can you post all of the information fans will need to find out what type of artist you are
            and the kind of content you produce, but you'll also be able to publish performance dates or other events in an
            easy-to-read calendar format, up to one year in advance. Optionally, merchandise can be posted for sale on a separate merch
            tab on your individual page! Fans can purchase your products at the click of a button, and as an artist you can easily
            keep track of inventory stock and other sales figures.
            <br />
            <br />
            As a fan, you can create a simple user account to post comments on a band's forum page, purchase merchandise, and add
            bands to your favorites page so you can easily keep track of all their updates, new merchandise, and more. 
            Click <a href="/">here</a> to register and get started today!
        </Card>
    );
}

export default BioCard;