import React from "react";
import NaviBar from "../components/Navibar";
import Jumbotron from "../components/Jumbotron";
import BioCard from "../components/BioCard";
import ArtistCard from "../components/ArtistCard";

import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <NaviBar />
            <Jumbotron />
            <BioCard />
            {/* need backend code to display last 3 band pages created */}
            <ArtistCard />
            <Footer />
        </div>

    )
}