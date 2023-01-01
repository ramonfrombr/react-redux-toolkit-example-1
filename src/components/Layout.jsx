import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="p-5 bg-gray-800 min-h-screen">
        <div className="sm:w-2/3 m-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
