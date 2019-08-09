import React from  'react';

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <img class="footer-logo" src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/logo.svg" alt="" />
                        <p>We deliver a complete digital service to various clients across a range of industries. Sydney based with global reach.</p>
                    </div>
                    <div className="col-sm-12 col-lg-3 offset-lg-3">
                        <h2 className="block-title">Follow Us</h2>
                        <p>Join us in the social networks and keep up on the latest news.</p>
                    </div>
                    <div className="col-sm-12 col-lg-3">
                        <h2 className="block-title">Get In Touch</h2>
                        <p>1 Buckingham Street <br />
                            Surry Hills, <br />
                            New South Wales, Australia
                        </p>
                    </div>
                </div>
                <div className="site-year-info">
                    © {new Date().getFullYear()}. Drip Creative. All rights reserved.
                </div>
            </div>
        </footer>
    );
} 

export default Footer
