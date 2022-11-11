import { useContext, useState } from "react";

import Pagination from "./Pagination/Pagination";
import Jobs from "./Jobs/Jobs";
import { JobListContext } from "../../context/jobListContext";

function JobList() {
  const { jobList } = useContext(JobListContext);
  const [jobsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJobs = jobList.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = jobList.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateFront = () =>
    currentPage !== pageNumbers[pageNumbers.length - 1]
      ? setCurrentPage(currentPage + 1)
      : "";
  const paginateBack = () =>
    currentPage !== pageNumbers[0] ? setCurrentPage(currentPage - 1) : "";

  return (
    <div className="jobList ">
      <Jobs jobs={currentJobs} />
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        pageNumbers={pageNumbers}
      />
    </div>
  );
}

export default JobList;
