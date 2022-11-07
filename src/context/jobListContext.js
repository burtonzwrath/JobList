import React, { useEffect, useState } from "react";
import { getJoblist } from "../services/jobListService";

export const JobListContext = React.createContext(null);
const JobListProvider = (props) => {

  const [jobList, setJobList] = useState([]);
  const [selectedObj, setSelectedObj] = useState({});
  console.log(jobList)

  //  В ПОЛУЧЕННЫЙ МАССИВ С ОБЪЕКТАМИ, КАЖДОМУ ОБЪЕКТУ ДОБАВЛЯЕМ ПОЛЕ "FLAG" СО ЗНАЧЕНИЕМ "FALSE" ДЛЯ ТОГО ЧТО МОЖНО БЫЛО СОХРАНИТЬ СОСТОЯНИЕ (ИКОНКА ДОБАВИТЬ В ИЗБРАННОЕ)
  useEffect(() => {
    getJoblist()
      .then((data) =>
        data.map((item) => {
          return { ...item, flag: true };
        })
      )
      .then((data) => setJobList(data));
  }, []);
  //-------------------------------------------------------------------------

  function updateItem(item) {
    const itemIndex = jobList.findIndex((jobItem) => jobItem.id === item.id);
    jobList[itemIndex] = item;
    setJobList([...jobList]);
  }


  return (
    <JobListContext.Provider value={{ jobList, updateItem }}>
      {props.children}
    </JobListContext.Provider>
  );
};

export default JobListProvider;
