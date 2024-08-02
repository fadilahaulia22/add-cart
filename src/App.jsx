import React, { createContext, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export const CartContext = createContext();

const products = [
  {
    id: 1,
    name: "Bag Purple Lucu",
    price: 500000,
    image: "https://i.pinimg.com/564x/d1/83/84/d1838492f66faa5bf5f724186062d70c.jpg"
  },
  {
    id: 2,
    name: "Earphone",
    price: 499009,
    image: "https://i.pinimg.com/736x/75/ff/95/75ff95e7e42a74901da1ef404fa1c46c.jpg"
  },
  {
    id: 3,
    name: "Lamp",
    price: 190099,
    image: "https://i.pinimg.com/564x/09/ba/cf/09bacfc85de9c238d76bd49b0ec0522c.jpg"
  },
  {
    id: 4,
    name: "Cassing",
    price: 68009,
    image: "https://i.pinimg.com/564x/8c/54/02/8c5402f1eda123e0d112812eb81a1980.jpg"
  }, 
  {
    id: 5,
    name: "Ganci",
    price: 78009,
    image: "https://i.pinimg.com/736x/db/ed/e2/dbede2c7edc8874bc89dd3fac83891a2.jpg"
  }, 
  {
    id: 6,
    name: "Glass",
    price: 9009,
    image: "https://i.pinimg.com/564x/12/d4/29/12d429b3c3cf495be4993a7804fb0119.jpg"
  },
];


export default function App() {
  const [cartItems, setCartItems] = useState([]);
  // const numberRef = useRef(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      <Header />
      {/* <button
        onClick={() => {
          alert(`Angka ${numberRef.current}`);
          numberRef.current++;
        }}
      >
        Tampilkan Angka
      </button> */}
      <ProductList products={products} /> 
    </CartContext.Provider>
  );
}
