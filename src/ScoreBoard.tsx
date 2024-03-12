import ScoreButton from "./components/ScoreButton";
const ScoreBoard = () => {
  return (
    <div className="flex justify-center gap-16 py-8">
      <ScoreButton value={0} color={"bg-pink-300"} name={"Current Score:"}/>
      <ScoreButton value={0} color={"bg-green-300"} name={"High Score:"}/>
    </div>
  );
};

export default ScoreBoard;
