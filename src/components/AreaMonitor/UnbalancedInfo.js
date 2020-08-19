import React, { Component, Fragment } from 'react';
class UnbalancedInfo extends Component{
     constructor(...args){
       super(...args);
     }
     render() {
       return (
         <Fragment>
             <section>
                三相不平衡数据
             </section>
         </Fragment>
       )
     }

}

export default UnbalancedInfo;
