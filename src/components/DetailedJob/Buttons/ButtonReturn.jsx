import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/icons/JobDetails/footer/button_return/Arrow.png";

function ButtonReturn() {
  const nav = useNavigate();

  return (
    <button onClick={() => nav("/")} className="button-return ">
      <img src={arrow} alt="buttonReturn" />
      RETURN TO JOB BOARD
    </button>
  );
}

export default ButtonReturn;
