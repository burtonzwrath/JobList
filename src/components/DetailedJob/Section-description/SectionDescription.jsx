import React from "react";

function SectionDescription({ description }) {
  const split = description.split(/(?:\r?\n)+/);
  const benefits = split[7].split(".").slice(0, -1);

  return (
    <>
      <div className="detailed_Description">
        {split.map((item, index) => (
          <div
            key={index}
            className={`description_item ${
              index === 3 || index === 6 ? "font-bold" : ""
            } ${index === 7 ? "hidden" : ""}  `}
          >
            {item}
          </div>
        ))}
      </div>
      <ul className="description_list">
        {benefits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default SectionDescription;
