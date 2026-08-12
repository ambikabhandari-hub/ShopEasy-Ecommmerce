import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">

        <h1 className="text-5xl mb-4">🎉</h1>

        <h2 className="text-3xl font-bold text-green-600">
          Order Placed Successfully!
        </h2>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with ShopEasy.
        </p>

        <p className="mt-2 font-semibold">
          Your order has been placed successfully.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}

export default OrderSuccess;