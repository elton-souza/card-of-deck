import { CardInfo } from "../types/card";

interface CardsProps {
  card: CardInfo;
}

export function Cards({ card }: CardsProps) {
  return (
    <li className="flex flex-col bg-secondary h-[300px] w-[250px] rounded border-4 border-secondary text-white font-bold gap-3 text-[14px] tracking-widest pb-3">
      <div className="bg-white rounded">
        <img
          src={card.sprites.other.dream_world.front_default}
          alt={card.name}
          className="w-[130px] h-[130px] my-[15px] mx-auto"
        />
      </div>
      <div className="flex flex-col px-3 gap-3">
        <span>Name: {card.name[0].toUpperCase() + card.name.substring(1)}</span>
        <span>
          Description:{" "}
          {card.descriptions.map((value) => {
            if (value.language.name === "en")
              return <span key={value.language.name}>{value.description}</span>;
          })}
        </span>
        <span>Points: {card.points}</span>
      </div>
    </li>
  );
}
