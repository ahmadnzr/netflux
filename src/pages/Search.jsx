import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import anime from "../assets/anime.png";
import { getMovieByTitle } from "../store/movie/service";

const Search = () => {
  const [search, setSearch] = useState("");

  const { data } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getMovieByTitle(search));
    setSearch("");
  };

  return (
    <>
      <div className="w-full mt-[100px] flex items-center justify-center">
        <div className="flex gap-5">
          <input
            type="text"
            className="px-[20px] py-[10px] font-semibold bg-transparent border rounded-md"
            placeholder="type title"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-bgButton px-[20px] py-[10px] rounded-md"
            onClick={handleSearch}
          >
            <MagnifyingGlassIcon className="h-[24px] w-[24px]" />
          </button>
        </div>
      </div>
      {data?.Search?.length > 0 ? (
        <div className="mt-[100px] grid grid-cols-2 gap-10">
          {data?.Search.map((mv, i) => (
            <div className="flex items-center gap-[10px] border" key={i}>
              <img src={mv.Poster} alt="" className="h-[200px] bg-cover" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
                    Title
                  </span>
                  <span className="flex-1">{mv.Title}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
                    Year
                  </span>
                  <span className="flex-1">{mv.Year}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
                    ImdbId
                  </span>
                  <span className="flex-1">{mv.ImdbID}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
                    Type
                  </span>
                  <span className="flex-1">{mv.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Search;
