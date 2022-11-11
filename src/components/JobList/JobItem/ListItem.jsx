import { useEffect, useState } from "react";
import ItemTitle from "./ItemTitle/ItemTitle";
import ItemInfo from "./ItemInfo/itemInfo";
import ItemRating from "./ItemRating/ItemRating";
import ItemLinks from "./ItemLinks/ItemLinks";
import ItemImage from "./ItemImage/ItemImage";

function ListItem({ item, index }) {

  const { pictures, name, title, address, location, updatedAt, createdAt, id } =
    item;
  const updatedDate = new Date(updatedAt.slice(0, 10));
  const createdDate = new Date(createdAt.slice(0, 10));
  const daysAgo = parseInt(
    (updatedDate - createdDate) / (1000 * 60 * 60 * 24),
    10
  );

  const [locationObject, setLocationObject] = useState();
  const locationName = locationObject?.results[0].formatted_address;
  const shortTitle = title.split(" ").slice(0, 5).join(" ");

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=AIzaSyCUOVWz4u85at7PpkHJQ-zmAtcx8v28E9Y`
    )
      .then((data) => data.json())
      .then((data) => setLocationObject(data));
  }, [location.lat,location.long]);

  return (
    <div className="listItem">
      <ItemImage pictures={pictures} />
      <div className="listItem_wrapper">
        <div className="listItem_content ">
          <ItemTitle
            id={id}
            daysAgo={daysAgo}
            item={item}
            title={title}
            shortTitle={shortTitle}
          />
          <ItemInfo name={name} address={address} locationName={locationName} />
        </div>
        <div className="listItem_rating-links ">
          <ItemRating index={index} />
          <ItemLinks item={item} daysAgo={daysAgo} />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
