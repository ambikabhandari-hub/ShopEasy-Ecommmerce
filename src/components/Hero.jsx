function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-gray-800">
            Welcome to ShopEasy
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Discover the latest fashion, electronics and accessories at the best prices.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Shop Now
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=700"
            alt="Shopping"
            className="rounded-xl shadow-lg w-96"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;