import React, {Component} from 'react';


class StepTitle extends Component {
    render(){
      let { stepNo, title } = this.props; 
      return (
          <h2 className="step-ttl">
            <span className="stepNo">{stepNo}</span> {title}
         </h2>
      )
    }
  }

  export default StepTitle
  

