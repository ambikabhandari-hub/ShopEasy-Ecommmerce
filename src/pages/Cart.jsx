import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";


function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);


  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>


      {cart.length === 0 ? (

        <div className="text-center py-20">

          <h2 className="text-2xl text-gray-500">
            Your Cart is Empty
          </h2>

          <Link
            to="/"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Continue Shopping
          </Link>

        </div>

      ) : (

        <>
          {/* Cart Items */}

          <div className="space-y-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex justify-between items-center bg-white shadow-md rounded-lg p-5"
              >

                {/* Product */}

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-contain"
                  />

                  <div>

                    <h2 className="text-xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-blue-600 font-bold mt-2">
                      ₹ {item.price}
                    </p>

                    <p className="text-yellow-500">
                      ⭐ {item.rating?.rate || "N/A"}
                    </p>

                  </div>

                </div>


                {/* Quantity */}

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-500 text-white w-10 h-10 rounded-full"
                  >
                    -
                  </button>

                  <span className="text-xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-500 text-white w-10 h-10 rounded-full"
                  >
                    +
                  </button>

                </div>


                {/* Item Total */}

                <div className="font-bold text-lg">

                  ₹ {(item.price * item.quantity).toFixed(2)}

                </div>

              </div>

            ))}

          </div>


          {/* Grand Total */}

          <div className="mt-10 bg-gray-100 rounded-lg p-6">

            <h2 className="text-3xl font-bold">
              Grand Total: ₹ {totalPrice.toFixed(2)}
            </h2>


            <Link
              to="/checkout"
              className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>

          </div>

        </>

      )}

    </div>
  );
}


export default Cart;