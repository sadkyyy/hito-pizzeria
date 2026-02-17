import React, { useState } from "react";
import { pizzaCart } from "./pizzas";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    newCart[index].count++;
    setCart(newCart);
  };

  const reducir = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);

    if (newCart[index].count === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].count--;
    }

    setCart(newCart);
  };

  const total = cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p className="empty">El carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div className="item" key={item.id}>
            <div className="izq">
              
            <img src={item.img} alt={item.name} className="me-3 rounded" style={{ width: "80px", height: "80px", objectFit: "cover" }}/>
        
              <p className="name">{item.name}</p>
              <p className="price">${item.price}</p>
              <div className="contador">
                <button  className="btn btn-outline-danger me-2"
                
                onClick={() => reducir(item.id)}>-</button>
                <span>{item.count}</span>
                <button 
                className="btn btn-outline-primary ms-2"
                onClick={() => aumentar(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="total">
        <p>Total: ${total}</p>
        <button className="comprarbutton">Comprar</button>
      </div>
    </div>
  );
}

export default Cart;
