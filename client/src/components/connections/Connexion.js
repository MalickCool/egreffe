import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

//import classnames from "classnames";

class Connexion extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            code: "",
            password: "",
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

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            code: this.state.code,
            password: this.state.password
        }

        this.props.loginUser(userData);

        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
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
                                    <h1>Se connecter</h1>
                                    <p className="text-muted">
                                        Entrez vos paramètres et connectez vous à Egreffe
                                    </p>
                                    <hr />
                                    <form noValidate onSubmit = {this.onSubmit}>
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
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">
                                                <i className="fa fa-sign-in"></i> Se Connecter
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

Connexion.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Connexion);