import React from "react";
import locationImg from "../../../../assets/icons/JobList/Location.png";

function ItemInfo({ name, address, locationName }) {

  return (
    <div className="item_info">
      <div className="item_name">
        Department name • {name} {address}
      </div>
      <div className="item_content">
        <div className="info_image">
          <img src={locationImg} alt="" />
        </div>
        <div className="info_location">{locationName}</div>
      </div>
    </div>
  );
}

export default ItemInfo;
