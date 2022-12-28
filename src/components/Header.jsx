import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Redux Blog</h1>

      <nav>
        <ul className="flex">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
