import React from "react";
import CardPizza from "./CardPizza.jsx";


function Home() {
   return (
  <div className="container mt-4">
      <div className="row">
        
        <div className="col-md-4">
<CardPizza
name="Napolitana"
price={5950}
ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
imagenUrl="https://imag.bonviveur.com/pizza-napolitana.jpg"
/>
 </div>

        <div className="col-md-4">
<CardPizza
name="Española"
price={6950}
ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
imagenUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQjx4oD8CwzwH8qS7M_rhTtpdK5f4L_BE-Q&s"
/>
 </div>

         <div className="col-md-4">
<CardPizza
name="Pepperoni"
price={6950}
ingredients={["mozzarella", "pepperoni", "orégano"]}
imagenUrl="https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"
/>
  </div>

        </div>
    </div>

  );
}

export default Home;