import React from "react";

function SectionImages({ pictures }) {
  return (
    <section className="detailed__images mt-20">
      <div className="flex flex-col gap-3">
        <div>Attached images</div>
        <div>
          <hr />
        </div>
        <div className="flex gap-2 pt-2">
          {pictures.map((picture, index) => (
            <img key={index} className="image w-52 h-28" src={picture} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionImages;
