import React, {Component} from 'react';

class Painting extends Component {
    state = {
        hovering: false
    }

    onMouseEnter = () => {
        this.setState({
            hovering: true
        })
    }

    onMouseLeave = () => {
        this.setState({
            hovering: false
        })
    }

    render(){
        let { src, pic_auth, img_ttl } = this.props;
        const { hovering } = this.state;
        const style = {
            // border: hovering ? "3px solid #fff" : "1px solid #fff",
            opacity: hovering ? ".5" : "1", 
            transition: "800ms all"
        };
        return(
          <>
            <img onClick={(e) => { this.props.onClick(e) }} className="gallery-img" src={src} alt="" title="" 
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                style={style}
                href="#chosen-pic"
            />
            <h4 className="hidden">{img_ttl}</h4>
            <p className="hidden">{pic_auth}</p> 
          </>      
      )
    }
  };


export default Painting 