function Orders() {

  const orders = [
    {
      id: 101,
      date: "07 August 2026",
      amount: 5000,
      status: "Delivered"
    },
    {
      id: 102,
      date: "05 August 2026",
      amount: 2500,
      status: "Shipped"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          My Orders
        </h1>


        <div className="space-y-5">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-white rounded-lg shadow-md p-6"
            >

              <h2 className="text-xl font-bold">
                Order #{order.id}
              </h2>


              <p className="mt-2">
                Date: {order.date}
              </p>


              <p>
                Amount: ₹ {order.amount}
              </p>


              <p className="text-green-600 font-semibold">
                Status: {order.status}
              </p>


            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Orders;