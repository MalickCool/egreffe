import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import { connect } from "react-redux";

import LoginUserSubnav from './LoginUserSubnav';
import NotLoginUserSubnav from './NotLoginUserSubnav';

class Subnav extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <div>      
            {this.props.auth.isAuthenticated ?(
              this.props.auth.niveauAccess === 3 ?(
                <LoginUserSubnav />
              ) : (
                <NotLoginUserSubnav />
              )
            ) : "" }
          </div>
        );
    }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Subnav);