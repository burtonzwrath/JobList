import React from "react";
import location from "../../../assets/icons/detailedJob/map/Location.png";
import map from "../../../assets/images/detailedJob/map/Map.png";
import locationOnMap from "../../../assets/icons/detailedJob/map/Location2.png";

function Map({ address, email, name, phone }) {
  return (
      <div className=" detailedMap_wrapper xl:ml-20 map w-full xl:w-[400px]  mb-10  overflow-hidden shrink-0 text-white ">
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-3  flex flex-col xl:hidden">
        <h1 className="text-sky-900 text-2xl font-bold">Contacts</h1>
        <hr />
      </div>
      <div className="border rounded-xl overflow-hidden max-w-[390px]">
        <div className="h-1/2 bg-slate-800  flex justify-center items-center">
          <div className="flex flex-col items-start justify-center gap-3 w-[277px] h-[170px]">
            <div className=" text-base xl:text-xl text-semibold">
              <div> Department name</div>
              <div> {name}</div>
            </div>
            <div className="flex gap-2">
              <div>
                <img src={location} alt="" />
              </div>
              <div>{address?.toUpperCase()}</div>
            </div>
            <div className="text-base font-base">
              <div>{phone}</div>
              <div>{email?.toUpperCase()}</div>
            </div>
          </div>
        </div>
        <div className="relative w-full ">
          <img src={map} alt=""  />
          <img
            className="absolute top-16 left-24 "
            src={locationOnMap}
            alt=""
          />
        </div>
      </div>
    </div>
      </div>
  );
}

export default Map;
