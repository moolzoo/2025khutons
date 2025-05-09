import React, { useState } from 'react';
import './CardStack.css';

const cards = [
  { id: 1, name: 'Card 1', color: '#EF4444' },
  { id: 2, name: 'Card 2', color: '#10B981' },
  { id: 3, name: 'Card 3', color: '#3B82F6' },
];

const positions = ['left', 'center', 'right'];

const CardStack = () => {
  const [cardPositions, setCardPositions] = useState(['center', 'right', 'left']);

  const handleCardClick = (index) => {
    const position = cardPositions[index];
    let newPositions = [...cardPositions];
  
    if (position === 'left') {
      // 오른쪽으로 회전: shift -> push
      const shifted = newPositions.shift();
      newPositions.push(shifted);
    } else if (position === 'right') {
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
          style={{ backgroundColor: card.color }}
          onClick={() => handleCardClick(index)}
        >
          {card.name}
        </div>
      ))}
    </div>
  );
};

export default CardStack;
