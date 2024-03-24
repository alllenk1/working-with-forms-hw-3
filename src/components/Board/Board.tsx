import React, { useState } from 'react';
import type { MouseEvent, FC } from 'react';

import { moveTile, isGameOver } from '../../utils';
import { cnBoard } from './Board.classname';
import { WinMessage } from './WinMessage/WinMessage';
import { Tile } from './Tile/Tile';
import type { TileProps } from './Tile/Tile';

import './Board.css';

type BoardProps = {
    tiles: (TileProps | null)[],
    onMove: (tiles: (TileProps | null)[]) => void
}

const Board: FC<BoardProps> = ({ tiles, onMove }) => {
    const [isWin, setWin] = useState(false);

    const handleMoveTile = (event: MouseEvent<HTMLButtonElement>) => {
        const currentTile = Number(event.currentTarget.textContent);

        const newTiles = moveTile(currentTile, tiles);
        onMove(newTiles);
        setWin(isGameOver(tiles));
    }

    return (
        <>
            <div className={cnBoard()}>
                {
                    !isWin ? (
                        tiles.map((tile, index) => (
                            tile
                                ? <Tile key={index} number={tile.number} onClick={handleMoveTile}/>
                                : <Tile key={index} number={null}/>
                        ))
                    ) : (
                        <WinMessage/>
                    )
                }
            </div>
        </>
    );
}

export { Board };