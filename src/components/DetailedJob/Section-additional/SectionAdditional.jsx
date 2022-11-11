import React from "react";
import EmploymentType from "./EmploymentType/EmploymentType";
import Benefits from "./Benefits/benefits";

function SectionAdditional({ employmentType, benefits }) {

  return (
    <section className="detailed_Addition  ">
      <div className="additional_info  ">
        <div className="additional_text">Additional info</div>
        <div>
          <hr />
        </div>
      </div>

      <div className="employment_wrapper ">
        <div className="employment_text">Employment type</div>
        <EmploymentType employmentType={employmentType} />
      </div>
      <div className="benefits_wrapper ">
        <div className="employment_text">Benefits</div>
        <Benefits benefits={benefits} />
      </div>
    </section>
  );
}

export default SectionAdditional;
