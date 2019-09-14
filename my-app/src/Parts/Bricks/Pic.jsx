import React, {Component} from "react"

class Pic extends Component {
    render(){
      return (
        <article className="chosen-img">
          <div className="chosen-pic">
            <img src={this.props.bigImage}/>
          </div>
        </article> 
      )
    }
  }

export default Pic   