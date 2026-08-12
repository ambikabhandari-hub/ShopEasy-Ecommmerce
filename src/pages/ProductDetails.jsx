import { useParams } from "react-router-dom";
import products from "../data/Products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="max-w-6xl mx-auto p-10">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg shadow-lg"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-yellow-500 mt-3">
            ⭐ {product.rating}
          </p>

          <h2 className="text-3xl font-bold text-blue-600 mt-4">
            ₹ {product.price}
          </h2>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;