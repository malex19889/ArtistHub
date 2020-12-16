import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function JumbotronPage() {
    return (
        <Jumbotron fluid style={{height: 300, background: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7206ff1-bd4d-4c3f-8021-e016594a2bba/d1qt5y7-9855cb9e-baa2-4f37-a4b6-21493f6ec84d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9kNzIwNmZmMS1iZDRkLTRjM2YtODAyMS1lMDE2NTk0YTJiYmEvZDFxdDV5Ny05ODU1Y2I5ZS1iYWEyLTRmMzctYTRiNi0yMTQ5M2Y2ZWM4NGQuanBnIn1dXX0.85mI52Gv9HE0vUnQN1pTLEIK3yg3WlG4yIzJnrBQ6jc)", 
        backgroundSize:"100% 100%", textAlign: "center", color: "#cbd4dd"}}>
            <Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 style={{fontWeight:"bolder"}}>Welcome to ArtistHub!</h1>
                <p style={{fontWeight:"bold"}}>
                    Keep track of tour dates, band merchandise, and more.
                </p>
            </Container>
        </Jumbotron>

    );
}

export default JumbotronPage;