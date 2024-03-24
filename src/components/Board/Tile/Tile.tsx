import React from 'react';
import type { FC, MouseEvent } from 'react';

import { cnTile } from './Tile.classname';

import './Tile.css';

type TileProps = {
    number: number | null,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Tile: FC<TileProps> = ({ number,  onClick }) => {

    return (
        <button className={cnTile()} onClick={onClick} >
            {number}
        </button>
    );
}

export { Tile };
export type { TileProps };
