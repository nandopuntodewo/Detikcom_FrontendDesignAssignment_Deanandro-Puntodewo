import React from "react";
import Nav from "../Components/Navbar";
import Footer from "../Components/footer";
import Home from "../Components/heroSection";
import Acara from "../Components/Acara";
import Sponsor from "../Components/Sponsor";
import Galeri from "../Components/Galeri";
import Berita from "../Components/Berita";

function Page() {
  const goToSlide = (index) => {
    // your implementation here
  };

  return (
    <>
      <Nav />
      <Home />
      <Acara />
      <Sponsor />
      <Galeri goToSlide={goToSlide} />
      <Berita />
      <Footer />
    </>
  );
}

export default Page;
