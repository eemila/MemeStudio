import React, {Component} from 'react';
import StepTitle from  "../Bricks/Ttl";
import Pic from "../Bricks/Pic"; 
import "./Step3.scss"

class ReadyMem extends Component {
 
  constructor(props){
    super(props);
  }

  state = {
    readyMem: ""
  }

  render(){
    return (
      <section className="step3-img">
        {/* <div className="ready-mem-ctn">tu będzie gotowy mem</div> */}
        <Pic  src={this.state.readyMeme} bigImage={this.props.bigImage} />
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
            <ReadyMem readyMeme={this.props.readyMeme} bigImage={this.props.bigImage}/> 
          </section>
        </div>
      )
    }
  }

export default Step3;