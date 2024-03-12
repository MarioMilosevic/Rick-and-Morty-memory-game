import { useContext } from "react";
import { AppContext } from "../App";


interface CardProps {
  image:string,
  name:string
}

const Card = ({image, name}:CardProps) => {
  const {clickHandler} = useContext(AppContext)
  return (
    <li className="rounded-xl border flex flex-col cursor-pointer justify-between items-center p-2 w-[150px] h-[195px] shadow-2xl text-center duration-200 hover:scale-110" onClick={clickHandler}>
      <img className="h-[70%]" src={image} alt="Rick" />
      <h2 className="pt-2 text-sm font-semibold">{name}</h2>
    </li>
  );
};

export default Card;
