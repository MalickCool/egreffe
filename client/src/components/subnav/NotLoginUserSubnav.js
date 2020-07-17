import React from 'react'
import {Link} from 'react-router-dom';

export default function NotLoginUserSubnav() {
    return (
        <React.Fragment>
            <div id="top">
                <div className="container">
                    <div className="row">  
                        <div className="col-lg-12 text-center text-lg-left">
                            <ul className="menu list-inline mb-0">
                                <li className="list-inline-item dropdown">
                                    <Link
                                        to="/categorie"
                                        className="nav-link dropdown-toggle"
                                        id="navbarDropdown" 
                                        role="button" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false"
                                    >
                                        Acte
                                    </Link>
                                    
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link
                                            to="/inscription"
                                            className="dropdown-item"
                                        >
                                            Vendre Acte
                                        </Link>
                                        <Link
                                            to="/connexion"
                                            className="dropdown-item"
                                        >
                                            Demande d'annulation
                                        </Link>
                                    </div>
                                </li>

                                <li className="list-inline-item dropdown">
                                    <Link
                                        to="/categorie"
                                        className="nav-link dropdown-toggle"
                                        id="navbarDropdown" 
                                        role="button" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false"
                                    >
                                        Caisse
                                    </Link>
                                    
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link
                                            to="/categorie"
                                            className="dropdown-item"
                                        >
                                            Ouverture de Caisse
                                        </Link>
                                        <Link
                                            to="/connexion"
                                            className="dropdown-item"
                                        >
                                            Susupendre Caisse
                                        </Link>
                                        <Link
                                            to="/connexion"
                                            className="dropdown-item"
                                        >
                                            Réouverture de Caisse
                                        </Link>
                                        <Link
                                            to="/connexion"
                                            className="dropdown-item"
                                        >
                                            Arrêt de Caisse
                                        </Link>
                                    </div>
                                </li>

                                <li className="list-inline-item">
                                    <Link
                                        to="/connexion"
                                        style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                        }}
                                    >
                                        Déconnexion
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
