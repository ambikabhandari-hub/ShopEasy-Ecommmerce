function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Shoes",
    "Electronics",
    "Watches",
  ];

  return (
    <div className="flex justify-center gap-4 flex-wrap my-6">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-lg font-semibold ${
            category === item
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;