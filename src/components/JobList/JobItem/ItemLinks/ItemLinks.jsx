import React, { useContext } from "react";
import save from "../../../../assets/icons/JobList/save.png";
import save2 from "../../../../assets/icons/JobList/save2.png";
import { JobListContext } from "../../../../context/jobListContext";

function ItemLinks({ item, daysAgo }) {
  const { updateJob } = useContext(JobListContext);

  return (
    <div className="item_rating-links">
      <div
        onClick={() => {
          item.favorite = !item.favorite;
            updateJob(item);
        }}
        role="button"
        className="links_content"
      >
        <img src={item.favorite ? save2 : save} alt="flag  " />
      </div>
      <div className="item_posted">
        posted {daysAgo} day{daysAgo > 1 ? "s" : ""} ago
      </div>
    </div>
  );
}

export default ItemLinks;
