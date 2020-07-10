This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### 开发周期

```
 2020 年 7 月 9 日
```

### 使用路由

```
    yarn add react-router-dom(针对浏览器)


    React router 路由是的跳转

    参考资料: https://blog.csdn.net/weixin_37865166/article/details/89477489

    JS跳转:
    this.props.history.push({"pathname": "index"});

     浏览器中使用插件路由  react-dom-router

     官网:

     https://reactrouter.com/web/example/route-config



```

### 页面渲染HTML字符串(rect)

```
 参考网址: https://www.cnblogs.com/hai-cheng/p/9264638.html
```


### React 开发设置代理跨域

```
   参考网址: https://segmentfault.com/q/1010000017054397

   使用自定义代理

   1. 安装 http-proxy-middlewware

   npm install http-proxy-middlewware --save
   # or
   yarn add http-proxy-middlewware


   2.创建src/setupProxy.js

   3.设置代理

   const proxy = require('http-proxy-middleware');

   module.exports = function(app) {
     app.use(proxy('/jy', {
       target: 'http://192.168.2.118:9090'
     })); //target是请求接口的根地址    /v1是请求的url地址中的前缀
     //eg：https://www.google.com/v1/count/common/list  完整的接口地址
   };


```

### 上传到github
```
     .gitignor
     
```
