import React from "react";

function ItemImage({ pictures }) {

  return (
    <div className="item_image">
      <img className="image" src={pictures[0]} alt="" />
    </div>
  );
}

export default ItemImage;
