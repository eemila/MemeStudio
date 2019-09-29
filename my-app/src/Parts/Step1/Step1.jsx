import React, {Component} from 'react';
import StepTitle from "../Bricks/Ttl.jsx";
// import Btn from "../Bricks/Btn.jsx";
// import Pic from "../Bricks/Pic.jsx"; 
import Painting from "../Bricks/Painting.jsx"; 

import img1 from "../../imgs/wenusbirth01.jpg"; 
import img2 from "../../imgs/Liberty-Leading-The-People.jpg"; 
import img3 from "../../imgs/Landscape-with-the-fall-of-Icarus.jpg"; 
import img4 from "../../imgs/The_Anatomy_Lesson.jpg"; 
import img5 from "../../imgs/The-Persistence-of-Memory.jpg"; 
import img6 from "../../imgs/The-Last-Supper-1400x789.jpg"; 
import img7 from "../../imgs/The-Creation-of-Adam.jpg"; 
import img8 from "../../imgs/sniadanieNaTrawie.jpg"; 
import img9 from "../../imgs/Mona-Lisa.jpg"; 
import img10 from "../../imgs/thescream.jpg"; 
import img11 from "../../imgs/marylin.jpg"; 
import img12 from "../../imgs/caravaggio.jpg"; 
import "./Step1.scss"; 


class Gallery extends Component {

  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  state = {
    bigImage: ''
  }

  onClick(e){
    e.preventDefault(); 
    this.props.changeBigImage(e.currentTarget.getAttribute('src'));
  }

  render(){
    return (
      <section className="step1-gallery">
        
        <Painting src={img1} 
                  pic_auth="Sandro Botticelli" 
                  img_ttl="The Birth of Venus" 
                  onClick={this.onClick}
                  />
        <Painting src={img2} 
                  pic_auth="Eugène Delacroix" 
                  img_ttl="Liberty Leading the People" 
                  onClick={this.onClick}
                  />
        <Painting src={img3} 
                  pic_auth="Pieter Bruegel" 
                  img_ttl="Landscape with the Fall of Icarus" 
                  onClick={this.onClick}
                  />
        <Painting src={img4} 
                  pic_auth="Rembrandt" 
                  img_ttl="The Anatomy Lesson of Dr. Tulp" 
                  onClick={this.onClick}
                  />
        <Painting src={img5} 
                  pic_auth="Salvador Dali" 
                  img_ttl="The Persistence of Memory" 
                  onClick={this.onClick}
                  />
        <Painting src={img6} 
                  pic_auth="Leonardo da Vinci" 
                  img_ttl="The Last Supper" 
                  onClick={this.onClick}
                  />
        <Painting src={img7} 
                  pic_auth="Michelangelo" 
                  img_ttl="The Creation of Adam" 
                  onClick={this.onClick}
                  />
        <Painting src={img8} 
                  pic_auth="Édouard Manet" 
                  img_ttl="The Luncheon on the Grass" 
                  onClick={this.onClick}
                  />
        <Painting src={img9} 
                  pic_auth="Leonardo da Vinci" 
                  img_ttl="Mona Lisa" 
                  onClick={this.onClick}
                  />
        <Painting src={img10} 
                  pic_auth="Edvard Munch" 
                  img_ttl="The Scream" 
                  onClick={this.onClick}
                  />
        <Painting src={img11} 
                  pic_auth="Andy Warhol" 
                  img_ttl="Marylin" 
                  onClick={this.onClick}
                  />
        <Painting src={img12} 
                  pic_auth="Caravaggio" 
                  img_ttl="Judith Beheading Holofernes" 
                  onClick={this.onClick}
                  />
      </section>
    )
  }
}


class Pictures extends Component {
  render(){
    return (
      <section className="step1-pics">
        <Gallery changeBigImage={this.props.changeBigImage} />
      </section>
    )
  }
}
class Step1 extends Component {
    render (){
      return (
        <div className="ctn-main">
          <section className="step1 step-sec" id="step1">
            <StepTitle stepNo="Step 1: " title="Pick your masterpiece"/>
            <Pictures bigImage={this.props.bigImage} changeBigImage={this.props.changeBigImage}/>
          </section>
        </div>
      )
    }
  }

export default Step1;

