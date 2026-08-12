import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { ThemeContext } from "../context/ThemeContext";


function Navbar() {

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const { darkMode, toggleTheme } = useContext(ThemeContext);


  return (

    <nav className="bg-blue-600 text-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">


        {/* Logo */}

        <Link to="/">
          <h1 className="text-2xl font-bold">
            ShopEasy
          </h1>
        </Link>



        {/* Menu */}

        <div className="flex items-center gap-6">


          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>


          <Link to="/wishlist" className="hover:text-yellow-300">
            ❤️ Wishlist ({wishlist.length})
          </Link>


          <Link to="/cart" className="hover:text-yellow-300">
            🛒 Cart ({cart.length})
          </Link>


          <Link to="/orders" className="hover:text-yellow-300">
            📦 Orders
          </Link>


          <Link to="/profile" className="hover:text-yellow-300">
            👤 Profile
          </Link>



          {/* Dark Mode Button */}

          <button
            onClick={toggleTheme}
            className="bg-gray-900 px-3 py-2 rounded-lg"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>



          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
          >
            Login
          </Link>



          <Link
            to="/signup"
            className="bg-green-500 px-4 py-2 rounded-lg font-semibold"
          >
            Sign Up
          </Link>


        </div>


      </div>

    </nav>

  );
}


export default Navbar;