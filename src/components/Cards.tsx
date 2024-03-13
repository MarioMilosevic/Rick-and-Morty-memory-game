import Card from "./Card";
import { useContext } from "react";
import { AppContext } from "../App";
const Cards = () => {
  const { cards } = useContext(AppContext);

  return (
    <section className="grid grid-cols-4 gap-4 w-[50%] place-items-center mx-auto">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            id={card.id}
            isClicked={card.isClicked}
          />
        );
      })}
    </section>
  );
};

export default Cards;
