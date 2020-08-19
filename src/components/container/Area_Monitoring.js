import React, {Component,Fragment} from 'react';
import { Switch,  Route} from "react-router-dom";
import Menu from '../menu/Menu';
// import WrapperTable from '../table/WrapperTable';
import  { MONITORING }  from '../../store/System';
import {
  LineLossTotal,
  LossException,
  EletricAlarmInfo,
  TelemetryAlarmInfo,
  AlarmMaintenance,
  UnbalancedInfo,
  FreezingData,
  ElectricAnalysis,
  PowerQuality,
  LoadCurve,
  RemoteFailure
 } from '../AreaMonitor/AreaInfo';
import {AREA_MONITORING} from '../../store/Common';

class AreaMonitoring extends Component {

  constructor(...args) {
    super(...args);
    this.state= {
      menuList: MONITORING
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
                        <Route path="/area_monitoring/line_loss_total" component={ LineLossTotal } />
                        <Route path="/area_monitoring/loss_exception" component={ LossException } />
                        <Route path="/area_monitoring/eletric_alarm" component={ EletricAlarmInfo } />
                        <Route path="/area_monitoring/telemetry_alarm" component={ TelemetryAlarmInfo } />
                        <Route path="/area_monitoring/alarm_maintenance" component={ AlarmMaintenance } />
                        <Route path="/area_monitoring/unbalanced_info" component={ UnbalancedInfo } />
                        <Route path="/area_monitoring/freezing_data" component={ FreezingData } />
                        <Route path="/area_monitoring/electric_analysis" component={ ElectricAnalysis } />
                        <Route path="/area_monitoring/power_quality" component={ PowerQuality } />
                        <Route path="/area_monitoring/load_curve" component={ LoadCurve } />
                        <Route path="/area_monitoring/remote_failure" component={ RemoteFailure } />
                   </Switch>
                 </div>
           </section>
       </Fragment>
     );
  }
}


export default AreaMonitoring;
