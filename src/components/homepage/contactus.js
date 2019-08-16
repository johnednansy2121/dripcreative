import React from "react"

const Contact = (props) => {
    return <section className="section-contact section-padding">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section-header">
                                    <h2 className="title"><span className="highlight">Receive Discounts &amp;</span> Get insights</h2>
                                    <p className="desc">Sign up for our newsletter to receive discounts on future spend with us and stay informed with industry news.</p>
                                </div>
                                <div role="form" className="wpcf7" id="wpcf7-f21-o1" lang="en-US" dir="ltr">
                                    <div className="screen-reader-response"></div>
                                    {/* <form action="/#wpcf7-f21-o1" method="post" className="wpcf7-form" novalidate="novalidate">
                                        <div className="d-none">
                                            <input type="hidden" name="_wpcf7" value="21" />
                                            <input type="hidden" name="_wpcf7_version" value="5.1.3" />
                                            <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f21-o1" />
                                            <input type="hidden" name="_wpcf7_container_post" value="0" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="group"><span className="wpcf7-form-control-wrap name"><input type="text" name="name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"/></span>
                                                    <label>Your full name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="group"><span className="wpcf7-form-control-wrap email"><input type="email" name="email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"/></span>
                                                    <label>Your email address</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="group"><span className="wpcf7-form-control-wrap budget"><select name="budget" className="wpcf7-form-control wpcf7-select" aria-invalid="false"><option value=""></option><option value="1000">1000</option><option value="2000">2000</option><option value="3000">3000</option></select></span>
                                                    <label>Your budget</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="group"><span className="wpcf7-form-control-wrap project"><select name="project" className="wpcf7-form-control wpcf7-select" aria-invalid="false"><option value=""></option><option value="WordPres">WordPres</option><option value="API">API</option><option value="Custom">Custom</option></select></span>
                                                    <label>Type of project</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="group"><span className="wpcf7-form-control-wrap help"><textarea name="help" cols="40" rows="7" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea></span>
                                                    <label>How can we help you</label>
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            <input type="submit" value="submit" className="wpcf7-form-control wpcf7-submit btn-gray btn-glass"/>
                                            <span className="ajax-loader"></span>
                                        </p>
                                        <div className="wpcf7-response-output wpcf7-display-none"></div>
                                    </form> */}
                                </div>
                            </div>

                            <div className="col-md-5 col-md-offset-1">
                                <br/>
                                <br/>
                                <br/>
                                <img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/contact.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
}

export default Contact