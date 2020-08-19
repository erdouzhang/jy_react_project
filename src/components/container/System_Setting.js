import React, { Component,Fragment} from 'react';
import Menu from '../menu/Menu';
import {  Switch,  Route} from "react-router-dom";
import WrapperTable from '../table/WrapperTable';
import User from '../user/User';
import { MENU_DATA }  from '../../store/System';
import {
  BasicDevices,
  DevicesPoint,
  Eleclist,
  MonitorDevices,
  ProgramBind,
  ProgramForward,
  SourceConfig,
  Typhone
}
from '../system/systemComp';

class SystemSetting extends Component{
    constructor(...args) {
       super(...args);
       this.state= {
         menuList: MENU_DATA
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
                    <Route path="/system_setting/user" component={ User } />
                    <Route path="/system_setting/elect_list" component={ Eleclist } />
                    <Route path="/system_setting/basic_devices" component={ BasicDevices } />
                    <Route path="/system_setting/typhone" component={ Typhone } />
                    <Route path="/system_setting/devices_point" component={ DevicesPoint } />
                    <Route path="/system_setting/monitor_devices" component={ MonitorDevices } />
                    <Route path="/system_setting/program_bind" component={ ProgramBind } />
                    <Route path="/system_setting/program_forward" component={ ProgramForward } />
                    <Route path="/system_setting/source_config" component={ SourceConfig } />
               </Switch>
             </div>
           </section>
        </Fragment>
      );
     }
}


export default SystemSetting;
