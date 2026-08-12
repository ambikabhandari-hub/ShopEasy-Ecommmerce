import { useState, useContext } from "react";

import useProducts from "../hooks/useProducts";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import WishlistButton from "./WishlistButton";

import { CartContext } from "../context/CartContext";


function Products() {

  const { products, loading } = useProducts();

  const { addToCart } = useContext(CartContext);


  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");



  if (loading) {

    return (

      <h2 className="text-center text-3xl font-bold mt-10">
        Loading Products...
      </h2>

    );

  }



  const categories = [
    "All",
    ...new Set(products.map((item) => item.category))
  ];



  const filteredProducts = products.filter((item) => {

    const searchMatch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase());


    const categoryMatch =
      category === "All" ||
      item.category === category;


    return searchMatch && categoryMatch;

  });



  return (

    <div className="max-w-7xl mx-auto p-6">


      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>



      <SearchBar 
        search={search}
        setSearch={setSearch}
      />



      <CategoryFilter
        categories={categories}
        category={category}
        setCategory={setCategory}
      />



      <div className="grid md:grid-cols-3 gap-6 mt-8">


        {filteredProducts.map((product) => (


          <div
            key={product.id}
            className=" relative bg-white shadow-lg rounded-lg p-5"
          >


            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain"
            />



            <h2 className="text-xl font-bold mt-4">
              {product.title}
            </h2>



            <p className="text-blue-600 font-bold text-lg">
              ₹ {product.price}
            </p>



            <p>
              ⭐ {product.rating.rate}
            </p>



            <div className="flex gap-3 mt-4">


              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Add Cart
              </button>



              <WishlistButton product={product} />


            </div>


          </div>


        ))}


      </div>


    </div>

  );
}


export default Products;