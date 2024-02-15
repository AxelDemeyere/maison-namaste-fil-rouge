import logoT from '../img/logo-transparence.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'



function Layout({ children }) {

    const navigate = useNavigate()

    return (
        <>
            <header>
                <img onClick={() => navigate('/')} src={logoT} alt="" />
            </header>
            <nav className='nav-header'>
                <ul>
                    <li onClick={() => navigate('/a-propos')}>L'entreprise</li>
                    <li onClick={() => navigate('/prestations')}>Prestations</li>
                    <li onClick={() => navigate('/rendez-vous')}>Rendez-vous</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                    <li onClick={() => navigate('/carte-cadeau')}>Carte cadeau</li>
                </ul>
            </nav>
            <main>
                {children}
                <a href="#">
                    <svg className="arrow-up" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z" fill="currentColor" /></svg>
                </a>
            </main>
        </>
    )
}

export default Layout;