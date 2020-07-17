import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div id="copyright" className="fixed-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2 mb-lg-0">
                            <p className="text-center text-lg-left">©2020 Malick Coulibaly.</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-center text-lg-right">Design by  &nbsp;
                                <a href="">
                                    Malick Coulibaly
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;