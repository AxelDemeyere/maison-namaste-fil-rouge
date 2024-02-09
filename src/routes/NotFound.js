import logo from '../img/logo.jpg'

function NotFound() {
    return (
        <div className='container'>
            <div className="notFound-container">
                <h1 className="notFound-text">Page 404</h1>
                <img className='notFound-logo' src={logo} alt="" />
                <h1 className="notFound-text">Vous ne trouverez rien ici...</h1>
            </div>
        </div>

    )
}

export default NotFound;