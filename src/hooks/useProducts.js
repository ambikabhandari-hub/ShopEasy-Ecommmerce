import { useEffect, useState } from "react";

function useProducts() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch("https://fakestoreapi.com/products")

      .then((response) => response.json())

      .then((data) => {

        setProducts(data);
        setLoading(false);

      })

      .catch((error) => {

        console.log(error);
        setLoading(false);

      });


  }, []);



  return {
    products,
    loading
  };

}


export default useProducts;