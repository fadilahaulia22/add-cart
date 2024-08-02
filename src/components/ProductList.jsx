import React, { useContext } from "react";
import { CartContext } from "../App";

export default function ProductList({ products }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex gap-5 flex-wrap mt-12">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2 className="text-lg my-2">{product.name}</h2>
          <p className="product-price">Rp {product.price}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
