import React from "react";

const Footer = () => {
    return (
        <>
            <div className="footer-section">
              <div className="footer-container">
                <img src="images/logo-event 3.png" alt="" className="logo-size" id="coloredLogo" />
                <div className="footer-container-text   d-flex ali">
                    <div className="footer-text ">
                        <p>Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh Detikhealth secara gratis untuk masyarakat Indonesia. Ajak keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023 lalu menangkan hadiah utama serta doorprize dengan total puluhan juta rupiah</p>
                    </div>
                    <div>
                        <div className="footer-container-title text-center  ">
                            <p>Connect With Us</p>
                        </div>
                        <div className="d-flex logo-style">
                            <img src="images/facebook.png" alt="" className="logo-size-facebook" />
                            <img src="images/twitter.png" alt="" className="logo-size-facebook" />
                            <img src="images/instagram.png" alt="" className="logo-size-facebook" />
                            <img src="images/linkedin.png" alt="" className="logo-size-facebook" />
                            <img src="images/youtube.png" alt="" className="logo-size-facebook" />
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <hr className="hr-style"/>
                <div className="copyright">
                <p>Copyright @ 2023 detikcom. All right reserved</p>
                </div>
                </div>
            </div>

        </>
    )
}

export default Footer;


