import Card from "react-bootstrap/Card";

function ArtistCard(props) {
    return <Card>
        <Card.Img variant="top" src={props.artist.img} />
        <Card.Body>
            <Card.Title>{props.artist.title}</Card.Title>
            <Card.Text>{props.artist.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{props.artist.date}</small>
        </Card.Footer>
    </Card>
}

export default ArtistCard