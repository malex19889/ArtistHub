import React from "react";
import NaviBar from "../components/Navibar";
import Jumbotron from "../components/Jumbotron";
import BioCard from "../components/BioCard";

//import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <NaviBar />
            <Jumbotron />
            <BioCard
                style={{ maxWidth: "300px" }} />
        {/* Cards and images go here for site description, need backend code to display last 3 band pages created */}
        </div>

    )
}

export default Home;