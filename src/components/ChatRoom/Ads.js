import React from 'react';
import './styles/Ads.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS

const Ads = () => {
    return (
        <div className="ads-container">
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
                emulateTouch={true} // Allow swipe on touch devices
            >
                <div>
                    <img src="/ads1.png" alt="Advertisement 1"/>
                </div>
                <div>
                    <img src="/ads2.png" alt="Advertisement 2"/>
                </div>
                <div>
                    <img src="/ads3.png" alt="Advertisement 3"/>
                </div>
            </Carousel>
            <div className="section2">
                {/* Content for section 2 goes here */}
            </div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                emulateTouch={true} // Allow swipe on touch devices
            >
                <div>
                    <img src="/ads1.png" alt="Advertisement 1"/>
                </div>
                <div>
                    <img src="/ads2.png" alt="Advertisement 2"/>
                </div>
                <div>
                    <img src="/ads3.png" alt="Advertisement 3"/>
                </div>
            </Carousel>
            <div className="section3">
                {/* Content for section 3 goes here */}
            </div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={7000}
                emulateTouch={true} // Allow swipe on touch devices
            >
                <div>
                    <img src="/ads1.png" alt="Advertisement 1"/>
                </div>
                <div>
                    <img src="/ads2.png" alt="Advertisement 2"/>
                </div>
                <div>
                    <img src="/ads3.png" alt="Advertisement 3"/>
                </div>
            </Carousel>
            <div className="section4">
                {/* Content for section 4 goes here */}
            </div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={2400}
                emulateTouch={true} // Allow swipe on touch devices
            >
                <div>
                    <img src="/ads1.png" alt="Advertisement 1"/>
                </div>
                <div>
                    <img src="/ads2.png" alt="Advertisement 2"/>
                </div>
                <div>
                    <img src="/ads3.png" alt="Advertisement 3"/>
                </div>
            </Carousel>
        </div>
    );
};

export default Ads;