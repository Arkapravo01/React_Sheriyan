import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="items-center flex py-4 px-8 bg-cyan-900 text-xl justify-between ">
      <h2 className="text-2xl">Sheriyans</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-medium" to="/">
          Home
        </Link>
        <Link className="text-lg font-medium" to="/about">
          About
        </Link>
        <Link className="text-lg font-medium" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
