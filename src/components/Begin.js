import Heading from './Heading';
import { useGameContext } from '../context/GameContext';

const Begin = () => {

    const { started, setStarted } = useGameContext();

    const handleClick = () => {
        setStarted(true);
    }
    return (
        <div>
             <h1>Pokemon Higher or Lower</h1>
            <button onClick={handleClick}>Start</button>
        </div>
    )
}

export default Begin;