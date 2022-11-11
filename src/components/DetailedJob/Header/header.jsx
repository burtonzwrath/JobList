import { useContext } from "react";
import share from "../../../assets/icons/JobDetails/header/share.png";
import share2 from "../../../assets/icons/JobDetails/header/share2.png";
import save from "../../../assets/icons/JobDetails/header/save.png";
import save2 from "../../../assets/icons/JobDetails/header/save2.png";
import star from "../../../assets/icons/JobDetails/header/star.png";
import star2 from "../../../assets/icons/JobDetails/header/star2.png";
import { JobListContext } from "../../../context/jobListContext";

function Header({ job }) {
  const { jobList, updateJob } = useContext(JobListContext);
  const item = jobList.find((item) => item.id === job.id);

  return (
    item && (
      <header className="header">
        <div className="header_content  ">
          <div className="header_text">Job Details</div>
          <div className="icons_wrapper ">
            <div
              onClick={() => {
                item.favorite = !item.favorite;
                  updateJob(item);
              }}
              role="button"
              className="saveIcon_wrapper "
            >
              <div className="saveIcon">
                <img
                  className="image_save-sm"
                  src={item.favorite ? star2 : star}
                  alt="image_save"
                />
                <img
                  className="image_save-xl"
                  src={item.favorite ? save2 : save}
                  alt="image_save-xl"
                />
              </div>
              <div className="text_save">Save to my list </div>
            </div>
            <div
              onClick={() => {
                item.share = !item.share;
                  updateJob(item);
              }}
              role="button"
              className="shareIcon_wrapper"
            >
              <div className="shareIcon">
                <img
                  className="image_share"
                  src={item.share ? share2 : share}
                  alt="image_share"
                />
              </div>
              <div className="text_share">Share</div>
            </div>
          </div>
        </div>
        <div className="header_line">
          <hr />
        </div>
      </header>
    )
  );
}
export default Header;
