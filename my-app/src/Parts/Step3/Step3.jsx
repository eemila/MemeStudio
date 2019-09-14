import React, {Component} from 'react';
import StepTitle from  "../Bricks/Ttl";
import "./Step3.scss"

class ReadyMem extends Component {
  render(){
    return (
      <section className="step3-img">
        <div className="ready-mem-ctn">tu będzie gotowy mem</div>
      </section>
    )
  }
}

class Step3 extends Component {
    render(){
      return (
        <div className="ctn-main">
          <section className="step3 step-sec">
            <StepTitle stepNo="Step 3: " title="Et voilà! Admire your masterpiece" />
            <ReadyMem /> 
          </section>
        </div>
      )
    }
  }

export default Step3;