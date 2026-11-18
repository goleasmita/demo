import React from "react";
import products from "../data/products.json";

export default function About() {
  return (
    <div>
      {products.map((v) => (
        <>
          <div>
            <h3>{v.name}</h3>
            <img src={v.image} alt={v.name} />
          </div>
        </>
      ))}
    </div>
  );
}
