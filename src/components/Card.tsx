import { useContext } from "react";
import { AppContext } from "../App";

interface CardProps {
  image: string;
  name: string;
  id: number;
}

const Card = ({ image, name, id }: CardProps) => {
  const { setCards, setHighScore, setCurrentScore } = useContext(AppContext);

  const clickHandler = (id:number) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isClicked: !card.isClicked } : card
      )
    );
    setCurrentScore(prev => prev + 1)
    setHighScore(prev => prev + 1)
  };

  return (
    <li
      className="bg-gray-50 rounded-xl border flex flex-col cursor-pointer justify-between items-center p-2 w-[150px] h-[195px] shadow-2xl text-center duration-200 hover:scale-110"
      onClick={() => clickHandler(id)}
    >
      <img className="h-[70%]" src={image} alt={image} />
      <h2 className="pt-2 text-sm font-semibold">{name}</h2>
    </li>
  );
};

export default Card;
