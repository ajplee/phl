import React from 'react';

import { useGameContext } from '../context/GameContext';

const Lose = () => {
    const { setStarted, score, setScore } = useGameContext();

    const handleMenuClick = () => {
        setScore(0);
        setStarted(false);
    };

    const handlePlayAgainClick = () => {
        setScore(0);
    };

    return (
        <div>
            <h1>You Scored: {score}</h1>
            <button onClick={handleMenuClick}>Back to Menu</button>
            <button onClick={handlePlayAgainClick}>Play Again</button>
        </div>    
    );
};