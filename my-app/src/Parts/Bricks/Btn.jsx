import React, {Component} from 'react';

class Btn extends Component {
    render(){
      let { txt } = this.props
      return(
        <a 
        className="secondary-btn"
        onClick={(e)=>{this.props.handleMemeCreation(e)}}>{txt}</a>
      )
    }
  };


export default Btn 