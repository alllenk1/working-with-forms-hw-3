import type { TileProps } from "./components/Board/Tile/Tile";

const getShuffle = (tiles: (TileProps | null)[]): (TileProps | null)[] => {
	let shuffledTiles = [...tiles];

	do {
		shuffledTiles = shuffleTiles(shuffledTiles);
	} while (!isSolvable(shuffledTiles));

	return shuffledTiles;
};

const shuffleTiles = (tiles: (TileProps | null)[]): (TileProps | null)[] => {
	let currentIndex = tiles.length;

	while (currentIndex !== 0) {
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		let temporaryValue = tiles[currentIndex];
		tiles[currentIndex] = tiles[randomIndex];
		tiles[randomIndex] = temporaryValue;
	}

	return tiles;
};

const isSolvable = (tiles: (TileProps | null)[]): boolean => {
	let inversions = 0;

	for (let i = 0; i < tiles.length; i++) {
		for (let j = i + 1; j < tiles.length; j++) {
			if (tiles[i]?.number !== null && tiles[i]?.number !== undefined &&
				tiles[i]?.number! > tiles[j]?.number!) {
				inversions++;
			}
		}
	}

	return inversions % 2 === 0;
};

const moveTile = (currentTile: number, tiles: (TileProps | null)[]): (TileProps | null)[]  => {
	const tileIndex = tiles.findIndex(tile => tile?.number === currentTile);
	const nullIndex = tiles.findIndex(tile => tile?.number === null);

	if ((Math.abs(tileIndex - nullIndex) === 1
		&& Math.floor(tileIndex / 4) === Math.floor(nullIndex / 4))
		|| Math.abs(tileIndex - nullIndex) === 4) {

		const newTiles = [...tiles];
		newTiles[nullIndex] = newTiles[tileIndex];
		newTiles[tileIndex] = { number: null };

		return newTiles;
	} else {
		return tiles;
	}
};

const isGameOver = (tiles: (TileProps | null)[]): boolean => {
	const emptyTileIndex = tiles.findIndex(tile => tile === null);
	if (emptyTileIndex === -1 || emptyTileIndex !== tiles.length - 1) {
		return false;
	}

	for (let i = 0; i < tiles.length - 1; i++) {
		if (tiles[i] && tiles[i]?.number !== i + 1) {
			return false;
		}
	}

	return true;
};

export { getShuffle, moveTile, isGameOver };