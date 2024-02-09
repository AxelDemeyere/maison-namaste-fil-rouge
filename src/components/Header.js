
import logoT from '../img/logo-transparence.png'
import carousel1 from '../img/carousel-1.jpg'
import carousel2 from '../img/carousel-2.jpg'
import carousel3 from '../img/carousel-3.jpg'
import carousel4 from '../img/carousel-4.jpg'
import React from 'react'
import Carousel from './Carousel'
import { useNavigate } from 'react-router-dom'





function Header() {

    const navigate = useNavigate()

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
                    </ul>
                </nav>
        </>
    )
}

export default Header;