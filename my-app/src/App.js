import React, {Component} from 'react';

import "../src/Parts/Style_general/normalize.scss";
import "../src/Parts/Style_general/general.scss";
import WelcomeSec from "./Parts/WelcomeSec/WelcomeSec.jsx";
import Step1 from "./Parts/Step1/Step1.jsx"; 
import Step2 from "./Parts/Step2/Step2.jsx"; 
import Step3 from "./Parts/Step3/Step3.jsx";
import Footer from "./Parts/Footer/Footer.jsx" 

class App extends Component {
  render() {
  return (
      <>
        <WelcomeSec />
        <Step1 />
        <Step2 />
        <Step3 />
        <Footer />
      </>  
  );
}
}

export default App;
