import React, {Component} from 'react';

import img1 from "../imgs/IkarFall.jpg";
// import img2 from "../imgs/The_Scream.jpg";
import img3 from "../imgs/WenusBirth.jpg";
import img4 from "../imgs/wolnosc.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "./get_inspired.scss"
 
class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className = "caro-img-ctn">
                    <img className = "img-responsive caro-img" src={img1} alt=""/>
                </div>
                {/* <div className = "caro-img-ctn">
                    <img className = "img-responsive caro-img img-vertical" src={img2} />
                </div> */}
                <div className = "caro-img-ctn">
                    <img className = "img-responsive caro-img" src={img3} alt="" />
                </div>
                <div className = "caro-img-ctn">
                    <img className = "img-responsive caro-img" src={img4} alt="" />
                </div>
            </Carousel>
        );
    }
};

export default MyCarousel;


