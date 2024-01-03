import React from "react";

const Acara = () => {
  return (
    <section id="acara" style={{ marginBottom: "137px" }}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="box1 element-with-gradient-bg">
              <div className="zoom-effect">
                  <img
                    src="images/map.png"
                    className="peta img-fluid hoverable"
                    alt="Peta"
                  />
                </div>
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
                  Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman
                  Run 2023 mulai dari F&amp;B hingga fashion
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
  );
};

export default Acara;
