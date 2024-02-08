import React from 'react';
import './App.css';
import logo  from "./logoMN.jpg";
import { SiTiktok } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <footer className="App-footer">
      <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo Maison Namasté" />
          </div>
          <div className="footer-top">
          <div className="footer-links">
            <div className="footer-infos">
              <h3>Informations</h3>
              <ul>
                <li>CGV</li>
                <li>Mentions légales</li>
                <li>FAQ</li>
                <li>Partenaires</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-presta">
              <h3>Prestations</h3>
              <ul>
                <li>Pour elle</li>
                <li>Pour lui</li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Téléphone</h3>
              <p>06.46.78.96.61</p>
              <h3>Email</h3>
              <p>namaste.ronchin@gmail.com</p>
              <h3>Adresse</h3>
              <p>142 Rue du Général Leclerc, 59790 - Ronchin</p>
            </div>
          </div>
        </div>
          <div className="social-medias">
            <a href="https://www.facebook.com/Maison.Namaste/"></a> <FaFacebook />
            <a href="https://www.tiktok.com/@maison.namaste"></a> <SiTiktok />
            <a href="https://www.instagram.com/maison.namaste/"></a> <RiInstagramFill />
          </div>
          </div>
        <div className="footer-email">
          <h2>Vous ne trouvez pas une prestation ou vous avez une question ?</h2>
          <div className="contact-form">
            <input type="email" placeholder="Votre email..." size="50"/>
            <button type="submit"><FaCircleArrowRight /></button>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Maison Namasté © 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
