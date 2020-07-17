import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            itemInCart: 0
        };
    }

    componentDidMount(){
        axios
            .post("/api/categorie/all")
            .then(
                res => {
                    this.setState( {categories: res.data } );
                    //console.log(res)
                }
            )
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps, prevState){
        const { products } = this.props.cart;
    
        let itemInCart = 0;
        products.forEach(element => {
            itemInCart += element.quantite;
        });
        if(prevState.itemInCart !== this.state.itemInCart){
            this.setState( {itemInCart: itemInCart } );
        }
            
    }
    
    render() {

        const { categories } = this.state;
        const { itemInCart } = this.props.cart;
        
        return (
            <nav className="navbar navbar-expand-lg">
				<div className="container">
                    <div className="navbar-buttons">

                        <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler">
                            <span className="sr-only">Toggle navigation</span>
                            <i className="fa fa-align-justify"></i>
                        </button>

                        <a href="basket.html" className="btn btn-outline-secondary navbar-toggler">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </div>
                    <div id="navigation" className="collapse navbar-collapse">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link
                                    to='/dashboard'
                                    className="nav-link"
                                >
                                    Tableau de Bord
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
			</nav>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});
export default connect(
    mapStateToProps
)(withRouter(Navbar));