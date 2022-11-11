import React from "react";
import arrowLeft from "../../../assets/icons/JobList/Arrow left.png";
import arrowRight from "../../../assets/icons/JobList/Arrow right.png";

function Pagination({
  paginate,
  currentPage,
  paginateBack,
  paginateFront,
  pageNumbers,
}) {

  return (
    <div className=" pagination_wrapper ">
      <div onClick={() => paginateBack()} className="arrow">
        <img src={arrowLeft} alt="arrowLeft" />
      </div>
      <div className="vertical_line"></div>
      <nav className="pagination_nav">
        <ul className="nav_ul">
          <li>
            {pageNumbers.map((number, index) => (
              <a
                  href="#"
                key={index}
                onClick={() => {
                  paginate(number);
                }}
                className={currentPage === number ? "nav_li-active" : "nav_li"}
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
      <div className="vertical_line"></div>
      <div onClick={() => paginateFront()} className="arrow">
        <img src={arrowRight} alt="arrowLeft" />
      </div>
    </div>
  );
}

export default Pagination;
