import React, { Component,Fragment} from 'react';
import Menu from '../menu/Menu';
import {  Switch,  Route} from "react-router-dom";
import WrapperTable from '../table/WrapperTable';

class SystemSetting extends Component{
    constructor(...args) {
       super(...args);
       this.state= {
         menuList:[{
             "key": 1,
             "text": "平台信息",
             "path": "/system_setting/table"
         },{
           "key": 2,
           "text": "监测设备",
           "path": "/system_setting/test1"
         }, {
           "key": 3,
           "text": "设备信息",
           "path": "/system_setting/test2"
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
               <Switch>
                    <Route path="/system_setting/table" component={ WrapperTable } key="a" />
                    <Route path="/system_setting/test1" component={ WrapperTable } key="b" />
                    <Route path="/system_setting/test2" component={ WrapperTable } key="c" />
               </Switch>
             </div>
           </section>
        </Fragment>
      );
     }
}


export default SystemSetting;
