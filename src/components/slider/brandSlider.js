import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class BrandSlider extends Component {
    render () {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
        };

        return (
            <Slider {...settings} className="trusted-brand-container">
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/client1.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/client2.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/client3.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/client4.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/client5.png" alt=""/></div>
                <div className="trusted-brand"><img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/client6.png" alt=""/></div>
            </Slider>
        );
    }
} 

export default BrandSlider;