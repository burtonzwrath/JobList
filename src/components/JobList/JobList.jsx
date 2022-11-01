import { useEffect, useState } from "react";
import ListItem from "./ListItem/ListItem";

function JobList() {
  const [dataArray, setDataArray] = useState([]);



  useEffect(() => {
    fetch(
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    )
      .then((response) => response.json())
      .then((data) => setDataArray(data));
  }, []);

  return (
    <div className="App flex justify-center bg-sky-50  ">
      <div className="list_wrapper flex flex-col gap-2 w-[70%] mt-8 mb-8 ">
        {dataArray.map((item,index) => (
          <ListItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
