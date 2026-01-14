
import React from "react";

function CardPizza({name, price, ingredients = [], imagenUrl }) {
 
  return (
   <div className="card mb-4">
      <img src={imagenUrl} className="card-img-top" alt={name} />
    <div className="card-body text-center">
        <h5 className="card-title">Pizza {name}</h5>


      <p className="card-text">
          <strong>Ingredientes:</strong><br />
          🍕 {ingredients.join(", ")}
        </p>

        <h6 className="mb-3">Precio: ${price}</h6>

        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary btn-sm">
            Ver más 👀
          </button>
          <button className="btn btn-dark btn-sm">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>

  );
}

export default CardPizza;