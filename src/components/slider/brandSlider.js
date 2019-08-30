import React, { Component } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class BrandSlider extends Component {
    render () {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
        };

        return (
            <Slider {...settings} className="trusted-brand-container">
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/clients-attender.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/clients-ausfit.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/clients-drmarks.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/clients-kandooi.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/clients-propel.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/clients-q83.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/clients-quill.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/clients-wedbooker.png" alt=""/></div>
            </Slider>
        );
    }
} 

export default BrandSlider;