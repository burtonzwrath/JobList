
function SectionImages({ pictures }) {
  function toggleZoom(e) {
    e.target.classList.toggle("scale-150");
  }

  return (
    <section className="detailed__images mt-20 xl:order-5">
      <div className="flex flex-col gap-3">
        <div className="font-bold text-sky-900 text-2xl">Attached images</div>
        <div>
          <hr />
        </div>
        <div className="flex gap-2  items-center  pt-2">
          {pictures.map((picture, index) => (
            <img
              onMouseEnter={toggleZoom}
              onMouseOut={toggleZoom}
              key={index}
              className=" duration-200 cursor-zoom-in border-2 hover:border-indigo-300 image w-32 h-20 sm:w-52 sm:h-28 rounded-lg"
              src={picture}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionImages;
