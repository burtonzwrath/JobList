import { Link } from "react-router-dom";
import rating from "../../assets/icons/JobList/Rating.png";
import save from "../../assets/icons/JobList/save.png";
import save2 from "../../assets/icons/JobList/save2.png";
import locationImg from "../../assets/icons/JobList/Location.png";
import { useContext, useEffect, useState } from "react";
import { JobListContext } from "../../context/jobListContext";

function ListItem({ item, index }) {
  const {pictures,name,title,address,location,updatedAt,createdAt,id}=item

  const updatedDate = new Date(updatedAt.slice(0, 10));
  const createdDate = new Date(createdAt.slice(0, 10));
  const daysAgo = parseInt(
    (updatedDate - createdDate) / (1000 * 60 * 60 * 24),
    10
  );

  const { updateItem } = useContext(JobListContext);
  const [locationObject, setLocationObject] = useState();
  const locationName = locationObject?.results[0].formatted_address;
  const shortTitle = title.split(" ").slice(0, 5).join(" ");

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=AIzaSyCUOVWz4u85at7PpkHJQ-zmAtcx8v28E9Y`
    )
      .then((data) => data.json())
      .then((data) => setLocationObject(data));
  }, []);


  return (
    <div className="listItem relative   h-[90%] flex bg-white gap-5   pt-4 pb-6 pr-4 pl-4 border rounded-xl shadow-xl ">
      <div className="w-[65px] h-full   flex items-center   xl:w-[85px] xl:h-[85px] shrink-0">
        <img
          className=" w-[65px] h-[65px]  xl:w-[85px] xl:h-[85px]  rounded-full"
          src={pictures[0]}
          alt=""
        />
      </div>
      <div className="listItem_wrapper flex flex-col xl:flex-row xl:h-[116px] gap-2 justify-between w-full bg-white">
        <div className="flex gap-6 order-1 xl:order-none">
          <div  className="  gap-3 flex flex-col justify-between">
            <Link  to={id} state={{ daysAgo,item }}>
              <div className="hover:underline hover:decoration-double font-semibold text-sky-900 text-[20px] hidden lg:block ">
                {title}
              </div>
              <div className="font-semibold  text-sky-900 text-xl lg:hidden">
                {shortTitle}
              </div>
            </Link>
            <div className="flex flex-col gap-1">
              <div className="text-[16px] text-slate-400">
                Department name • {name}  {address}
              </div>
              <div className="flex gap-3">
                <div className=" flex items-center">
                  <img src={locationImg} alt="" />
                </div>
                <div className="text-[16px] text-slate-400">{locationName}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between  xl:gap-10 shrink-0 ">
          <div className=" w-12 h-3 xl:w-20 xl:h-full  flex items-center">
            <img
              className={index === 0 || index === 2 ? "opacity-1" : "opacity-0"}
              src={rating}
            />
          </div>
          <div className="w-[138px] flex flex-col justify-between shrink-0">
            <div
              onClick={() => {
                item.flag = !item.flag;
                updateItem(item);
              }}
              role="button"
              className=" hidden xl:flex  justify-end "
            >
              <img src={item.flag ? save : save2} alt="flag  " />
            </div>
            <div className="text-sm xl:text-sm shrink-0 text-slate-400">
              posted {daysAgo} day{daysAgo>1?"s":""} ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
