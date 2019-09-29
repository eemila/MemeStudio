import React, {Component} from 'react';
// import Picture from "../Step1/Step1"; 
import StepTitle from "../Bricks/Ttl.jsx";
import Btn from "../Bricks/Btn.jsx"; 
import Pic from "../Bricks/Pic.jsx"; 
import "./Step2.scss"; 


class Typing extends Component {

  constructor(props){
    super(props);

    this.handleTxtAdd = this.handleTxtAdd.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleMemeCreation = this.handleMemeCreation.bind(this); 
  }

  state = {
    txt: ''
  }

  handleTxtAdd(e){
    e.preventDefault();
      const value = e.target.value; 
      this.setState({
          txt: value
      });
      this.props.changeStatus(this.state.txt);
  }

  onClick(e){
    e.preventDefault(); 
    this.props.changeBigImage(e.currentTarget.getAttribute('src'));
  }

  handleMemeCreation(e){
    e.preventDefault();
    this.props.generateMeme(e.currentTarget.getAttribute('src'));
  }

  render(){

     let inputTxt = <div className="addedTxt">
                      <p>{this.state.txt}</p>
                  </div> 

    // const { txt } = this.state
    return (
      <section className="typing-sec">
        <p className="txt-add-ttl">Type your text here</p>
        <form className="txt-add-form">
          <label className="hidden">Type your text here</label>
          <textarea type="text" 
                    value={this.state.txt} 
                    onChange={this.handleTxtAdd}>
          </textarea>
          <Btn txt="Looks good! Share this pic"
              handleMemeCreation={this.handleMemeCreation}/>
        </form>
      </section>
    )
  }
}

class Elements extends Component {
  
  constructor(props){
    super(props);
    this.changeStatus = this.changeStatus.bind(this)
  }

  state = {
    status: ""
  }

  changeStatus(val) {
    this.setState({
      status: val
    })
  }
  
  render(){
    return (
      <div className="step2-elements">
        <Pic status={this.state.status} bigImage={this.props.bigImage} />
        <Typing changeStatus={this.changeStatus} generateMeme={this.props.generateMeme}/>
      </div>
    )
  }
}

class Step2 extends Component {
    render(){
      return (
        <div className="ctn-main">
          <section className="step2 step-sec" id="step2">
            <StepTitle stepNo="Step 2: " title="Type your text"/>
            <Elements bigImage={this.props.bigImage} generateMeme={this.props.generateMeme}/>
          </section>
        </div>
      )
    }
  }

export default Step2;