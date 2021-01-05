import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import BandJumbotron from "../components/BandJumbotron";
import BandBioCard from "../components/BandBioCard";
import EventsCard from "../components/EventsCard";
import MerchCard from "../components/MerchCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API"

export default function BandHome() {
    let params = useParams();
    let id =1
    const band = {
        bandName:"band1",
        bandBio:"we rock",
        genre:"rock",
        contact:"2134567",
        youtube:"www.youtube.com",
        facebook:"samefacebooc.com",
        insta:"instagram.com",
        twitter:"twitter.com",
        bandmembers:[{firstName:"me",lastName:"you",contact:"123456",bandRole:"bass",facebook:"facebook.com",insta:"insta.com",twitter:"twitter.com"},{firstName:"2",lastName:"3",contact:"456789",bandRole:"guitar",facebook:"facebook2.com",insta:"insta2.com",twitter:"twitter2.com"}]
    };
    // 
    useEffect(() => {
       API.bandInfoById(id)
       .then((res) => {
           const bandInfo = res
       })
       .catch(err=> console.log(err))
    })
    return (
        <div>
            <BandJumbotron />
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <BandBioCard />
                    </Col>
                    <Col sm={8}>
                        <EventsCard />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="d-flex align-items-center justify-content-center">
                        <MerchCard />
                        <MerchCard />
                        <MerchCard />
                        <MerchCard />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}