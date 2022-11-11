import React from "react";

function Benefits({ benefits }) {

  return (
    <div className="benefits_content">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefits">
          {benefit}
        </div>
      ))}
    </div>
  );
}

export default Benefits;
