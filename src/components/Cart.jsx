import { useContext, useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { CartContext } from "../App";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="relative">
      <div className="relative">
        {cartItems.length > 0 && (
          <div className="absolute bottom-4 left-4 bg-red-500 text-black rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {cartItems.length}
          </div>
        )}
        <ShoppingCart className="cursor-pointer" onClick={togglePopup} />
      </div>
      {showPopup && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
          <button className="absolute top-2 right-2" onClick={togglePopup}>
            <X className=" text-black w-4 h-4" />
          </button>
          {cartItems.length === 0 ? (
            <p className="text-black">Your cart is empty.</p>
          ) : (
            cartItems.map((product) => (
              <div key={product.id} className="flex items-center mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 mr-2 rounded"
                />
                <div>
                  <h2 className="font-semibold text-black">{product.name}</h2>
                  <p className="text-gray-500">Rp {product.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
