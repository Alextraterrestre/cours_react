import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={logo} className="logo" alt="logo react" />
                    <NavLink to="/" className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="Portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="Contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header