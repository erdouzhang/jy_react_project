import React from 'react';
import Message from './Message';
import requestService from '../utils/request'
import "../assets/css/Login.css";

class Login extends React.Component {

    constructor(...args){
        super(...args);
        this.state = {
           "title": "登录表单",
           "userName": null,
           "password": null,
           "messageFlag": false,
           "msg": null
        }
    }

    login() {

      // 表单验证
      let userName = this.state.userName;
      let password = this.state.password;
      let _this = this;

      if(userName == '' || userName == null ||  password == "" || password == null) {

            let clearTimer = null;
            this.setState({
              "messageFlag": true,
              "msg": "请填写用户名密码"
            });
            // 弹出框关闭
           clearTimer = setTimeout(() => {
                this.setState({
                   "messageFlag": !this.state.messageFlag
                  });
          }, 3000);
          return false;
      }

      // 数据请求登录信息
      let data = {
          "userName": this.state.userName,
          "password": this.state.password
      };
      let promiseResult = requestService.postData("/user/login", data);
      promiseResult.then(function(response) {
       let  { code, data, message } = response;
       if(code == 200) {
           // 页面跳转 保存数据dao localstorage
          if(window.localStorage){
               let storageInfo = window.localStorage;
               // storerage是否存在
               if(storageInfo) {
                   storageInfo.clear();
               }
               // 重新设置storageInfo
               storageInfo.setItem("store_info", JSON.stringify(data));
               // 跳回主页面
               // 成功后路由跳转
                _this.props.history.push({ pathname:'index' });
           }
       } else {
         this.setState({
           "messageFlag": true,
           "msg": message
         });
         return;
       }
      }).catch((error) => {
        console.log(error);
      });



    }

    formUserChange() {
      let name = this.refs.userName.value;
      this.setState({
         "userName": name,
      });
    }
    formPassword(){
      let password = this.refs.password.value;
      this.setState({
         "password": password,
      });
    }
    render(){
      return (
          <>
          <div className="login_box">
              <h3>电力平台</h3>
              <section className="login_form">
                   <form>
                        <p><label>用户名:</label><input ref="userName" type="text" onChange={this.formUserChange.bind(this)} /></p>
                        <p><label>密&nbsp;&nbsp;&nbsp;码:</label><input ref="password" type="password" onChange={this.formPassword.bind(this)} /></p>
                   </form>
              </section>
              <button className="login_btn" type="button" onClick={this.login.bind(this)}>登录</button>
          </div>
           {this.state.messageFlag ? <Message title={this.state.msg} showFlag={ this.state.messageFlag } /> : null}
          </>
      );
    }
}
export default Login;
