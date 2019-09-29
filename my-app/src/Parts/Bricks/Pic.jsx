import React, {Component} from "react"

class Pic extends Component {
    render(){
      return (
          <div className="chosen-pic"
              style={{position: "relative"}}>
            <p className="memeTxtTop"
              style={{position: "absolute", 
                      bottom: "0", 
                      backgroundColor: "#000",
                      color: "#fff", 
                      marginLeft: "10px", 
                      padding: ".5rem", 
                      fontFamily: "Roboto Mono, monospace",
                      letterSpacing: "2px"
                  }}
            >{this.props.status}</p>
            <img
            className="meme-img" 
              alt="" 
              src={this.props.bigImage} 
              style={{width: "350px", 
                      height: "350px",
                      objectFit: "cover"}}/>
         </div> 
      )
    }
  }

export default Pic   