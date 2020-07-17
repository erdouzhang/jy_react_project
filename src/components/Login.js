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
                _this.props.history.push({ pathname:'/view_screen' });
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
          <section className="login_wrapper">
            <div className="login_items">
              <div className="login_center_box items_bg_left">
                  <div className="login_title"></div>
                  <div className="login_line"></div>
                  <div className="login_text">Distribution Monitoring System</div>
              </div>
              <div className="login_center_box items_bg_right">
                  <div className="login_welcome items_from">欢迎用户登录系统</div>
                  <div className="items_from">
                       <div className="layui-form-item">
                         <label className="layadmin-user-login-icon layui-icon layui-icon-username" htmlFor="LAY-user-login-username"></label>
                         <input ref="userName" type="text" name="username" id="user-login-username" placeholder="请输入用户名" className="layui-input" onChange={this.formUserChange.bind(this)} />
                       </div>

                  </div>
                  <div className="items_from">
                    <div className="layui-form-item">
                      <label className="layadmin-user-login-icon layui-icon layui-icon-username" htmlFor="password"></label>
                      <input ref="password" type="password" name="password" id="user-login-password" placeholder="请输入密码" className="layui-input" onChange={this.formPassword.bind(this)} />
                    </div>
                  </div>
                  <div className="items_from">
                      <div className="login_forget">
                        <span>
                          <input type="checkbox" id="checkbox_a1" className="chk_1" value="记住密码"/>
                          <label htmlFor="checkbox_a1" ></label> 记住密码
                        </span>
                        <span className="forget_password_title">忘记密码?</span>
                      </div>
                  </div>
                  <div className="items_from">
                      <p><button type="button" className="login_btn" id="loginBtn" onClick={this.login.bind(this)}>登录</button></p>
                  </div>
              </div>
            </div>
          </section>
           {this.state.messageFlag ? <Message title={this.state.msg} showFlag={ this.state.messageFlag } /> : null}
          </>
      );
    }
}
export default Login;
