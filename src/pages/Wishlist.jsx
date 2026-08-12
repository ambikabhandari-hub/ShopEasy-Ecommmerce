import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <h2 className="text-xl text-gray-500">
          Your Wishlist is Empty
        </h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {wishlist.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">

                <h2 className="text-lg font-bold">
                  {product.name}
                </h2>

                <p className="text-blue-600 font-bold mt-2">
                  ₹ {product.price}
                </p>

                <p className="text-yellow-500 mt-1">
                  ⭐ {product.rating}
                </p>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Wishlist;