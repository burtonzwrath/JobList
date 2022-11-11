function SectionImages({ pictures }) {

  return (
    <section className="detailed_images  ">
      <div className="images_wrapper">
        <div className="images_text">Attached images</div>
        <div>
          <hr/>
        </div>
        <div className="images_carousel">
          {pictures.map((picture, index) => (
            <div key={index} className="carousel-item  ">
              <img
                className="item-image "
                src={picture}
                alt={`img${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionImages;
