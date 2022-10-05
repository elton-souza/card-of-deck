import { useContext, useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { UserContext } from "../context/userContext";
import { getCardFeature, getCardInfo, getCardList } from "../services/api";
import { CardInfo } from "../types/card";
export function DeckCards() {
  const { user, logout } = useContext(UserContext);
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [handCards, setHandCards] = useState<CardInfo[]>([]);
  const [pickCards, setPickCards] = useState<CardInfo[]>([]);
  const recoveredCards = JSON.parse(localStorage.getItem("cards")!!);

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

  return (
    <main className="w-full min-h-screen bg-primary flex flex-col items-center p-5">
      <div className="max-w-[1280px] w-full flex flex-col gap-12">
        <header className="mt-3 flex justify-end lg:justify-center gap-3 lg:flex-col lg:items-center">
          <span className="bg-secondary w-[80px] lg:w-[130px] p-3 text-center rounded text-white font-bold">
            {user}
          </span>
          <button
            className="bg-tertiary w-[80px] lg:w-[130px] p-3 rounded text-white font-bold"
            onClick={logout}
          >
            Exit
          </button>
        </header>
        <main className="flex flex-col items-center gap-7">
          <h1 className="text-white text-2xl font-bold uppercase">
            Deck of Cards
          </h1>
          <ul className="w-full flex gap-5 justify-evenly flex-wrap">
            {handCards?.map((card) => (
              <Cards card={card} key={card.name} />
            ))}
          </ul>
          <div className="flex flex-col gap-4 lg:mb-4">
            <p className="font-bold uppercase text-white text-center">
              Cards available: {pickCards.length}
            </p>
            <div className="flex lg:flex-col gap-4 ">
              <button
                className="bg-tertiary p-3 rounded text-white font-bold"
                onClick={shuffleCards}
              >
                Shuffle
              </button>
              <button
                className="bg-tertiary p-3 rounded text-white font-bold disabled:bg-yellow-900 disabled:cursor-not-allowed"
                onClick={addCards}
                disabled={pickCards.length === 0}
              >
                Pick Card
              </button>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
