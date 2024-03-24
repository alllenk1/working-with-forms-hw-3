import React, { useState } from 'react';

import { cnApp } from './App.classname';
import { getShuffle } from "./utils";
import { Board } from './components/Board/Board';
import type { TileProps } from './components/Board/Tile/Tile';

import './App.css';

const DEFAULT_TILES: (TileProps | null)[] = Array.from({ length: 15 }, (_, index) => ({
    number: index + 1,
}));
DEFAULT_TILES.push({ number: null });

const App = () => {
    const [tiles, setTiles] = useState(getShuffle(DEFAULT_TILES));

    const handleShuffle = () => {
        const newShuffledTiles = getShuffle([...tiles]);
        setTiles(newShuffledTiles);
    }

    const handleUpdateTiles = (tiles: (TileProps | null)[]) => {
        setTiles(tiles);
    }

    return (
        <div className={cnApp()}>
            <Board tiles={tiles} onMove={handleUpdateTiles}/>

            <button className={cnApp('Button')} onClick={handleShuffle}>
                Перемешать
            </button>
        </div>
    );
}

export default App;