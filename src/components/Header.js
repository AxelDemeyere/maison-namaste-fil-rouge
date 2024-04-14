import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import logoT from "../img/logo-transparence.png";
import MenuBurger from "./MenuBurger";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <FontAwesomeIcon
        icon={faGear}
        onClick={() => navigate(`/${process.env.REACT_APP_ADMIN_URL}`)}
        className="settings-icon"
      />
      <header>
        <img onClick={() => navigate("/")} src={logoT} alt="" />
      </header>
      <nav className="nav-header">
        <ul className="nav-desktop">
          <li onClick={() => navigate("/a-propos")}>L'entreprise</li>
          <li onClick={() => navigate("/prestations")}>Prestations</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={() => navigate("/carte-cadeau")}>Carte cadeau</li>
        </ul>
        <ul className="nav-mobile">
          <MenuBurger />
        </ul>
      </nav>
    </>
  );
}
