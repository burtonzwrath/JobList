import { useLocation } from "react-router-dom";
import Header from "./header/header";
import SectionTitle from "./section-title/SectionTitle";
import SectionAdditional from "./section-additional/SectionAdditional";
import SectionImages from "./section-images/SectionImages";
import ButtonReturn from "./buttons/ButtonReturn";
import SectionDescription from "./section-description/SectionDescription";
import Map from "./map/map";
import ButtonApply from "./buttons/ButtonApply";

function DetailedJob({saveIconObj}) {
  const { state } = useLocation();
  const {
    description,
    benefits,
    pictures,
    employment_type,
    address,
    email,
    name,
    phone,
  } = state.item;

  return (
    <div className="flex justify-center mr-12 sm:mr-40 flex-col ">
      <div className="content_wrapper flex flex-col gap-14 xl:flex-row pl-4  lg:pl-40 max-w-screen-2xl mt-20 ">
        <div className="detailedInfo__wrapper  max-w-3xl ">
          <Header saveIconObj={saveIconObj} />
          <div className="hidden md:block">
            <ButtonApply />
          </div>
          <main className="flex flex-col ">
            <SectionTitle state={state.item} days={state.daysAgo}  />
            <SectionDescription description={description} />
            <ButtonApply />
            <SectionImages pictures={pictures} />
            <SectionAdditional
              employmentType={employment_type}
              benefits={benefits}
            />
          </main>
        </div>
          <Map adress={address} email={email} name={name} phone={phone} />
      </div>
      <footer>
      <ButtonReturn />
      </footer>
    </div>
  );
}
export default DetailedJob;
