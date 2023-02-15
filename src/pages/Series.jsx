import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { getBatmanSeries } from "../store/movie/service";

const Series = () => {
  const { data } = useSelector((state) => state.series);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatmanSeries());
  }, [dispatch]);

  return (
    <div className="mt-[50px]">
      <h1 className="font-bold text-[32px] leading-[48px]" id="movies">
        The Series
      </h1>
      <div className="mt-[15px] grid grid-cols-2 gap-10">
        {data?.Search?.map((mv, i) => (
          <MovieCard key={i} mv={{ ...mv }} />
        ))}
      </div>
    </div>
  );
};

export default Series;
