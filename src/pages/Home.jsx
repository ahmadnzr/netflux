import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getBatmanMovie,
  getBatmanSeries,
} from "../store/movie/service";
import MovieCard from "../components/MovieCard";
import Featured from "../components/Featured";

const Home = () => {
  const { movie, series } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { data: mData } = movie;
  const { data: sData } = series;

  useEffect(() => {
    dispatch(getBatmanMovie());
    dispatch(getBatmanSeries());
  }, [dispatch]);

  return (
    <>
      <Featured />
      <div className="mt-[50px]">
        <h1 className="font-bold text-[32px] leading-[48px]" id="movies">The Movies</h1>
        <div className="mt-[15px] grid grid-cols-2 gap-10">
          {mData?.Search?.map((mv, i) => (
            <MovieCard key={i} mv={{ ...mv }} />
          ))}
        </div>
      </div>
      <div className="mt-[50px]">
        <h1 className="font-bold text-[32px] leading-[48px]" id="series">The Series</h1>
        <div className="mt-[15px] grid grid-cols-2 gap-10">
          {sData?.Search?.map((mv, i) => (
            <MovieCard key={i} mv={{ ...mv }} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
