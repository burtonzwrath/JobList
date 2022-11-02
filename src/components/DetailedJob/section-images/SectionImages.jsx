import React from "react";

function SectionImages({ pictures }) {
  return (
    <section className="detailed__images mt-20">
      <div className="flex flex-col gap-3">
        <div className="font-bold text-sky-900 text-2xl">Attached images</div>
        <div>
          <hr />
        </div>
        <div className="flex gap-2 pt-2">
          {pictures.map((picture, index) => (
            <img key={index} className="image w-52 h-28 rounded-lg" src={picture} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionImages;
