import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import slider1 from "/images/slider-1.png";
import slider2 from "/images/slider-2.png";
import slider3 from "/images/slider-3.png";
import slider4 from "/images/slider-4.png";

function Galeri() {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [slider1, slider2, slider3, slider4];

  const handleImageClick = (index) => {
    if (mainSwiper && thumbsSwiper) {
      mainSwiper.slideTo(index);
      setSelectedImageIndex(index);
    }
  };

  return (
    <Container>
      <div className="galeri" style={{ marginBottom: "193px" }}>
        <h1 className="text-galeri">GALERI SUDIRMAN RUN 2022</h1>
        <Row>
          <Col>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
              className="mySwiper2"
              onSwiper={setMainSwiper}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slide ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col className="pt-3">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    style={{ opacity: selectedImageIndex === index ? 1 : 0.5 }}
                    onClick={() => handleImageClick(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Galeri;
