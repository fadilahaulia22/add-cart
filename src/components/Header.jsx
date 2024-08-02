import { House } from "lucide-react";
import Cart from "./Cart";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-2xl font-bold">Getch Store</h1>
      <div className="flex items-center space-x-4">
        <House className="w-6 h-6" />
        <Cart />
        <button className="bg-white text-blue-500 px-4 py-2 rounded">
          Login
        </button>
      </div>
    </header>
  );
}
