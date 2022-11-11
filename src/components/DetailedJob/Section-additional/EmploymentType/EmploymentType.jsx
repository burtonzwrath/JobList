import React from "react";

function EmploymentType({ employmentType }) {

  return (
    <div className="employment_content">
      {employmentType.map((type, index) => (
        <div key={index} className="employment">
          {type}
        </div>
      ))}
    </div>
  );
}

export default EmploymentType;
