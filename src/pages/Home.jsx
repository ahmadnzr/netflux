import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

import Featured from "../components/Featured";
import MovieCard from "../components/MovieCard";
import { getRecomendation, getTopMovie } from "../store/movie/service";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  const { data } = useSelector((state) => state.recomendation);
  const { data: topMovie } = useSelector((state) => state.topMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecomendation());
    dispatch(getTopMovie());
  }, [dispatch]);

  return (
    <>
      <div className="mt-[50px]">
        <h1 className="mb-[20px] text-2xl font-bold">Rekomendasi movie</h1>
        <Slider {...settings}>
          {data?.map((rc, id) => (
            <Featured key={id} data={rc} />
          ))}
        </Slider>
      </div>
      <div className="mt-[50px]">
        <h1 className="font-bold text-[32px] leading-[48px]" id="movies">
          The Movies
        </h1>
        <div className="mt-[15px] grid grid-cols-2 gap-10">
          {topMovie?.map((mv, i) => (
            <MovieCard key={i} mv={{ ...mv }} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
