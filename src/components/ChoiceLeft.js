import React from 'react';

import { useGameContext } from '../context/GameContext';
import { getData } from '../util/query';

const ChoiceLeft = (props) => {
    const { name, link } = props;

    const handleClick = () => {
        console.log('left clicked');
    };

    return(
        <div>
            <div className="split left">
                <div className="centered">
                    <img className="image" src={link}/>
                    <h2>{name}</h2>
                    <button onClick={handleClick}>Select</button>
                </div>
            </div>
        </div>
    );
};

export default ChoiceLeft;
