import { useNavigate } from 'react-router-dom'
import logoT from '../img/logo-transparence.png'

export default function Header() {
    
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
        </>
    )
}

