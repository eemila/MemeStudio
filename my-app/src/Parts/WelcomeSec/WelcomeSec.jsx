import React, {Component} from 'react';

import "./WelcomeSec.scss"

class Hamburger extends Component {
  render(){
    return(
      <nav className="side-nav">
        <button className="hamburger"></button>
          <ul className="side-menu">
            <li className="side-menu-item"><a href="/" className="side-menu-item-link">Home</a></li>
            <li className="side-menu-item"><a href="#inspiration" className="side-menu-item-link">Get inspired</a></li>
            <li className="side-menu-item"><a href="#step1" className="side-menu-item-link">Get stared</a></li>
            <li className="side-menu-item"><a href="#foot" className="side-menu-item-link">Contact us</a></li>
          </ul>
    </nav>
    )
  }
}

class MainMenu extends Component {
  render(){
    return ( <>
      <ul className="menu-main">
        <li className="menu-main-item"><a href="/" className="menu-main-item-link">Home</a></li>
        <li className="menu-main-item"><a href="#inspiration" className="menu-main-item-link">Get inspired</a></li>
        <li className="menu-main-item"><a href="#step1" className="menu-main-item-link">Get stared</a></li>
        <li className="menu-main-item"><a href="#foot" className="menu-main-item-link">Contact us</a></li>
      </ul>
      <Hamburger />
      </>
    )
  }
}

class UpperBar extends Component {
  render(){
    return (
      <>
      <header className="header-main">
        <p className="logo"><span>Meme</span>Studio</p>
        <MainMenu />
      </header>
      </>
    )
  }
}

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
  
          <section className="slogan-main"
            style={{ top: this.state.offset / 2 }}>
           <p className="slogan-txt">Create the awesome memes and impress your art geek friends</p>
           <a href="#step1" className="start-btn">Get started</a>
         </section>
        </div>
      </section>
      )
    }
  }


  export default WelcomeSec;