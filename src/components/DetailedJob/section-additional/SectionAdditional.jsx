import React from "react";
import EmploymentType from "./employmentType/EmploymentType";
import Benefits from "./benefits/benefits";

function SectionAdditional({ employmentType, benefits }) {
  return (
    <section className="detailed__Addition mt-20 flex flex-col gap-4">
      <div className="additional__info flex flex-col gap-2">
        <div className="font-bold">Additional info</div>
        <div>
          <hr />
        </div>
      </div>

      <div className="employment__type flex flex-col gap-2">
        <div>Employment type</div>
        <EmploymentType employmentType={employmentType} />
      </div>
      <div className="benefits flex  flex-col gap-2">
        <div>Benefits</div>
        <Benefits benefits={benefits} />
      </div>
    </section>
  );
}

export default SectionAdditional;