import React from "react";

function Description(props) {
    return(
        <div className="descriptionBox" style={{color:"white", background:"black"}}>
            <div className="head">
                {props.head}
            </div>
            <div className="para">
                {props.para}
            </div>
        </div>
    );
}

export default Description;