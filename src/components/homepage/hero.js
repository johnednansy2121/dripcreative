import React from "react"

const Hero = (props) => {
    return <section className="hero curve">
        <div className="container">
            <div className="section-content d-flex align-items-center">
                <div className="hero-content">
                    <h2 className="hero-title">Your digital <span className="highlight">business solutions</span> specialist..</h2>
                    <p className="desc">Helping you streamline your business to  achieve success.</p>
                    <a href="/contact-us" className="hide-992 btn btn-small btn-black btn-glass icon-arrow">I’D LIKE TO KNOW MORE <img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/arrow-blue.svg" alt="" /></a>
                </div>
                <div className="hero-image">
                    <img src="https://dc19.dripdev.com/wp-content/uploads/2019/06/hero-home.png" alt="" />
                </div>
            </div>
        </div>
    </section>
}

export default Hero