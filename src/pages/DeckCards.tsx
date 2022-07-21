import { useContext, useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { UserContext } from "../context/userContext";
import { useCards } from "../hooks/useCards";
export function DeckCards() {
  const { user, logout } = useContext(UserContext);

  const { handCards, addCards, shuffleCards, pickCards } = useCards();

  return (
    <main className="w-full min-h-screen bg-primary flex flex-col items-center">
      <div className="max-w-[1280px] w-full mt-[10px] flex flex-col gap-12">
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
