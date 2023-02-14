import React from "react";
import Navbar from "../components/Navbar";

const Wrapper = ({ children }) => {
  return (
      <div className="max-w-[1512px] mx-auto px-[81px] pt-[18px] pb-[50px]">
        <Navbar />
        {children}
      </div>
  );
};

export default Wrapper;
