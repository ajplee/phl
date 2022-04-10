import React, { useState } from 'react';

const Heading = ({ comparison }) => {

    const buildQuestion = (comparison) => {
        if (comparison === "Weight") {
            return "Which Pokemon is Heavier?";
        } else if (comparison === "Height") {
            return "Which Pokemon is Taller?";
        } else if (comparison === "Speed") {
            return "Which Pokemon is Faster?";
        }
    };

    return (
        <div className="heading">
            <h1>{buildQuestion(comparison)}</h1>
        </div>  
    )
}

export default Heading;