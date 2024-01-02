import React from "react";

const Galeri = ({ goToSlide }) => {
  return (
    <section id="galeri" style={{ marginBottom: "193px" }}>
      <section className="sec3">
        <div>
          <h1 className="title-sec3">GALERI SUDIRMAN RUN</h1>
        </div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/main-picture.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/slider-1 1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/slider-1 1 (1).png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/main-picture (1).png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="thumbnailCarousel mb-9">
          <div className="thumbnail" onClick={() => goToSlide(0)}>
            <img
              src="images/slider-1 1 (2).png"
              className="rounded mx-auto d-block"
              alt="..."
            />
          </div>
          <div className="thumbnail1" onClick={() => goToSlide(1)}>
            <img
              src="images/slider-1 1 (3).png"
              className="rounded mx-auto d-block"
              alt="..."
            />
          </div>
          <div className="thumbnail2" onClick={() => goToSlide(2)}>
            <img
              src="images/slider-1 1 (4).png"
              className="rounded mx-auto d-block"
              alt="..."
            />
          </div>
          <div className="thumbnail3" onClick={() => goToSlide(3)}>
            <img
              src="images/slider-1 1 (5).png"
              className="rounded mx-auto d-block"
              alt="..."
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Galeri;
