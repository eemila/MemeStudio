import React, {Component} from 'react';

import logo from "../../imgs/logo.jpg"

import "./WelcomeSec.scss"

class MainMenu extends Component {
  render(){
    return (
      <ul className="menu-main">
        <li className="menu-main-item"><a href="/" className="menu-main-item-link">Home</a></li>
        <li className="menu-main-item"><a href="/" className="menu-main-item-link">Get started</a></li>
        <li className="menu-main-item"><a href="/" className="menu-main-item-link">Contact us</a></li>
        <li className="menu-main-item"><a href="/" className="menu-main-item-link">About us</a></li>
      </ul>
    )
  }
}

class UpperBar extends Component {
  render(){
    return (
      <>
      <header className="header-main">
        <img className="logo" src={logo} alt="MemeStudio" title="MemeStudio"/>
        <MainMenu />
      </header>
      </>
    )
    
  }
}

// class Slogan extends Component {
//   render(){
//     return (
//       <>
//         <section className="slogan-main"
//             style={{ bottom: this.state.offset / 2 }}>
//            <p className="slogan-txt">Create the awesome memes and impress your art geek friends</p>
//            <a href="/" className="start-btn">Get started</a>
//          </section> 
//        </>
//      )
//    }
//  }

class WelcomeSec extends Component {
  constructor() {
    super()
  
    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }

  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };
    render(){
      return (
        <section className="welcome-sec"
        style={{ backgroundPositionY: this.state.offset}}
        >
          <div className="ctn-main">
          <UpperBar />  
  
          {/* <Slogan /> */}
          <section className="slogan-main"
            style={{ top: this.state.offset / 2 }}>
           <p className="slogan-txt">Create the awesome memes and impress your art geek friends</p>
           <a href="/" className="start-btn">Get started</a>
         </section>
        </div>
      </section>
      )
    }
  }


  export default WelcomeSec;