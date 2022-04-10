import data from '../data/pokemon.json';

export const getData = (id) => {
    const json = data[id];
    const variations = json.variations;

    const rng = Math.floor(Math.random() * (variations.length - 1));

    return variations[rng];
};