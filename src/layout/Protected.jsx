import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { data } = useSelector((state) => state.login);

  if (data) {
    return <>{children}</>;
  }

  return <Navigate to={"/signin"} />;
};

export default Protected;
