import React from "react";
import rating from "../../../../assets/icons/JobList/Rating.png";

function ItemRating({ index }) {

  return (
    <div className="rating_stars">
      <img
        className={index === 0 || index === 2 ? "opacity-1" : "opacity-0"}
        src={rating}
        alt={`rating${index}`}
      />
    </div>
  );
}

export default ItemRating;
