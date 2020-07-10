import React, { Component } from 'react';

class Message extends Component {

   constructor(...args){
     super(...args);

     this.state = {
       show: this.props.showFlag,
       initStyle:{
          "position": "fixed",
          "bottom": "35px",
          "zIndex": "9999",
          "left": "50%",
          "textAlign": "center",
          "width": "130px",
          "height": "35px",
          "background": "rgba(0,0,0,0.5)",
          "color":"#ffffff",
          "fontSize": "14px",
          "lineHeight": "35px",
          "borderRadius": "3px"
       }
     }
   }

   componentDidMount(){
   }
   render() {
      return (
        <>
          { this.state.show ? <div style={ this.state.initStyle } dangerouslySetInnerHTML={{__html:`${ this.props.title }`}}></div> : null }
        </>
      );
   }
}

export default Message;
