import React, { useState, useMemo } from 'react';

import './App.scss';
import Page from './components/Page';
import data from './data/pokemon.json';
import GameContext from './context/GameContext';

function App() {
    const [started, setStarted] = useState(false);
    const [score, setScore] = useState(0);

    const value = useMemo(() => ({
        started, setStarted, score, setScore,
    }), [started, score]);

    return (
        <GameContext.Provider value={value}>
            <Page />
        </GameContext.Provider>    
    );
}

export default App;
