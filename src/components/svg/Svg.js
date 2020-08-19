import React, { Component, Fragment } from 'react';
class Svg extends Component{

     render() {
       return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1366" height="500" style={{"outline": "2px solid rgb(0,255,255)"}}>
                    <g id="g_svg" fill="red">
                      <defs>
                        <filter id="p1" x="0" y="0" width="200%" height="200%">
                          <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20"></feOffset>
                          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10"></feGaussianBlur>
                          <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
                        </filter>
                      </defs>
                       <path d="M 100 100 L 100 300 L 500 300 L 500 100 L 100 100 Z" fill="rgb(0,255,0)" stroke="rgb(255,255,0)" strokeWidth="3"/>
                       <circle filter="url(#p1)" cx="0" cy="0" r="30">
                         <animateMotion path="M 100 100 L 100 300 L 500 300 L 500 100 L 100 100 Z"
                             begin="0s" dur="30s" repeatCount="indefinite"></animateMotion>
                       </circle>

                    </g>
                    <g>
                        <image x="20" y="20" width="300" height="300" xlinkHref="bg_login.png"></image>
                    </g>

                </svg>

       )
     }

}

export default Svg;
