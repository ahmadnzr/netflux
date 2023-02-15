import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { getBatmanMovie } from "../store/movie/service";

const Movies = () => {
  const { data } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatmanMovie());
  }, [dispatch]);

  return (
    <div className="mt-[50px]">
      <h1 className="font-bold text-[32px] leading-[48px]" id="movies">
        The Movies
      </h1>
      <div className="mt-[15px] grid grid-cols-2 gap-10">
        {data?.Search?.map((mv, i) => (
          <MovieCard key={i} mv={{ ...mv }} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
