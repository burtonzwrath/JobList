import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/icons/detailedJob/footer/button_return/Arrow.png";

function ButtonReturn() {
  const nav = useNavigate();

  return (
    <button
      onClick={() => nav("/")}
      className=" hover:bg-indigo-200 hover:shadow-md hover:shadow-[8px_5px_3px_rgba(128,189,227,0.3)]  duration-200 w-52 h-12 bg-sky-100 ml-5  xl:mt-24 xl:ml-14 font-bold mb-20 rounded-lg text-sky-900 text-xs flex justify-center items-center justify-evenly bg-gray-200"
    >
      <img src={arrow} alt="" />
      RETURN TO JOB BOARD
    </button>
  );
}

export default ButtonReturn;
