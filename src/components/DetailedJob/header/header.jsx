import shape from "../../../assets/icons/detailedJob/header/shapeicon.png";
import rectangle from "../../../assets/icons/detailedJob/header/Rectangle 31.png";

function Header() {
  return (
    <header className="flex flex-col gap-2">
      <div className=" flex justify-between">
        <div className="text-2xl text-sky-900 font-bold">Job Details</div>
        <div className="flex gap-8">
          <div className="flex gap-3">
            <div role="button" className="flex items-center">
              <img className="w-4 h-5" src={rectangle} alt="" />
            </div>
            <div className="text-lg text-sky-900 ">Save to my list </div>
          </div>
          <div className="flex gap-3">
            <div  role="button" className="flex items-center">
              <img className="w-5 h-5 " src={shape} alt="" />
            </div>
            <div className="text-lg text-sky-900 ">Share</div>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </header>
  );
}
export default Header;
