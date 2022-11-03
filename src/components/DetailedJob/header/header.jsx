import share from "../../../assets/icons/detailedJob/header/share.png";
import share2 from "../../../assets/icons/detailedJob/header/share2.png";
import save from "../../../assets/icons/detailedJob/header/save.png";
import save2 from "../../../assets/icons/detailedJob/header/save2.png";
import star from "../../../assets/icons/detailedJob/header/star.png";
import {useState} from "react";

function Header({saveIconObj}) {

  const [shareFlag,setShareFlag]=useState(true)

  function toggleShare(){
    setShareFlag(!shareFlag)
  }

  return (
    <header className="flex flex-col gap-2 relative">
      <div className=" flex flex-col xl:flex-row gap-10 justify-between relative ">
        <div className="text-2xl text-sky-900 font-bold">Job Details</div>
        <div className="flex gap-8">
          <div onClick={()=>saveIconObj.toggleFlag()} role="button"  className="flex gap-3 duration-200 hover:shadow-[8px_5px_3px_rgba(128,189,227,0.3)] ">
            <div  className="flex items-center">
              <img className="w-4 h-5 xl:hidden " src={star} alt=""  />
              <img  className={`flag w-4 h-5 hidden xl:block `} src={saveIconObj.saveFlag?save:save2} alt="" />
            </div>
            <div className="text-lg text-sky-900 pr-2">Save to my list </div>
          </div>
          <div onClick={toggleShare} role="button" className="flex gap-3 duration-200 hover:shadow-[8px_5px_3px_rgba(128,189,227,0.3)] ">
            <div  className="flex items-center">
              <img className="w-5 h-5  " src={shareFlag?share:share2} alt=""  />
            </div>
            <div className="text-lg text-sky-900 pr-2">Share</div>
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
