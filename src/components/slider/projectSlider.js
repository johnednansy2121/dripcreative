import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
}

class ProjectSlider extends Component {
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        return (
            <Slider {...settings} className="projectSlider">
                <div className="slide-item">
                    <div className="slide">
                        <div className="thumb">
                            <img src="https://dc19.dripdev.com/wp-content/uploads/2019/06/case-wedbooker.png" alt=""/>
                        </div>
                        <div className="info">
                            <img src="https://dc19.dripdev.com/wp-content/uploads/2019/06/logo-wedbroker.png" className="logo" alt=""/>
                            <p className="desc">wedBooker is an online marketplace for Couples to discover and book professional Suppliers &amp; Venues for their wedding.</p>
                            <a href="#" className="icon-arrow arrow-white btn btn-white btn-glass">read case study <img className="btn-more" src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/arrow-white.svg" /></a>
                        </div>
                    </div>
                </div>
                <div className="slide-item">
                    <div className="slide">
                        <div className="thumb">
                            <img src="https://dc19.dripdev.com/wp-content/uploads/2019/06/case-wedbooker.png" alt=""/>
                        </div>
                        <div className="info">
                            <img src="https://dc19.dripdev.com/wp-content/uploads/2019/06/logo-wedbroker.png" className="logo" alt=""/>
                            <p className="desc">wedBooker is an online marketplace for Couples to discover and book professional Suppliers &amp; Venues for their wedding.</p>
                            <a href="#" className="icon-arrow arrow-white btn btn-white btn-glass">read case study <img className="btn-more" src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/arrow-white.svg" /></a>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
} 

export default ProjectSlider;