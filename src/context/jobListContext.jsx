import React, { useEffect, useState } from "react";
import { getJoblist } from "../services/jobListService";

export const JobListContext = React.createContext(null);

const JobListProvider = (props) => {
  const [jobList, setJobList] = useState([]);

  //  В ПОЛУЧЕННЫЙ МАССИВ С ОБЪЕКТАМИ, КАЖДОМУ ОБЪЕКТУ ДОБАВЛЯЕМ ПОЛЕ "FAVORITE" и "SHARE" СО ЗНАЧЕНИЯМИ "FALSE" ДЛЯ ТОГО ЧТО МОЖНО БЫЛО СОХРАНИТЬ СОСТОЯНИЕ (ИКОНКА ДОБАВИТЬ В ИЗБРАННОЕ / ПОДЕЛИТЬСЯ)
  useEffect(() => {
    const data = window.localStorage.getItem("JOB_LIST");
    if (data !== null) {
      setJobList(JSON.parse(data));
    } else {
      getJoblist()
        .then((data) =>
          data.map((item) => {
            return { ...item, favorite: false, share: false };
          })
        )
        .then((data) => {
          setJobList(data);
        });
    }
  }, []);

  function updateJob(item) {
    const itemIndex = jobList.findIndex((jobItem) => jobItem.id === item.id);
    jobList[itemIndex] = item;
    setJobList([...jobList]);
    window.localStorage.setItem("JOB_LIST", JSON.stringify(jobList));
  }

  return (
    <JobListContext.Provider value={{ jobList, updateJob }}>
      {props.children}
    </JobListContext.Provider>
  );
};

export default JobListProvider;
