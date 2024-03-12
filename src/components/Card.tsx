interface CardProps {
  image:string,
  name:string
}

const Card = ({image, name}:CardProps) => {
  return (
    <li className="rounded-xl border flex flex-col items-center p-2 w-[150px] h-[195px] shadow-2xl text-center">
      <img className="h-[80%] p-1" src={image} alt="Rick" />
      <h2 className="pt-2">{name}</h2>
    </li>
  );
};

export default Card;
