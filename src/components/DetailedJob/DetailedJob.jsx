import { useLocation } from "react-router-dom";
import Header from "./header/header";
import SectionTitle from "./section-title/SectionTitle";
import SectionAdditional from "./section-additional/SectionAdditional";
import SectionImages from "./section-images/SectionImages";
import ButtonReturn from "./buttons/ButtonReturn";
import SectionDescription from "./section-description/SectionDescription";
import Map from "./map/map";
import ButtonApply from "./buttons/ButtonApply";

function DetailedJob() {
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
    <div className="flex justify-center mr-40 ">
      <div className="content_wrapper flex justify-around pl-40 w-[1600px] justify-between mt-20 ">
        <div className="detailedInfo__wrapper  max-w-3xl ">
          <Header />
          <ButtonApply />
          <main>
            <SectionTitle state={state.item} days={state.daysAgo} />
            <SectionDescription description={description} />
            <ButtonApply />
            <SectionAdditional
              employmentType={employment_type}
              benefits={benefits}
            />
            <SectionImages pictures={pictures} />
          </main>
          <footer>
            <ButtonReturn />
          </footer>
        </div>
        <div className="detailedMap_wrapper ml-20 map w-[400px] h-[430px] border rounded-2xl overflow-hidden shrink-0 text-white ml-5">
          <Map adress={address} email={email} name={name} phone={phone} />
        </div>
      </div>
    </div>
  );
}
export default DetailedJob;
