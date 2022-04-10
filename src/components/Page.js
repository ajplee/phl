import React, { useState, useEffect } from 'react';

import Heading from './Heading';
import ChoiceLeft from './ChoiceLeft';
import ChoiceRight from './ChoiceRight';
import Begin from './Begin';
import Score from './Score';
import { getData } from '../util/query';
import GameContext, { useGameContext } from '../context/GameContext';

const min = 1;
const max = 809;
const options = ["Weight", "Height", "Speed"];

const Page = (props) => {

    const [firstId, setFirstId] = useState(null);
    const [secondId, setSecondId] = useState(null);
    const [firstData, setFirstData] = useState({});
    const [secondData, setSecondData] = useState({});
    const [comparison, setComparison] = useState(options[Math.floor(Math.random()*options.length)]);

    const { started } = useGameContext();

    useEffect(() => {
        let first = Math.floor(Math.random() * (max - min + 1) + min);
        let second = Math.floor(Math.random() * (max - min + 1) + min);

        while(first === second) {
            second = Math.floor(Math.random() * (max - min + 1) + min);
        };
        setFirstId(first);
        setSecondId(second); 
    }, []);

    useEffect(() => {
        if (firstId && secondId) {
            setFirstData(getData(firstId));
            setSecondData(getData(secondId));
        }
    }, [firstId, secondId]);

    const renderBegin = () => {
        return <Begin />;
    };

    const renderGame = () => {
        return (
            <div>
                <Heading comparison={comparison}/>
                <ChoiceLeft name={firstData.name} link={firstData.image}/>
                <ChoiceRight name={secondData.name} link={secondData.image}/>
                <Score />
            </div>
        );
    };

    return (
        <div className="page">
            {started ? renderGame() : renderBegin()}
        </div>
    );
}

export default Page;