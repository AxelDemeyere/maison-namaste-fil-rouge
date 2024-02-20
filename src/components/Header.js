import logoT from '../img/logo-transparence.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Header.css';

function Header({ onCompteClientClick }) {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <img onClick={() => navigate('/')} src={logoT} alt="" />
            </header>
            <nav>
                <ul>
                    <li onClick={() => navigate('/a-propos')}>L'entreprise</li>
                    <li onClick={() => navigate('/prestations')}>Prestations</li>
                    <li onClick={() => navigate('/rendez-vous')}>Rendez-vous</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                    <li onClick={() => navigate('/carte-cadeau')}>Carte cadeau</li>
                    <li onClick={onCompteClientClick}>Compte client</li>
                </ul>
            </nav>
        </>
    );
}



export default Header;