import React, { useEffect } from "react";

import { FilmIcon } from "@heroicons/react/24/outline";
import {
  StarIcon,
  BookmarkIcon,
  EyeIcon,
  PlayIcon,
  CloudArrowDownIcon,
  HeartIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";

import user from "../assets/user.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import { getDetailed } from "../store/movie/service";

const Featured = () => {
  const { data: dData } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailed());
  }, [dispatch]);
  
  return (
    <div className="mt-[56px] flex gap-[100px]">
      <div className="w-[387px] flex flex-col gap-[30px]">
        <div className="">
          <img
            src={dData?.Poster}
            alt=""
            className="w-[397px] h-[520px] bg-cover rounded-[100px]"
          />
        </div>
        <button className="flex justify-center items-center gap-2 bg-white/[0.06] py-[20px] font-bold leading-[24px] text-[#1D4ED8] rounded-[30px]">
          <FilmIcon className="h-[24px] w-[24px]" />
          <label>Trailer</label>
        </button>
        <div className="flex justify-center items-start gap-10">
          <div className="flex flex-col items-center gap-5 text-[14px] leading-[17px]">
            <StarIcon className="h-[24px] w-[24px] text-[#1D4ED8]" />
            <label>Favorite</label>
          </div>
          <div className="flex flex-col items-center gap-5 text-[14px] leading-[17px]">
            <BookmarkIcon className="h-[24px] w-[24px]" />
            <label>Watch Later</label>
          </div>
          <div className="flex flex-col items-center gap-5 text-[14px] leading-[17px]">
            <EyeIcon className="h-[24px] w-[24px] text-[#1D4ED8]" />
            <label>Watched</label>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <h1 className="font-bold text-[40px] leading-[48px]">
            {dData?.Title}
          </h1>
          <div className="mt-[51px] flex gap-[20px]">
            <button className="px-[80px] py-[20px] flex gap-2 bg-bgButton rounded-full font-medium text-[24px leading-[29px]">
              <PlayIcon className="h-[24px] w-[24px]" />
              <label>Watch</label>
            </button>
            <button className="px-[80px] py-[20px] flex gap-2 bg-white/[0.06] rounded-full font-medium text-[24px leading-[29px]">
              <CloudArrowDownIcon className="h-[24px] w-[24px]" />
              <label>Download</label>
            </button>
          </div>
          <div className="flex mt-[50px] gap-[50px]">
            <div className="w-[486px] flex flex-col gap-[20px]">
              <h2 className="font-bold text-[16px] leading-[20px]">
                Storyline
              </h2>
              <p className="text-[16px] leading-[20px]">{dData?.Plot}</p>
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center">
                  <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
                    Rating
                  </span>
                  <span className="font-medium">{}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
                    Released
                  </span>
                  <span className="font-medium">{dData?.Released}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
                    Genres
                  </span>
                  <span className="font-medium">{dData?.Genre}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
                    Countries
                  </span>
                  <span className="font-medium">{dData?.Country}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-[145px] text-[16px] leading-[12px] text-[#606060]">
                    Duration
                  </span>
                  <span className="font-medium">{dData?.Runtime}</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-[16px] leading-[20px]">
                Writen by
              </h2>
              <div className="mt-[34px] flex gap-[10px] items-start bg-white/[0.08] p-[10px] rounded-[14px]">
                <img src={user} alt="" />
                <div className="flex flex-col">
                  <span>{dData?.Writer}</span>
                  <span>Writers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[24px] h-[2px] bg-[#242E43]"></div>
        <div className="mt-[30px] flex gap-[10px]">
          <div className="w-[121px] px-[20px] py-[10px] bg-white/[0.08] flex gap-1 items-center rounded-full">
            <img src={twitter} alt="" className="h-[23px] w-[23px]" />
            <HeartIcon className="h-[23px] w-[23px] text-gray-500" />
            <span className="text-[14px]">+1</span>
          </div>
          <div className="w-[121px] px-[20px] py-[10px] bg-white/[0.08] flex gap-1 items-center rounded-full">
            <img src={facebook} alt="" className="h-[20px] w-[20px]" />
            <HandThumbUpIcon className="h-[23px] w-[23px] text-gray-500" />
            <span className="text-[14px]">+1.5k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
