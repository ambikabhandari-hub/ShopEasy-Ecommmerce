import { Outlet } from "react-router-dom";
import { useContext } from "react";

import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/ThemeContext";


function MainLayout() {

  const { darkMode } = useContext(ThemeContext);


  return (

    <div
      className={
        darkMode
          ? "dark bg-gray-900 min-h-screen text-white"
          : "bg-white min-h-screen text-black"
      }
    >

      <Navbar />


      <main>
        <Outlet />
      </main>


    </div>

  );
}


export default MainLayout;