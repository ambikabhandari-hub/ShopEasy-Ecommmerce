function Categories() {
  const categories = [
    {
      id: 1,
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400"
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    },
    {
      id: 3,
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
      id: 4,
      name: "Watches",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              <h3 className="text-center text-xl font-semibold py-4">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Categories;