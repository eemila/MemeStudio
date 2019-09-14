import React, {Component} from 'react';

class Btn extends Component {
    render(){
      let { txt } = this.props
      return(
        <a href="/" className="secondary-btn">{txt}</a>
      )
    }
  };


export default Btn 