import Card from "./Card"
import { useContext } from "react"
import { AppContext } from "../App"
const Cards = () => {
  console.log(AppContext)
  const {cards} = useContext(AppContext)
  console.log(cards)
  return (
      <section className="grid gap-6 grid-cols-4 w-[35%] mx-auto">
       {cards.map(card => {
        return <Card key={card.id} image={card.image} name={card.name}/>
       })}
         </section>
  )
}

export default Cards
