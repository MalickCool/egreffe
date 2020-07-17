import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Connexion from '../connections/Connexion';
import { loginUser } from "../../actions/authActions";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            produits: []
         };
    }
    componentDidMount() {
        axios
            .get("/api/produit/all")
            .then(
                res => {
                    this.setState( {produits: res.data } );
                    //console.log(res)
                }
            )
            .catch(err => console.log(err));
    }

    render() {

        const { produits } = this.state;

        return (
            <div id="all">
                <div id="content">
                    <div id="hot">
                        <div className="container">     
                            
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
Dashboard.propTypes = {
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
)(Dashboard);