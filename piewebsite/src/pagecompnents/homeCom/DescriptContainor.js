import React from "react";
import Description from "./Description";
import descriptionData from "../../data/descriptionData";

function DescriptionContainor() {
    return(
        <div className="contain">
            {descriptionData.map((data) => (
                <Description
                head={data.description}
                para={data.paragraph}
                />
            ))}
        </div>
    );
}

export default DescriptionContainor;