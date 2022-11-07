import ListItem from "./ListItem";
import pagination from "../../assets/images/jobList/Pagination.png";
import { useContext } from "react";
import { JobListContext } from "../../context/jobListContext";

function JobList({}) {
  const { jobList } = useContext(JobListContext);

  return (
    <div className="App flex justify-center bg-sky-50 items-center   flex-col ">
      <div className="mapLocation"></div>
      <div className="list_wrapper flex flex-col gap-2 w-[96%] md:w-[70%] mt-6 mb-6 ">
        {jobList.map((item, index) => (
          <ListItem key={item.id} item={item} index={index} />
        ))}
      </div>
      <div className="pb-20 pt-10">
        <img src={pagination} alt="pagination" />
      </div>
    </div>
  );
}

export default JobList;
