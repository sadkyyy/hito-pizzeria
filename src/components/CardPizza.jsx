import React from "react";


function CardPizza ({pizza}){
  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>{pizza.price}</p>

      <ul>
        {pizza.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
export default CardPizza;