import React from "react";
import arrow from "../../../assets/icons/detailedJob/footer/button_return/Arrow.png"
function ButtonReturn() {
  return (
    <button className="w-52 h-12 bg-sky-100 mt-24 ml-0 lg:-ml-20 font-bold mb-20 rounded-lg text-sky-900 text-xs flex justify-center items-center justify-evenly bg-gray-200">
        <img src={arrow} alt=""/>
      RETURN TO JOB BOARD
    </button>
  );
}

export default ButtonReturn;
