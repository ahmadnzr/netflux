import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/user/service";

const Navbar = () => {
  const { data } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center gap-[56px]">
      <h1 className="font-bold text-[24px] leading-[29px]">
        <Link to={"/"}>Netflux.</Link>
      </h1>
      <div className="flex flex-1 gap-[30px] text-[16px] leading-[20px]">
        <Link to={"/"}>Home</Link>
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/series"}>Series</Link>
      </div>
      <div>
        <Link to={"/search"}>Search</Link>
      </div>
      {data ? (
        <div className="flex gap-3 items-center">
          <span>Selamat datang, {data.email}</span>
          <button
            onClick={handleLogout}
            className="px-[30px] py-[10px] bg-red-300 rounded-[12px] text-black"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link
            to={"/signin"}
            className="px-[30px] py-[10px] rounded-[12px] text-[#1D4ED8]"
          >
            Sign In
          </Link>
          <Link
            to={"/signup"}
            className="px-[30px] py-[10px] bg-[#1D4ED8] rounded-[12px] text-white"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
