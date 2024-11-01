import React from "react";
import building from "../../resource/image/about.jpg"

function WelcomeAbout(props) {
    return(
        <div className="theImage">
            <img src={building} />
        </div>
    );
}

export default WelcomeAbout;