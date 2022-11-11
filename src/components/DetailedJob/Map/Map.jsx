import React from "react";
import locationIcon from "../../../assets/icons/JobDetails/map/Location.png";
import SimpleMap from "./Location";

function Map({ job }) {
  const { address, email, name, phone, location } = job;

  return (
    <div className=" detailedMap ">
      <div className="detailedMap_wrapper ">
        <div className="contacts">
          <h1 className="contacts_text">Contacts</h1>
          <hr />
        </div>
        <div className="mapInfo_wrapper">
          <div className="mapInfo">
            <div className="mapInfo_content">
              <div className=" departament_name">
                <div> Department name</div>
                <div> {name}</div>
              </div>
              <div className="flex gap-2">
                <div>
                  <img src={locationIcon} alt="location" />
                </div>
                <div>{address?.toUpperCase()}</div>
              </div>
              <div className="phone_email">
                <div>{phone}</div>
                <div>{email?.toUpperCase()}</div>
              </div>
            </div>
          </div>
          <SimpleMap location={location} />
        </div>
      </div>
    </div>
  );
}

export default Map;
