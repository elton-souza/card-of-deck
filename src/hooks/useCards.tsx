import { useEffect, useState } from "react";
import { getCardFeature, getCardInfo, getCardList } from "../services/api";
import { CardInfo } from "../types/card";

export function useCards() {
  const recoveredCards = JSON.parse(localStorage.getItem("cards")!!);

  const [cards, setCards] = useState<CardInfo[]>([]);
  const [handCards, setHandCards] = useState<CardInfo[]>([]);
  const [pickCards, setPickCards] = useState<CardInfo[]>([]);

  const createListCards = async () => {
    const { data } = await getCardList();

    data.results.map(async (poke) => {
      const pokemonBase = await getCardInfo(poke.name);
      const pokemonFeature = await getCardFeature(pokemonBase.data.id)
      
      setCards((state) => [
        ...state,
        {
          ...pokemonBase.data,
          points: Math.floor(Math.random() * 10),
          descriptions: pokemonFeature.data.descriptions
        },
      ]);
    });
  };

  const shuffleCards = () => {
    setHandCards([...handCards].sort(() => Math.random() - 0.5));
  };

  const addCards = () => {
    setHandCards((state) => [...state, pickCards[0]]);
    setPickCards((state) => [...state].slice(1));
  };

  const createStartHand = () => {
    setHandCards(cards.slice(0, 5));
    setPickCards(cards.slice(5, 8));
  };

  useEffect(() => {
    if (recoveredCards) {
      setCards(recoveredCards);
    } else {
      createListCards();
    }
  }, []);

  useEffect(() => {
    if (cards.length === 8) {
      localStorage.setItem("cards", JSON.stringify(cards));
      createStartHand();
    }
  }, [cards]);


  return { handCards, shuffleCards, addCards, pickCards };
}
