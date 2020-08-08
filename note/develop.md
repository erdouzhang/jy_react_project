#JS 二进制操作

```
 参考网址：
           https://www.jb51.net/article/147112.htm
           https://www.cnblogs.com/dxl395/p/11277858.html
           https://www.jb51.net/article/58281.htm
           https://www.cnblogs.com/ad-mushroom/p/10514063.html
           https://zhuanlan.zhihu.com/p/40649410
           https://www.cnblogs.com/chris-oil/p/8615559.html
```

# JS编译器和解释器：V8是如何执行一段JavaScript代码的？

```
参考网址:

https://www.cnblogs.com/bala/p/12205485.html


js内部原理参考

https://www.cnblogs.com/bala/p/12214564.html
```


###  关于requestAnimationFrame(动画帧)
```
  参考网址: https://www.jianshu.com/p/f6d933670617
```
### 谷歌开发者工具 performace性能分析
```
 参考网址: https://www.cnblogs.com/xiaohuochai/p/9182710.html

```
### window下查看端口号
```
查看开启的端口

1、Windows平台
在windows命令行窗口下执行：
1.查看所有的端口占用情况
C:\>netstat -ano

协议    本地地址    外部地址   状态              PID
TCP 127.0.0.1:1434 0.0.0.0:0 LISTENING 3236
TCP 127.0.0.1:5679 0.0.0.0:0 LISTENING 4168
TCP 127.0.0.1:7438 0.0.0.0:0 LISTENING 4168
TCP 127.0.0.1:8015 0.0.0.0:0 LISTENING 1456
TCP 192.168.3.230:139 0.0.0.0:0 LISTENING 4
TCP 192.168.3.230:1957 220.181.31.225:443 ESTABLISHED 3068
TCP 192.168.3.230:2020 183.62.96.189:1522 ESTABLISHED 1456
TCP 192.168.3.230:2927 117.79.91.18:80 ESTABLISHED 4732
TCP 192.168.3.230:2929 117.79.91.18:80 ESTABLISHED 4732
TCP 192.168.3.230:2930 117.79.91.18:80 ESTABLISHED 4732
TCP 192.168.3.230:2931 117.79.91.18:80 ESTABLISHED 4732
2.查看指定端口的占用情况

C:\>netstat -aon|findstr "9050"

协议 本地地址 外部地址 状态 PID

TCP 127.0.0.1:9050 0.0.0.0:0 LISTENING 2016

P: 看到了吗，端口被进程号为2016的进程占用，继续执行下面命令： (也可以去任务管理器中查看pid对应的进程)
3.查看PID对应的进程

C:\>tasklist|findstr "2016"

映像名称 PID 会话名 会话# 内存使用
========================= ======== ================
tor.exe 2016 Console 0 16,064 K
P:很清楚吧，tor占用了你的端口。
4.结束该进程
C:\>taskkill /f /t /im tor.exe
```

### 路由

https://reactrouter.com/
