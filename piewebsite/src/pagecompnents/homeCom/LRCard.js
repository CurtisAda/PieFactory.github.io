import React from "react";

function LRCard(props) {
    const x = props.image;
    return(
        <div className="cardBox">
            <div className="leftBoxLR">
                <img src={props.image} />
            </div>
            <div className="rightBoxLR">
                <div>{props.title}</div>
                <p>{props.words}</p>
            </div>
        </div>
    );
}

export default LRCard;