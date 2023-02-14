import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ mv }) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate("/movie/" + id);
  };
  
  return (
    <div
      className="flex items-center gap-[10px] border cursor-pointer"
      onClick={() => handleCardClick(mv.imdbID)}
    >
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
          <span className="flex-1">{mv.imdbID}</span>
        </div>
        <div className="flex items-center">
          <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
            Type
          </span>
          <span className="flex-1">{mv.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
