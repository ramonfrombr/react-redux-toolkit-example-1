import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-blue-900 p-4 text-white">
      <h1 className="text-2xl font-bold">Redux Blog</h1>

      <nav>
        <ul className="flex">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link to="post">Post</Link>
          </li>
          <li className="mr-5">
            <Link to="users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
