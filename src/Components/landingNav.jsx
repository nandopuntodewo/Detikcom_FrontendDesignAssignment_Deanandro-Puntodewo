import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light rounded-pill" style={{ maxWidth: "60%", margin: "10px auto 0", position: "sticky", top: "30px", zIndex: "1000", background: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(25px)" }}>
      <div className="container">
        <NavLink className="navbar-brand" to="/" style={{ padding: "5px" }}>
          <img
            src="images/navbar-brand.png"
            alt=""
            width={200}
            height={42.27}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ margin: "10px" }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav" style={{ gap: "80px", padding: "5px", textAlign: "center" }}>
            <li className="nav-item" style={{ top:"50px" }}>
              <NavLink className="nav-link" activeClassName="active" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/tentang">
                Tentang Acara
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/galeri">
                Galeri
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/berita">
                Berita
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="https://event.detik.com/">
                <button className="register-btn">Register</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
