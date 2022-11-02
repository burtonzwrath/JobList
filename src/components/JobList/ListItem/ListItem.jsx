import { Link } from "react-router-dom";
import rating from "../../../assets/icons/JobList/Rating.png";
import flag from "../../../assets/icons/JobList/rectangle.png";
import location from "../../../assets/icons/JobList/Location.png";

function ListItem({ item, index }) {
  const updatedDate = new Date(item.updatedAt.slice(0, 10));
  const createdDate = new Date(item.createdAt.slice(0, 10));

  const daysAgo = parseInt(
    (updatedDate - createdDate) / (1000 * 60 * 60 * 24),
    10
  );
  const shortTittle = item.title.split(" ").slice(0, 5).join(" ");

  return (
    <div className="listItem relative mim-h-60   xl:h-[164px] flex bg-white gap-5   pt-4 pb-6 pr-4 pl-4 border rounded-xl shadow-xl ">
      <div className="w-[65px] h-full   flex items-center   xl:w-[85px] xl:h-[85px] shrink-0">
        <img
          className=" w-[65px] h-[65px]  xl:w-[85px] xl:h-[85px]  rounded-full"
          src={item.pictures[0]}
          alt=""
        />
      </div>
      <div className="listItem_wrapper flex flex-col xl:flex-row xl:h-[116px] gap-2 justify-between w-full bg-white">
        <div className="flex gap-6 order-1 xl:order-none">
          <div className=" w-[90%] flex flex-col justify-between">
            <Link to="/detailedJob" state={{ item, daysAgo }}>
              <div className="font-semibold text-sky-900 text-[20px] hidden lg:block ">
                {item.title}
              </div>
              <div className="font-semibold  text-sky-900 text-xl lg:hidden">
                {shortTittle}
              </div>
            </Link>
            <div className="flex flex-col gap-1">
              <div className="text-[16px] text-slate-400">
                Department name • {item.name}
              </div>
              <div className="flex gap-3">
                <div className=" flex items-center">
                  <img src={location} alt="" />
                </div>
                <div className="text-[16px] text-slate-400">
                  {item.location.lat}
                  {item.location.long}
                </div>
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
            <div role="button" className=" hidden xl:flex  justify-end ">
              <img src={flag} alt="flag  " />
            </div>
            <div className="text-sm xl:text-sm shrink-0 text-slate-400">
              posted {daysAgo} day(s) ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
