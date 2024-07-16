import { CardObj } from "../types/CardType";

interface CardProps {
	card: CardObj;
	onCardClick: (clickedCard: CardObj) => void;
}

export function Card({ card, onCardClick }: CardProps) {
	return (
		<div
			className={`card ${card.isFlipped ? "flipped" : ""}`}
			onClick={() => onCardClick(card)}
		>
			{card.isFlipped ? card.value : "?"}
		</div>
	);
}
