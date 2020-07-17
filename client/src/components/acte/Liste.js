import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Liste extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            errors: {}
         };
    }

    render() {
        const { errors } = this.state;
        return (
            <div id="all" className="pt-3">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            jh sygcc uic ugc aojc ctys 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Liste;