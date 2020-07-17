import React, { Component,Fragment} from 'react';
import Menu from '../menu/Menu';
import Table from '../table/Table';

class SystemSetting extends Component{
    constructor(...args) {
       super(...args);
       this.state= {
         menuList:[{
             "key": 1,
             "text": "平台信息"
         },{
           "key": 2,
           "text": "监测设备"
         }, {
           "key": 3,
           "text": "设备信息"
         }]
       }
    }
    render() {
      return (
        <Fragment>
           <section className="body_wrapper">
             <div className="menu_left">
                <Menu dataMenuList={this.state.menuList} />
             </div>
             <div className="content_wrapper">
                <Table />
             </div>
           </section>
        </Fragment>
      );
     }
}


export default SystemSetting;
