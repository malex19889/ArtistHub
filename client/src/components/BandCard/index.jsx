import Card from "react-bootstrap/Card";

function BandCard(props) {
    return <Card>
        <Card.Img variant="top" src={props.band.imgUrl} />
        <Card.Body>
            <Card.Title><a href="/band/home/:id" style={{ color: "black" }}>{props.band.bandName}</a></Card.Title>
            <Card.Text>{props.band.bandBio}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Joined {props.band.createdAt}</small>
        </Card.Footer>
    </Card>
}

export default BandCard;