import React from 'react';

import { useGameContext } from '../context/GameContext';

const ChoiceRight = (props) => {
    const { name, link } = props;

    console.log(`"${link}"`);
    
    return(
        <div>
            <div className="split right">
                <div className="centered">
                    <img className="image" src={link}/>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default ChoiceRight;
