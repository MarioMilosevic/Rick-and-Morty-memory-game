import ScoreButton from "./ScoreButton";
import { useContext } from "react";
import { AppContext } from "../App";

const ScoreBoard = () => {

  const appContext = useContext(AppContext)
  const {currentScore,highScore} = appContext

  return (
    <div className="flex justify-center gap-16 py-8">
      <ScoreButton value={currentScore} color={"bg-pink-300"} name={"Current Score:"} />
      <ScoreButton value={highScore} color={"bg-green-300"} name={"High Score:"} />
    </div>
  );
};

export default ScoreBoard;
