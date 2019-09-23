import React, {Component} from 'react';

import MyCarousel from "../GetInspired/Carousel.jsx";
import Ttl from "../Parts/Bricks/Ttl.jsx";

class Inspiration extends Component {

  render() {
  return (
      <>
        <div className="ctn-main">
          <section className="step-sec">
            <Ttl stepNo="Get" title="Inspired"/>
            <MyCarousel />
          </section>  
        </div>
      </>  
  );
}
}

export default Inspiration;
