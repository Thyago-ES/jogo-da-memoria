import { useState } from "react";
import { Board } from "./Board";
import { generateCards } from "../utils/generateCards";
import { CardArray, CardObj } from "../types/CardType";

export function Game() {
	const [cards, setCards] = useState<CardArray>(generateCards());
	const [flippedCards, setFlippedCards] = useState<[] | CardArray>([]);
	const [chances, setChances] = useState(6);

	const result = cards.filter((card) => card.isFlipped).length;

	const handleCardClick = (clickedCard: CardObj) => {
		if (chances === 0) return;

		if (flippedCards.length === 2) return;

		const newCards = cards.map((card) => {
			return card.index === clickedCard.index
				? { ...card, isFlipped: true }
				: card;
		});

		setCards(newCards);
		setFlippedCards([...flippedCards, clickedCard]);

		if (flippedCards.length === 1) {
			setTimeout(() => {
				const [firstCard] = flippedCards;

				if (firstCard.value !== clickedCard.value) {
					const resetCards = cards.map((card) => {
						return card.index === firstCard.index ||
							card.index === clickedCard.index
							? { ...card, isFlipped: false }
							: card;
					});

					setCards(resetCards);
					setChances((prev) => prev - 1);
				}

				setFlippedCards([]);
			}, 600);
		}
	};

	const resetGame = () => {
		setChances(6);
		setFlippedCards([]);
		setCards(generateCards());
	};

	return (
		<div className="game">
			<Board cards={cards} onCardClick={handleCardClick} />
			{chances === 0 ? (
				<p>Suas tentativas acabaram!</p>
			) : result === cards.length ? (
				<h2>Parabéns, você ganhou!</h2>
			) : (
				<p>Você tem {chances} tentativa(s)!</p>
			)}
			<button className="btn" onClick={resetGame}>
				Reiniciar o jogo
			</button>
		</div>
	);
}
