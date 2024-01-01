import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "381px",
        position: "absolute",
        backgroundColor: "#28A997",
        padding: "50px 70px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ marginLeft: "-200px" }}>
            <img
              src="images/logo-event 3.png"
              alt="Deskripsi gambar"
              style={{
                width: "285px",
                height: "115px",
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                color: "white",
                fontSize: "18px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "normal",
                width: "1150px",
              }}
            >
              Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh
              Detikhealth secara gratis untuk masyarakat Indonesia. Ajak
              keluarga dan kerabat Anda untuk ikut keseruan Sudirman Run 2023
              lalu menangkan hadiah utama serta doorprize dengan total puluhan
              juta rupiah.
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-end" style={{ marginLeft: "200px", marginRight: "-00px" }}>
            <p
              style={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "normal",
                marginBottom: "20px",
              }}
            >
              Connect With Us
            </p>
            <div style={{ display: "flex" }}>
              <img
                src="images/facebook.png"
                alt="Facebook"
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <img
                src="images/twitter.png"
                alt="Twitter"
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <img
                src="images/instagram.png"
                alt="Instagram"
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <img
                src="images/linkedin.png"
                alt="LinkedIn"
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <img
                src="images/youtube.png"
                alt="YouTube"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
