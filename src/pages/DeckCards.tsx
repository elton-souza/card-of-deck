import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useCards } from "../hooks/useCards";
export function DeckCards() {
  const { user, logout } = useContext(UserContext);

  const { handCards, addCards, shuffleCards, pickCards } = useCards();

  return (
    <main className="w-full min-h-screen bg-primary flex flex-col items-center">
      <div className="max-w-[1280px] w-full mt-[40px] flex flex-col gap-12">
        <header className="mt-4 flex justify-end gap-3">
          <span className="bg-secondary p-3 rounded text-white font-bold">
            Usuário: {user}
          </span>
          <button
            className="bg-tertiary w-[80px] rounded text-white font-bold"
            onClick={logout}
          >
            Sair
          </button>
        </header>
        <main className="flex flex-col items-center gap-14">
          <h1 className="text-white text-2xl font-bold uppercase">
            Baralho de Cartas
          </h1>

          <ul className="w-full flex gap-5 justify-evenly flex-wrap">
            {handCards?.map((card) => (
              <li
                className="flex flex-col justify-start items-center bg-secondary h-[250px] w-[250px] rounded border-2 border-white text-white font-bold uppercase gap-4"
                key={card.name}
              >
                <img
                  src={card.sprites.other.dream_world.front_default}
                  alt={card.name}
                  className="w-[130px] h-[130px] mt-[10px]"
                />
                <div className="flex flex-col items-center">
                  <span>{card.name}</span>
                  <div className="flex gap-1">
                    {card.types.map((value) => (
                      <span key={value.type.name}>{value.type.name}</span>
                    ))}
                  </div>
                  <span>{card.points}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4">
            <p className="font-bold uppercase text-white">
              Cartas Disoponíveis: {pickCards.length}
            </p>
            <div className="flex gap-4">
              <button
                className="bg-tertiary p-3 rounded text-white font-bold"
                onClick={shuffleCards}
              >
                Embaralhar
              </button>
              <button
                className="bg-tertiary p-3 rounded text-white font-bold disabled:bg-yellow-900 disabled:cursor-not-allowed"
                onClick={addCards}
                disabled={pickCards.length === 0}
              >
                Puxar carta
              </button>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
