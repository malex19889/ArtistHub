import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

function ArtistCard() {
    return (
        <div>
            <h1 style={{margin:"0 auto", textAlign:"center", marginBottom:"10px"}}>Recently Joined</h1>
            <CardGroup style={{ margin: "10px" }}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Band Name</Card.Title>
                        <Card.Text>
                            A short description about the band will go here. For example: "Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career.[1][2] The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding "big four" bands of thrash metal, alongside Megadeth, Anthrax and Slayer."
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Date Added Goes Here</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Band Name</Card.Title>
                        <Card.Text>
                            A short description about the band will go here. For example: "Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career.[1][2] The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding "big four" bands of thrash metal, alongside Megadeth, Anthrax and Slayer."
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Date Added Goes Here</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Band Name</Card.Title>
                        <Card.Text>
                            A short description about the band will go here. For example: "Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career.[1][2] The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding "big four" bands of thrash metal, alongside Megadeth, Anthrax and Slayer."
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Date Added Goes Here</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}

export default ArtistCard;