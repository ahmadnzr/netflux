import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-[56px]">
      <h1 className="font-bold text-[24px] leading-[29px]">
        <Link to={"/"}>Netflux.</Link>
      </h1>
      <div className="flex flex-1 gap-[30px] text-[16px] leading-[20px]">
        <Link to={"/"}>Home</Link>
        <a href="#movies">Movies</a>
        <a href="#series">Series</a>
      </div>
      <div>
        <Link to={"/search"}>Search</Link>
      </div>
      <div className="flex gap-3">
        <button className="px-[30px] py-[10px] rounded-[12px] text-[#1D4ED8]">
          Sign up
        </button>
        <button className="px-[30px] py-[10px] bg-[#1D4ED8] rounded-[12px] text-white">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
