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
import img10 from "../../imgs/Les-Demoiselles-d-Avignon.jpg"; 
import img11 from "../../imgs/Lady-with-an-Ermine.jpg"; 
import img12 from "../../imgs/Donne-di-Tahiti.jpg"; 
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
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img2} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img3} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img4} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img5} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img6} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img7} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img8} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img9} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img10} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img11} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
        <Painting src={img12} 
                  pic_auth="Autor Obrazu" 
                  img_ttl="Tytuł Obrazu" 
                  onClick={this.onClick}
                  />
      </section>
    )
  }
}

// class ChosenPic extends Component {
//   render(){
//     return (
//       <section className="chosen-pic-sec">
//         <Pic bigImage={this.props.bigImage}/> 
//         <Btn 
//           txt="Pick this one"/>
//       </section>
//     )
//   }
// }

class Pictures extends Component {
  render(){
    return (
      <section className="step1-pics">
        <Gallery changeBigImage={this.props.changeBigImage} />
        {/* <ChosenPic bigImage={this.props.bigImage}/>        */}
      </section>
    )
  }
}
class Step1 extends Component {
    render (){
      return (
        <div className="ctn-main">
          <section className="step1 step-sec">
            <StepTitle stepNo="Step 1: " title="Pick your masterpiece"/>
            <Pictures bigImage={this.props.bigImage} changeBigImage={this.props.changeBigImage}/>
          </section>
        </div>
      )
    }
  }

export default Step1;

// notes - próba dobicia się do api
// constructor(props){
  //   super(props);

  //   this.state={
  //     url: "",
  //   };  
  // }

  // componentDidMount() {
  //   this.uploadImages();
  // } 

  // uploadImages = () => {
  //   fetch(`"https://api.artsy.net/api/artworks/collections/" -H "X-XAPP-Token:X-Xapp-Token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU2OTAxMjU1NSwiaWF0IjoxNTY4NDA3NzU1LCJhdWQiOiI1ZDdhMDJkMGMyNmY2MTAwMGVhZGE1MGIiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWQ3YzAwY2I4MzU2YTUwMDBlNTg3MzhlIn0.8pl-N9ciBbEtylmWNktGHKsFvpQAwlk8M9H59o2lcJ4"`)
  //   .then(res => res.text())          // convert to plain text
  //   .then(text => console.log(text))
    // .then(resp => {
       
    //   if(resp.ok){
    //     return resp
    //   }
    //     throw Error("coś tu nie działa");
    // })  
  //   .then(resp => resp.json())
  //   .then(imgs => console.log(imgs))
  //   .catch(err => console.log(err))
  // }      