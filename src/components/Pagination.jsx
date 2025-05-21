import React from "react";

const Pagination = ({ handleNext, handlePrevious, pageNo }) => {
  return (
    <div className="flex justify-center gap-4 items-center w-full h-[3rem] p-4 mt-5 bg-gray-300">
      <button onClick={handlePrevious}>
        <i className="fa-solid fa-arrow-left px-4 cursor-pointer"></i>
      </button>
      <span>{pageNo}</span>
      <button onClick={handleNext}>
        <i className="fa-solid fa-arrow-right px-4 cursor-pointer"></i>
      </button>
    </div>
  );
};

export default Pagination;
