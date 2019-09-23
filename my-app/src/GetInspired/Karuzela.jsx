import React, {Component} from 'react';

import img1 from "../imgs/ikarfalljpg.jpg";
import img2 from "../imgs/thescream.jpg";
import img3 from "../imgs/wenusbirth01.jpg";

import Slider from "react-slick";

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img style = {{ height: "100px", width: "200px" }} src={img1} />
          <h3>1</h3>
        </div>
        <div>
          <img style = {{ height: "100px", width: "200px" }} src={img2} />
          <h3>2</h3>
        </div>
        <div>
          <img style = {{ height: "100px", width: "200px" }} src={img3} />
          <h3>3</h3>
        </div>
      
      </Slider>
    );
  }
}



export default SimpleSlider;