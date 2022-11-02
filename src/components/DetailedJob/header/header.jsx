import shape from "../../../assets/icons/detailedJob/header/shapeicon.png";
import rectangle from "../../../assets/icons/detailedJob/header/Rectangle 31.png";
import star from "../../../assets/icons/detailedJob/header/star.png";

function Header() {
  let icon = window.screen.width < 600 ? star : rectangle;
  return (
    <header className="flex flex-col gap-2 relative">
      <div className=" flex flex-col xl:flex-row gap-10 justify-between relative ">
        <div className="text-2xl text-sky-900 font-bold">Job Details</div>
        <div className="flex gap-8">
          <div className="flex gap-3">
            <div role="button" className="flex items-center">
              <img className="w-4 h-5" src={icon} alt="" />
            </div>
            <div className="text-lg text-sky-900 ">Save to my list </div>
          </div>
          <div className="flex gap-3">
            <div role="button" className="flex items-center">
              <img className="w-5 h-5 " src={shape} alt="" />
            </div>
            <div className="text-lg text-sky-900 ">Share</div>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-10 ">
        <hr />
      </div>
    </header>
  );
}
export default Header;
