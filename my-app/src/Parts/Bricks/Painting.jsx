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
            visibility: hovering ? "visible" : "hidden", 
            border: hovering ? "1px solid #fff" : "none"
        };
        return(
          <div className="img-ctn">
            <figure><img onClick={(e) => { this.props.onClick(e) }} 
                        className="gallery-img" 
                        src={src} 
                        alt="" title="" 
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            /></figure>
            <div className="ImgInfoCtn" style={style}>
              <h4 className="picTtl" >{img_ttl}</h4>
              <p className="picAuth" >{pic_auth}</p> 
            </div>
          </div>      
      )
    }
  };


export default Painting 