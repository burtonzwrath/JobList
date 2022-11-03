import React from "react";

function SectionDescription({ description }) {
  const split = description.split(/(?:\r?\n)+/);
  const benefits = split[7].split(".").slice(0, -1);

  return (
    <>
      <div className="flex flex-col ">
        {split.map((item, index) => (
          <div
            key={index}
            className={`font-xl text-sky-900 pt-2 ${
              index === 3 || index === 6 ? "font-bold" : ""
            } ${index === 7 ? "hidden" : ""}  `}
          >
            {item}
          </div>
        ))}
      </div>
      <ul className="list-[square] pl-5 xl:pl-0 marker:text-slate-400 text-sky-900 ">
        {benefits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default SectionDescription;
