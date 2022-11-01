import React from "react";
import location from "../../../assets/icons/detailedJob/map/Location.png";
import map from "../../../assets/images/detailedJob/map/Map.png";
import locationOnMap from "../../../assets/icons/detailedJob/map/Location2.png";

function Map({ address, email, name, phone }) {
  return (
    <>
      <div className="h-1/2 bg-sky-800 flex justify-center items-center">
        <div className="flex flex-col gap-3 w-[277px] h-[170px]">
          <div className="text-xl text-semibold">
            <div> Department name</div>
            <div> {name}</div>
          </div>
          <div className="flex gap-2">
            <div>
              <img src={location} alt="" />
            </div>
            <div>{address?.toUpperCase()}</div>
          </div>
          <div>
            <div>{phone}</div>
            <div>{email?.toUpperCase()}</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={map} alt="" />
        <img className="absolute top-16 left-24 " src={locationOnMap} alt="" />
      </div>
    </>
  );
}

export default Map;
