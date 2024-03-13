import React, { useState, createContext } from "react";

import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import Cards from "./components/Cards";
import Modal from "./components/Modal";

import gearHead from "./assets/gearHead.png";
import squanchy from "./assets/squanchy.png";
import snuffles from "./assets/snuffles.png";
import michael from "./assets/michael.png";
import feratu from "./assets/vampire.png";
import birdPerson from "./assets/birdPerson.png";
import nebulon from "./assets/princeNebulon.png";
import terry from "./assets/Terry.png";
import doofusRick from "./assets/doofus rik.png";
import presidentCurtis from "./assets/president.png";
import abrodolphLincoler from "./assets/abraham.png";
import rickSanchez from "./assets/rickkk.png";

interface Card {
  id: number;
  name: string;
  image: string;
  isClicked: boolean;
}

const cardsData: Card[] = [
  { id: 1, name: "Gear Head", image: gearHead, isClicked: false },
  { id: 2, name: "Squanchy", image: squanchy, isClicked: false },
  { id: 3, name: "Snuffles", image: snuffles, isClicked: false },
  { id: 4, name: "Krombopulos Michael", image: michael, isClicked: false },
  { id: 5, name: "Coach Feratu", image: feratu, isClicked: false },
  { id: 6, name: "Bird Person", image: birdPerson, isClicked: false },
  { id: 7, name: "Prince Nebulon", image: nebulon, isClicked: false },
  { id: 8, name: "Scarry Terry", image: terry, isClicked: false },
  { id: 9, name: "Doofus Rick", image: doofusRick, isClicked: false },
  {
    id: 10,
    name: "President Curtis",
    image: presidentCurtis,
    isClicked: false,
  },
  {
    id: 11,
    name: "Abrodolph Lincoler",
    image: abrodolphLincoler,
    isClicked: false,
  },
  { id: 12, name: "Rick Sanchez", image: rickSanchez, isClicked: false },
];

export const AppContext = createContext<{
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  currentScore: number;
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
  highScore: number;
  setHighScore: React.Dispatch<React.SetStateAction<number>>;
  clickHandler: (id:number) => void;
  reset:React.Dispatch<React.SetStateAction<Card[]>>;
}>({
  cards: [],
  setCards: () => {},
  currentScore: 0,
  setCurrentScore: () => {},
  highScore: 0,
  setHighScore: () => {},
  clickHandler: () => {},
  reset:() => {}
});

function App() {
  const [cards, setCards] = useState<Card[]>(cardsData);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const shuffle = (array: Card[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

 
  const clickHandler = (id: number) => {
    setCards((prev) => {
        const shuffledArray = shuffle(prev);
        prev = shuffledArray.map((card) => {
            if (card.id === id) {
                if (!card.isClicked) {
                    return { ...card, isClicked: true };
                } else {
                    setIsModalOpen(true)
                    return card;
                }
            }
            return card;
        });
        return prev;
    });
    setCurrentScore((prev) => prev + 1);
    setHighScore((prev) => prev + 1);
};

const reset = () => {
  setCards(cardsData)
  setCurrentScore(0)
  setIsModalOpen(false)
}


  return (
    <>
      <AppContext.Provider
        value={{
          cards,
          setCards,
          currentScore,
          setCurrentScore,
          highScore,
          setHighScore,
          clickHandler,
          reset
        }}
      >
        <Header />
        <ScoreBoard />
        {isModalOpen && <Modal/>}
        <Cards />
      </AppContext.Provider>
    </>
  );
}

export default App;
