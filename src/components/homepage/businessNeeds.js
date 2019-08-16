import React from "react"

const BusinessNeeds = (props) => {
    return <section className="business-needs">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center section-header">
                    <h2 className="title">What do <span className="highlight">you need help</span> with your business?</h2>
                    <div className="desc">See how we have helped other businesses.</div>
                </div>

                <div className="row w-100 m-auto">
                    <div className="col-sm-12 col-md-8">
                        <div className="item large">
                            <h3 className="title">Website Design & Development</h3>
                            <img src="https://dc19.dripdev.com/wp-content/uploads/2019/08/webdesign.png" alt=""/>
                            <p>UI/UX Designs | Web Apps | APIs | WordPress | Custom Development</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="row">
                            <div className="col-sm-6 col-md-12">
                                <div className="item small">
                                    <h3 className="title">App Design & Development</h3>
                                    <img src="https://dc19.dripdev.com/wp-content/uploads/2019/08/mobileapp.png" alt=""/>
                                    <p>Android | IOS | UI/UX Design | Cross-Platform Technology</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-12">
                                <div className="item small">
                                    <h3 className="title">Support Solutions</h3>
                                    <img src="https://dc19.dripdev.com/wp-content/uploads/2019/08/support.png" alt=""/>
                                    <p>Website Maintenance | Cloud Hosting | Technical Assistance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row w-100 m-auto">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="item small">
                            <h3 className="title">Automation</h3>
                            <img src="https://dc19.dripdev.com/wp-content/uploads/2019/08/automation.png" alt=""/>
                            <p>Sales Funnel | Zapier | Personnel</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="item small">
                            <h3 className="title">Integrations</h3>
                            <img src="https://dc19.dripdev.com/wp-content/uploads/2019/08/integration.png" alt=""/>
                            <p>CRMs | EMSP | 3rd-Party</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="item small">
                            <h3 className="title">Outsourcing</h3>
                            <img src="https://dc19.dripdev.com/wp-content/uploads/2019/08/outsourcing.png" alt=""/>
                            <p>VA’s | Staff | Research</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="item small">
                            <h3 className="title">Onboarding Strategy</h3>
                            <img src="https://dc19.dripdev.com/wp-content/uploads/2019/08/onboarding.png" alt=""/>
                            <p>Acquisition | Lead Generation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default BusinessNeeds