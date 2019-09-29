import React, {Component} from 'react';

import "../src/Parts/Style_general/normalize.scss";
import "../src/Parts/Style_general/general.scss";

import WelcomeSec from "./Parts/WelcomeSec/WelcomeSec.jsx";
import Step1 from "./Parts/Step1/Step1.jsx"; 
import Step2 from "./Parts/Step2/Step2.jsx"; 
import Step3 from "./Parts/Step3/Step3.jsx";
import Footer from "./Parts/Footer/Footer.jsx"; 
import Inspiration from "../src/GetInspired/GetInspired";

import "../src/Parts/Style_general/_mediaQueries.scss"; 

class App extends Component {

  constructor(props) {
    super(props);
    this.changeBigImage = this.changeBigImage.bind(this);
    // this.generateMeme = this.generateMeme.bind(this);
    
    this.state = {
      'bigImage' : '',
      // 'readyMeme': ''
    }
  }

  changeBigImage(src){
    this.setState({
      'bigImage': src
    })
  }

  // generateMeme(src){
  //   this.setState({
  //     'readyMeme': src
  //   })
  // }


  render() {
  return (
      <>
        <WelcomeSec />
        <Inspiration />
        <Step1 bigImage={this.state.bigImage} changeBigImage={this.changeBigImage}/>
        <Step2 bigImage={this.state.bigImage} generateMeme={this.generateMeme}/>
        {/* <Step3 generateMeme={this.generateMeme} /> */}
        <Footer />
      </>  
  );
}
}

export default App;
