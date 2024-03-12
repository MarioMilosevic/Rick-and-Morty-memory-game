import React from "react";
import rickImg from "../assets/gearHead.png";

const Card = () => {
  return (
    <div className="rounded-lg border shadow-2xl">
      <img src={rickImg} alt="Rick" />
      <h2>Mario Milosevic</h2>
    </div>
  );
};

export default Card;
