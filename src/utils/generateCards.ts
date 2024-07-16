import { CardArray } from "../types/CardType";

const shuffleArray = (array: CardArray) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j: number = Math.floor(Math.random() * (i + 1));

		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
};

export const generateCards = () => {
	const values = ["A", "B", "C", "D", "E", "F", "G", "H"];

	const cards = values.map((value) => ({
		value,
		isFlipped: false,
	}));

	const duplicatedCards = cards
		.concat([...cards])
		.map((card, index) => ({ ...card, index }));

	return shuffleArray(duplicatedCards);
};
