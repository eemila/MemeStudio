import React, {Component} from 'react';
// import Picture from "../Step1/Step1"; 
import StepTitle from "../Bricks/Ttl.jsx";
import Btn from "../Bricks/Btn.jsx"; 
import Pic from "../Bricks/Pic.jsx"; 
import "./Step2.scss"; 


// sprawdzić jak poprawnie zaimportować Picture ze Step1 zamiast tworzyć nowy komponent


class Typing extends Component {
  render(){
    return (
      <section className="typing-sec">
        <p className="txt-add-ttl">Type your text here</p>
        <form className="txt-add-form">
          <label className="hidden">Type your text here</label>
          <textarea></textarea>
          <Btn txt="Add text to the painting" />
        </form>
      </section>
    )
  }
}

class Elements extends Component {
  render(){
    return (
      <div className="step2-elements">
        <Pic />
        <Typing />
      </div>
    )
  }
}

class Step2 extends Component {
    render(){
      return (
        <div className="ctn-main">
          <section className="step2 step-sec">
            <StepTitle stepNo="Step 2: " title="Type your text"/>
            <Elements />
          </section>
        </div>
      )
    }
  }

export default Step2;