import Card from "react-bootstrap/Card";

function ArtistCard(props) {
    return <Card>
        <Card.Img variant="top" src={props.artist.imgUrl} />
        <Card.Body>
            <Card.Title>{props.artist.bandName}</Card.Title>
            <Card.Text>Joined {props.artist.bandBio}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{props.artist.createdAt}</small>
        </Card.Footer>
    </Card>
}

export default ArtistCard;