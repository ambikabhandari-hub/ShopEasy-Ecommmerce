import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";


function App() {

  return (

    <Routes>

      <Route path="/" element={<MainLayout />}>

        {/* Home */}
        <Route index element={<Home />} />


        {/* Product Details */}
        <Route 
          path="product/:id" 
          element={<ProductDetails />} 
        />


        {/* Cart */}
        <Route 
          path="cart" 
          element={<Cart />} 
        />


        {/* Wishlist */}
        <Route 
          path="wishlist" 
          element={<Wishlist />} 
        />


        {/* Checkout */}
        <Route 
          path="checkout" 
          element={<Checkout />} 
        />


        {/* Order Success */}
        <Route 
          path="order-success" 
          element={<OrderSuccess />} 
        />


        {/* Orders History */}
        <Route 
          path="orders" 
          element={<Orders />} 
        />


        {/* Profile */}
        <Route 
          path="profile" 
          element={<Profile />} 
        />


        {/* Login Signup */}
        <Route 
          path="login" 
          element={<Login />} 
        />

        <Route 
          path="signup" 
          element={<Signup />} 
        />


      </Route>

    </Routes>

  );
}


export default App;