import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <section id="home" className="bg" style={{ marginBottom: "137px" }}>
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
      <ScrollLink className="nav-link" smooth={true} duration={500} to="acara">
        <button
          className="btn btn-lg btn-tentang-acara text-white"
          style={{
            borderRadius: "100px",
            background: "#FFC73C",
            boxShadow: "0px 18px 40px 12px rgba(255, 211, 103, 0.35)",
            position: "absolute",
            top: "670px",
            left: "310px",
            transform: "translateX(-50%)",
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#FFA500";
            e.target.style.boxShadow =
              "0px 18px 40px 12px rgba(255, 180, 0, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#FFC73C";
            e.target.style.boxShadow =
              "0px 18px 40px 12px rgba(255, 211, 103, 0.35)";
          }}
        >
          TENTANG ACARA
        </button>
      </ScrollLink>
    </section>
  );
};

export default Home;
