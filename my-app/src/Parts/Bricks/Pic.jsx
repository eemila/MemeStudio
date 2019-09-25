import React, {Component} from "react"

class Pic extends Component {
    render(){
      return (
        // <article className="chosen-img">
        //   <div className="chosen-pic">
            <img 
              alt="" 
              src={this.props.bigImage} 
              style={{width: "350px", 
                      height: "350px",
                      objectFit: "cover"}}/>
        //   </div>
        // </article> 
      )
    }
  }

export default Pic   