interface ScoreButtonProps {
    name:string,
    value:number,
    color:string
}

const ScoreButton = ({name, value, color}:ScoreButtonProps) => {
  return (
    <div className={`${color} w-[200px] py-2 text-md font-semibold text-center shadow-lg rounded-full`}>
      {`${name} ${value}`}
    </div>
  )
}

export default ScoreButton
