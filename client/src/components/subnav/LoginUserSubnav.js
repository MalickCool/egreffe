import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from "react-redux";

class LoginUserSubnav extends Component {
    render() {
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
                                            Actes
                                        </Link>
                                        
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link
                                                to="/categorie"
                                                className="dropdown-item"
                                            >
                                                Famille Acte
                                            </Link>
                                            <Link
                                                to="/connexion"
                                                className="dropdown-item"
                                            >
                                                Actes
                                            </Link>
                                            <div className="dropdown-divider"></div>
                                            <Link
                                                to="/connexion"
                                                className="dropdown-item"
                                            >
                                                Déconnexion
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
                                                Ajouter
                                            </Link>
                                            <Link
                                                to="/connexion"
                                                className="dropdown-item"
                                            >
                                                Modifier / Supprimer
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
                                            Statistique
                                        </Link>
                                        
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link
                                                to="/categorie"
                                                className="dropdown-item"
                                            >
                                                Liste des Utilisateurs
                                            </Link>
                                            <Link
                                                to="/connexion"
                                                className="dropdown-item"
                                            >
                                                Liste des Actes
                                            </Link>
                                            <Link
                                                to="/connexion"
                                                className="dropdown-item"
                                            >
                                                Liste des Actes Annulées
                                            </Link>
                                            <Link
                                                to="/connexion"
                                                className="dropdown-item"
                                            >
                                                Bilan des Arrêts Caisse
                                            </Link>
                                            <Link
                                                to="/connexion"
                                                className="dropdown-item"
                                            >
                                                Bilan des Versements Non Conformes
                                            </Link>
                                            <Link
                                                to="/connexion"
                                                className="dropdown-item"
                                            >
                                                Bilan Général
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
                                            Vente
                                        </Link>
                                        
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link
                                                to="/categorie"
                                                className="dropdown-item"
                                            >
                                                Demande annulation Vente
                                            </Link>
                                            <Link
                                                to="/connexion"
                                                className="dropdown-item"
                                            >
                                                Demande annulation Arrêt Caisse
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect(mapStateToProps)(LoginUserSubnav);