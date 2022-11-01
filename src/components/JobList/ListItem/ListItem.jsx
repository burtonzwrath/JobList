import { Link } from "react-router-dom";
import rating from "../../../assets/icons/JobList/Rating.png";
import flag from "../../../assets/icons/JobList/rectangle.png";
import location from "../../../assets/icons/JobList/Location.png"

function ListItem({ item, index }) {
  const updatedDate = new Date(item.updatedAt.slice(0, 10));
  const createdDate = new Date(item.createdAt.slice(0, 10));

  const daysAgo = parseInt(
    (updatedDate - createdDate) / (1000 * 60 * 60 * 24),
    10
  );

  return (
    <div className="listItem relative h-[164px]  bg-white   pt-6 pb-6 pr-4 pl-4 border rounded-xl shadow-xl ">
      <div className="listItem_wrapper h-[116px] gap-[26px] justify-between flex bg-white">
        <div className="flex gap-6">
          <div className="w-[85px] h-[85px] shrink-0">
            <img
              className="w-[85px] h-[85px] rounded-full"
              src={item.pictures[0]}
              alt=""
            />
          </div>
          <div className="w-[80%] flex flex-col justify-between">
            <Link to="/detailedJob" state={{ item, daysAgo }}>
              <div className="font-semibold text-sky-900 text-xl">{item.title}</div>{" "}
            </Link>
            <div>
              <div className="text-lg text-slate-400">
                Department name • {item.name}
              </div>
              <div className="flex gap-3">
                <div className=" flex items-center"><img src={location} alt=""/></div>
                <div className="text-lg text-slate-400">
                  coordinates: lat:{item.location.lat} long:{item.location.long}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 shrink-0 ">
          <div className="flex items-center">
            <img
              className={index === 0 || index === 2 ? "opacity-1" : "opacity-0"}
              src={rating}
            />
          </div>
          <div className="w-[138px] flex flex-col justify-between shrink-0">
            <div role="button" className="flex justify-end ">
              <img src={flag} alt="flag  " />
            </div>
            <div className="text-sm shrink-0">posted {daysAgo} day(s) ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
