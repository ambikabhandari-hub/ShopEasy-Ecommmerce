import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Shipping Address */}

          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Shipping Address
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                placeholder="Full Address"
                className="w-full border p-3 rounded-lg"
                rows="4"
              ></textarea>

              <input
                type="text"
                placeholder="City"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="State"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Pincode"
                className="w-full border p-3 rounded-lg"
              />

            </form>

          </div>


          {/* Order Summary */}

          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Order Summary
            </h2>


            <div className="border rounded-lg p-5">

              <div className="flex justify-between mb-3">
                <span>Products</span>
                <span>₹5000</span>
              </div>


              <div className="flex justify-between mb-3">
                <span>Delivery</span>
                <span>Free</span>
              </div>


              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>₹5000</span>
              </div>


              <button
                onClick={() => navigate("/order-success")}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
              >
                Place Order
              </button>


            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;