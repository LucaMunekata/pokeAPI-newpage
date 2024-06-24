import React from "react";
import "ldrs/tailspin";

export const Loader = () => {
  return (
    <div className="container-loader">
      <l-tailspin size="40" stroke="5" speed="0.9" color="black"></l-tailspin>
    </div>
  );
};
