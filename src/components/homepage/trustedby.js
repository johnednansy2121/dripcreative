import React from 'react';
import BrandSlider from '../slider/brandSlider';

const TrustedBy = (props) => {
    return (
        <section className="trusted-by curve">
            <div className="container">
                <div className="section-header">
                    <h3 className="title">“The sole reason we are in business is to make life less difficult for our clients”</h3>
                </div>

                <div className="section-content">
                    <h2>Trusted By</h2>

                    <BrandSlider />
                </div>
            </div>
        </section>
    );
}

export default TrustedBy;