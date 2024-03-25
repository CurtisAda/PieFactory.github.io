import React from "react";
import image from '../../resource/image/line_of_pie.jpg'

function WelcomeImage() {
    return(
        <div className="theImage">
            <img src={image} />
        </div>
    );
}

export default WelcomeImage;