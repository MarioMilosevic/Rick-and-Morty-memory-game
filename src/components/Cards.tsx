import Card from "./Card";
import { useContext } from "react";
import App, { AppContext } from "../App";
const Cards = () => {
  const { cards } = useContext(AppContext);

  // const clickHandler = (id) => {
  //   setCards((prev) => {
  //     return {...prev, isClicked:}
  //   })
  // };

  return (
    <section className="grid gap-6 grid-cols-4 w-[35%] mx-auto">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            id={card.id}
          />
        );
      })}
    </section>
  );
};

export default Cards;
