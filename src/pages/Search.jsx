import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { getMovieByTitle } from "../store/movie/service";
import MovieCard from "../components/MovieCard";

const Search = () => {
  const [search, setSearch] = useState("");

  const { data } = useSelector((state) => state.search);
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
            <MovieCard key={i} mv={{ ...mv }} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Search;
