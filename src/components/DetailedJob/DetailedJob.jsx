import { useLocation } from "react-router-dom";
import Header from "./Header/header";
import SectionTitle from "./Section-title/SectionTitle";
import SectionAdditional from "./Section-additional/SectionAdditional";
import SectionImages from "./Section-images/SectionImages";
import ButtonReturn from "./Buttons/ButtonReturn";
import SectionDescription from "./Section-description/SectionDescription";
import Map from "./Map/Map";
import ButtonApply from "./Buttons/ButtonApply";

function DetailedJob() {
  const { state } = useLocation();
  const { description, benefits, pictures, employment_type } = state.item;

  return (
    <div className="detailedJob_wrapper">
      <div className="content_wrapper ">
        <div className="info_wrapper   ">
          <Header job={state.item} />
          <div className="button_hide">
            <ButtonApply />
          </div>
          <main className="main_content">
            <SectionTitle job={state.item} days={state.daysAgo} />
            <SectionDescription description={description} />
            <ButtonApply />
            <SectionImages pictures={pictures} />
            <SectionAdditional
              employmentType={employment_type}
              benefits={benefits}
            />
          </main>
          <footer className="w-1/4 hidden xl:block">
            <ButtonReturn />
          </footer>
        </div>
        <Map job={state.item} />
      </div>
    </div>
  );
}
export default DetailedJob;
