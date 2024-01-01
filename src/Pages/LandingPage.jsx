import React from "react";
import Nav from "../Components/landingNav";
import Footer from "../Components/footer";

function Page() {
  return (
    <>
      <Nav />
      <section className="bg">
        <img
          src="images/logo-event 2.png"
          alt="Your Image"
          style={{
            width: "840px",
            height: "340px",
            position: "absolute",
            top: "275px",
            left: "220px",
          }}
        />
        <button
          className="btn btn-lg btn-tentang-acara text-white font-montserrat font-weight-normal"
          style={{
            borderRadius: "100px",
            background: "#FFC73C",
            boxShadow: "0px 18px 40px 12px rgba(255, 211, 103, 0.35)",
            position: "absolute",
            top: "670px", // Sesuaikan posisi tombol di sini
            left: "310px", // Sesuaikan posisi tombol di sini
            transform: "translateX(-50%)", // Pusatkan tombol horizontal
          }}
        >
          TENTANG ACARA
        </button>
      </section>
      <section id="acara">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="box1 element-with-gradient-bg">
                  <img src="images/map.png" className="peta" />
                  <h1>10K FUN RUN</h1>
                  <h5>
                    Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari
                    dimulai dari Bundaran HI hingga Patung Pemuda Membangun di
                    Senayan lalu kembali lagi ke Bundaran HI!
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box2 element-with-gradient-bg">
                  <h1> GRATIS DAN BERHADIAH </h1>
                  <h5>
                    Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah
                    total puluhan juta serta berbagai macam doorprize yang
                    menarik!
                  </h5>
                </div>
                <div className="box3 element-with-gradient-bg">
                  <h1>50+ TENANT BAZAR</h1>
                  <h5>
                    Dapatkan promo menarik pada booth-booth tenant bazzar
                    Sudirman Run 2023 mulai dari F&amp;B hingga fashion
                  </h5>
                </div>
                <div className="box4 element-with-gradient-bg">
                  <img src="images/performance.png" className="ran" />
                  <div>
                    <h1>SPECIAL PERFORMANCE</h1>
                    <h5>
                      Saksikan penampilan dari RAN, DJ Whisnu Santika, DJ Adnan
                      Veron, serta hiburan lainnya!
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="daftar-btn">
            <a href="https://event.detik.com/">
              {" "}
              <button className="daftar-button"> DAFTAR SEKARANG</button>{" "}
            </a>
          </div>
        </section>
      </section>
      <section>
        <div className="sponsor element-with-gradient-bg">
          <div className="teks">
            <h1>DIDUKUNG OLEH</h1>
          </div>
          <div className="all-sponsor">
            <div className="img-sponsor0">
              <img src="images/Frame ALPHA.png" className="alpha0" />
            </div>
            <div className="img-sponsor">
              <img src="images/Frame 500.png" className="alpha" />
            </div>
            <div className="img-sponsor1">
              <img src="images/Frame IVP.png" className="alpha1" />
            </div>
            <div className="img-sponsor2">
              <img src="images/Frame sequoia.png" className="alpha2" />
            </div>
            <div className="img-sponsor3">
              <img src="images/Frame SG.png" className="alpha3" />
            </div>
            <div className="img-sponsor4">
              <img src="images/Frame wavemaker.png" className="alpha4" />
            </div>
            <div className="img-sponsor5">
              <img src="images/Frame GFC.png" className="alpha5" />
            </div>
            <div className="img-sponsor6">
              <img src="images/Frame GGV.png" className="alpha6" />
            </div>
            <div className="img-sponsor0">
              <img src="images/Frame ALPHA.png" className="alpha0" />
            </div>
            <div className="img-sponsor">
              <img src="images/Frame 500.png" className="alpha" />
            </div>
            <div className="img-sponsor1">
              <img src="images/Frame IVP.png" className="alpha1" />
            </div>
            <div className="img-sponsor2">
              <img src="images/Frame sequoia.png" className="alpha2" />
            </div>
            <div className="img-sponsor3">
              <img src="images/Frame SG.png" className="alpha3" />
            </div>
            <div className="img-sponsor4">
              <img src="images/Frame wavemaker.png" className="alpha4" />
            </div>
            <div className="img-sponsor5">
              <img src="images/Frame GFC.png" className="alpha5" />
            </div>
            <div className="img-sponsor6">
              <img src="images/Frame GGV.png" className="alpha6" />
            </div>
          </div>
        </div>
      </section>
      <section id="galeri">
        <section className="sec3">
          <div class="title-sec3">
            <h1 class="font-weight-bold font-Montserrat">
              GALERI SUDIRMAN RUN
            </h1>
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="thumbnailCarousel">
            <div className="thumbnail" onclick="goToSlide(0)">
              <img
                src="images/slider-1 1 (2).png"
                className="rounded mx-auto d-block"
                alt="..."
              />
            </div>
            <div className="thumbnail1" onclick="goToSlide(1)">
              <img
                src="images/slider-1 1 (3).png"
                className="rounded mx-auto d-block"
                alt="..."
              />
            </div>
            <div className="thumbnail2" onclick="goToSlide(2)">
              <img
                src="images/slider-1 1 (4).png"
                className="rounded mx-auto d-block"
                alt="..."
              />
            </div>
            <div className="thumbnail3" onclick="goToSlide(3)">
              <img
                src="images/slider-1 1 (5).png"
                className="rounded mx-auto d-block"
                alt="..."
              />
            </div>
          </div>
        </section>
      </section>

      <div className="footer-image"></div>
      <img src="images/bg-2.png" alt="Your Image" className="w-100" />
      <Footer />
    </>
  );
}

export default Page;
