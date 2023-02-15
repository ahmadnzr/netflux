import React from "react";
import { Link } from "react-router-dom";

const Featured = ({ data: dData }) => {
  return (
    <div className="flex gap-[20px]">
      <img src={dData?.Poster} alt="" />
      <div className=" flex flex-col items-start">
        <h1 className="mt-[10px] text-2xl font-bold">
          {dData.Title} ({dData.Year})
        </h1>
        <span className="mt-[10px] px-[10px] py-[5px] bg-blue-900 rounded-full text-xs">
          {dData.Type}
        </span>
        <Link
          className="mt-[20px] px-[20px] py-[10px] bg-bgButton"
          to={"/movie/" + dData.imdbID}
        >
          Lihat Sekarang
        </Link>
      </div>
    </div>
  );
};

export default Featured;
