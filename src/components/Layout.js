import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoT from "../img/logo-transparence.png";
import Admin from "../routes/Admin";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/admin") {
    return (
      <>
        <header className="layout-admin">
          <img onClick={() => navigate("/")} src={logoT} alt="" />
        </header>
        <Admin />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main>
          {children}
          <a href="#">
            <svg
              className="arrow-up"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </main>

        <Footer />
      </>
    );
  }
}

export default Layout;
