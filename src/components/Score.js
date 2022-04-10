import React from 'react';

import { useGameContext } from '../context/GameContext';

const Score = () => {
    const { score } = useGameContext();

    return (
        <span className="score">Score: {score}</span>
    );
};

export default Score;
