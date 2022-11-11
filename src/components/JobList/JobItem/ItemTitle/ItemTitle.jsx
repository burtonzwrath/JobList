import React from "react";
import { Link } from "react-router-dom";

function ItemTitle({ id, daysAgo, item, title, shortTitle }) {

  return (
    <Link to={id} state={{ daysAgo, item }}>
      <div className="title ">{title}</div>
      <div className="short_title">{shortTitle}</div>
    </Link>
  );
}

export default ItemTitle;
