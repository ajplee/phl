import { createContext, useContext } from 'react';

const GameContext = createContext({
    started: false,
    setStarted: () => {},
    score: 0,
    setScore: () => {}
});

export const useGameContext = () => useContext(GameContext);
export default GameContext;
