import React, {Component} from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop'; 
// import Picture from "../Step1/Step1"; 
import StepTitle from "../Bricks/Ttl.jsx";
import Btn from "../Bricks/Btn.jsx"; 
import Pic from "../Bricks/Pic.jsx"; 
import "./Step2.scss"; 

class DnD extends Component {
  constructor(props){
    super(props);

    this.state = {
      img : []
    }
    this.onDrop = this.onDrop.bind(this);
  }

  render() {
    return (
      <div style={{backgroundColor: "#fff"}}>
          <ul>
              <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
              <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
              <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
          </ul>
          <Droppable
              types={['fruit']} // <= allowed drop types
              onDrop={this.onDrop.bind(this)}>
              <ul style={{backgroundColor: "yellow", borderColor: "red"}} className="Smoothie">
                <li></li>
              {this.state.img.length ? this.state.img.map(function(single, key){
                return <li key={key}>{single}</li>
              }) : '' }
              </ul>
          </Droppable>
      </div>
      )
  }
  onDrop(data) {
      console.log(data)
      let state = this.state;

      state["img"].push(
        data.fruit
      );

      this.setState(
        state
      );
  }
}


class Typing extends Component {

  constructor(props){
    super(props);

    this.handleTxtAdd = this.handleTxtAdd.bind(this);
    // this.handleMemeCreation = this.handleMemeCreation.bind(this); 
  }

  state = {
    txt: ''
  }

  handleTxtAdd(e){
    e.preventDefault();
      const value = e.target.value; 
      this.setState({
          txt: value
      })
      console.log(this.state.txt)
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
          <Btn txt="Add text to the painting" />
        </form>
      
      {inputTxt}

      </section>
    )
  }
}

class Elements extends Component {
  
  constructor(props){
    super(props);
  }
  

  render(){
    return (
      <div className="step2-elements">
        <DnD />
        <Pic bigImage={this.props.bigImage} />
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
            <Elements bigImage={this.props.bigImage}/>
          </section>
        </div>
      )
    }
  }

export default Step2;