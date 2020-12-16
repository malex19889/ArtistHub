import React from "react";
import NaviBar from "../components/Navibar";
import Jumbotron from "../components/Jumbotron";
import BioCard from "../components/BioCard";

import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <NaviBar />
            <Jumbotron />
            <BioCard />
            {/* Cards and images go here for site description, need backend code to display last 3 band pages created */}
            <Footer />
        </div>

    )
}

export default Home;