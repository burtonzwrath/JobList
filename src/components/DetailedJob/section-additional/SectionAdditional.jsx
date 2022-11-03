import React from "react";
import EmploymentType from "./employmentType/EmploymentType";
import Benefits from "./benefits/benefits";

function SectionAdditional({ employmentType, benefits }) {
  return (
    <section className="detailed__Addition mt-20 flex flex-col gap-4 ">
      <div className="additional__info  flex flex-col gap-2">
        <div className="font-bold text-sky-900 text-2xl">Additional info</div>
        <div>
          <hr />
        </div>
      </div>

      <div className="employment__type flex flex-col gap-2">
        <div className="text-sky-900 text-md font-medium">Employment type</div>
        <EmploymentType employmentType={employmentType} />
      </div>
      <div className="benefits flex  flex-col gap-2">
        <div className="text-sky-900 text-md font-medium">Benefits</div>
        <Benefits benefits={benefits} />
      </div>
    </section>
  );
}

export default SectionAdditional;
