import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import logo from '../img/logo.jpg'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-main-container">
                    <div className='footer-main-container-left'>
                        <div className='footer-logo'>
                        <img src={logo} alt="" />
                        </div>

                        <div className="footer-reseaux">
                        <FontAwesomeIcon className='footer-icon' icon={faTiktok} />
                        <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
                        <FontAwesomeIcon className='footer-icon facebook' icon={faFacebookF} />

                        </div>
                    </div>
                    <div className='footer-main-container-right'>
                        <div className="footer-informations">
                            <h3>Informations</h3>
                            <p>Privacy</p>
                            <p>FAQ</p>
                            <p>Partenaires</p>
                            <p>Blog</p>
                            <p>Contacts</p>
                        </div>
                        <div className="footer-prestations">
                            <h3>Prestations</h3>
                            <p>Pour elle</p>
                            <p>Pour lui</p>
                        </div>
                        <div className="footer-contact">
                            <div className='tel-button'>
                                Téléphone
                            </div>
                            <p>06 46 78 96 61</p>
                            <p>namaste.ronchin@gmail.com</p>
                            <p>142 Rue du Général Leclerc <br />59790 Ronchin, France</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <p>Vous ne trouvez pas une prestation ou vous avez une question ?</p>

                    </div>
                    <div className="footer-bottom-right">
                        <label htmlFor="need-help">Envoyez moi simplement votre adresse mail et je vous contacterai !</label>
                        <input type="text" id="need-help" placeholder='Votre email' />
                    </div>
                </div>
            </footer>
        </>
    )
}