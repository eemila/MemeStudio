import React, {Component} from 'react';

import img1 from "../imgs/ikarfalljpg.jpg";
import img2 from "../imgs/thescream.jpg";
import img3 from "../imgs/wenusbirth01.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default MyCarousel;


