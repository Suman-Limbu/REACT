import { useState } from "react";

export default function Card({ title, price, brand }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="card">
      <h1>{title}</h1>
      <span>{price}</span>
      <p>{brand}</p>

      <button
        onClick={() => {
          setFavorite(!favorite);
        }}
     >
        {favorite ? "notlike" : "like"}
      </button>
    </div>
  );
}
