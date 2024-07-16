import { Card } from "./Card";
import { CardArray, CardObj } from "../types/CardType";

interface BoardProps {
	cards: CardArray;
	onCardClick: (clickedCard: CardObj) => void;
}

export function Board({ cards, onCardClick }: BoardProps) {
	return (
		<div className="board">
			{cards.map((card) => (
				<Card key={card.index} card={card} onCardClick={onCardClick} />
			))}
		</div>
	);
}
