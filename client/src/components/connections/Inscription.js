import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
//import classnames from "classnames";

class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
         };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            code: this.state.code,
            name: this.state.name,
            password: this.state.password,
            password2: this.state.password2,
            fonction: this.state.fonction,
            niveau: this.state.niveau
        };

        this.props.registerUser(newUser, this.props.history);
        
        //console.table(this.props.registerUser);
    }

    render() {
        const { errors } = this.state;
        return (
            <div id="all" className="pt-3">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="offset-md-3 col-md-6">
                                <div className="box">
                                    <h1>Ajouter Personnel</h1>
                                    <hr />
                                    <form onSubmit = {this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="code">Code</label>
                                            <input onChange={this.onChange}
                                                value={this.state.code}
                                                error={errors.code}
                                                className="form-control"
                                                id="code"
                                                required="required"
                                                type="text"
                                            />
                                            <span className="alert-red">{errors.code}</span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="name">Nom & Prenom</label>
                                            <input onChange={this.onChange}
                                                value={this.state.name}
                                                error={errors.name}
                                                className="form-control"
                                                id="name"
                                                required="required"
                                                type="text"
                                            />
                                            <span className="alert-red">{errors.name}</span>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="password">Mot de Passe</label>
                                            <input onChange={this.onChange}
                                                value={this.state.password}
                                                error={errors.password}
                                                className="form-control"
                                                id="password"
                                                required="required"
                                                type="password" 
                                            />
                                            <span className="alert-red">{errors.password}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Confirmer Mot de Passe</label>
                                            <input onChange={this.onChange}
                                                value={this.state.password2}
                                                error={errors.password2}
                                                className="form-control"
                                                id="password2"
                                                required="required"
                                                type="password" 
                                            />
                                            <span className="alert-red">{errors.password2}</span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="fonction">Fonction</label>
                                            <input onChange={this.onChange}
                                                value={this.state.fonction}
                                                error={errors.fonction}
                                                className="form-control"
                                                id="fonction"
                                                required="required"
                                                type="text"
                                            />
                                            <span className="alert-red">{errors.fonction}</span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="niveau">Niveau</label>
                                            <select onChange={this.onChange}
                                                error={errors.niveau}
                                                className="form-control"
                                                id="niveau"
                                                required="required"
                                            >
                                                <option value=""></option>
                                                <option value="1">Caissier</option>
                                                <option value="3">Superviseur</option>
                                            </select>
                                            <span className="alert-red">{errors.niveau}</span>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">
                                                <i className="fa fa-user-md"></i> Créer votre compte
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Inscription.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Inscription));