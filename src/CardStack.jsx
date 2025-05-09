import React, { useState } from "react";
import "./CardStack.css";
import potatoImg from "./assets/images/potato.png";
import mooImg from "./assets/images/moo.png";
import siImg from "./assets/images/시금치 프레임.png";
import cornImg from "./assets/images/옥수수 프레임.png";

const cards = [
  { id: 1, name: "Card 1", img: mooImg },
  { id: 2, name: "Card 2", img: cornImg },
  { id: 3, name: "Card 3", img: siImg },
];

const positions = ["left", "center", "right"];

const CardStack = () => {
  const [cardPositions, setCardPositions] = useState([
    "center",
    "right",
    "left",
  ]);

  const handleCardClick = (index) => {
    const position = cardPositions[index];
    let newPositions = [...cardPositions];

    if (position === "left") {
      // 오른쪽으로 회전: shift -> push
      const shifted = newPositions.shift();
      newPositions.push(shifted);
    } else if (position === "right") {
      // 왼쪽으로 회전: pop -> unshift
      const popped = newPositions.pop();
      newPositions.unshift(popped);
    }

    setCardPositions(newPositions);
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${cardPositions[index]}`}
          onClick={() => handleCardClick(index)}
        >
          <img
            src={card.img}
            alt={card.name}
            className="card-image"
            style={{ width: "100%", height: "100%", borderRadius: "5px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
