import React from "react";
import WelcomeAbout from "../pagecompnents/homeCom/WelcomeAbout";
import Description from "../pagecompnents/homeCom/Description";
import Footer from "../pagecompnents/homeCom/Footer";
const x = "Welcome to Your Pie Factory, where every slice tells a story! \nNestled in the heart of NY, our family-owned bakery has been crafting delicious pies since 2011."
function About() {
    return(
        <div>
            <div>
                <WelcomeAbout />
            </div>
            <div>
                <Description head = {"About Us"} para = {x} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default About;