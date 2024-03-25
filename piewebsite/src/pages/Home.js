import React from "react";
import Banner from "../pagecompnents/homeCom/Banner";
import './Home.css';
import descriptionData from "../data/descriptionData";
import Description from "../pagecompnents/homeCom/Description";
import WelcomeImage from "../pagecompnents/homeCom/WelcomeImage";
import LRCard from "../pagecompnents/homeCom/LRCard";
import pie from "../data/pie";
import DescriptionContainor from "../pagecompnents/homeCom/DescriptContainor";
function Home() {
    return(
        <div>
            <WelcomeImage />
            <Banner />
            {pie.map((data) => (
                <LRCard
                image = {data.image}
                title = {data.title}
                words = {data.para}
                />
            ))}
            <DescriptionContainor />
        </div>
    )
}

export default Home;