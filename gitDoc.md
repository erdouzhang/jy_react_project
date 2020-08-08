### 当前项目git仓库

```
   https://github.com/erdouzhang/jy_react_project.git

```


### 安装完成查看当前git版本

```
   输入命令:git --version 可查看当前git版本,以及是否存在

```

### 安装完成配置

```
  1. 配置用户名和 邮箱
       $ git config --global user.name "Your Name"  
       $ git config --global user.email "email@example.com"  

  2. 使用命令:git config --list 可查看当前用户信息以及其他的一些信息

```
### 建立本地仓库

```
  1.cd到你的项目目录
  2.输入git命令
      git init
  3.将项目的所有文件添加到缓存中
      git add .

      git add . (注意,后面有个点)表示添加目录下所有文件到缓存库,如果只添加某个文件,只需把 . 换成你要添加的文件名即可;
  4.将缓存中的文件Commit到git库

      git commit -m “添加你的注释,一般是一些更改信息”

      或者不添加注释 git commit ,但是这样会进入vim(vi)编辑器  
```

### 建立远程仓库

```
   github创建远程仓库生成 git地址
```
### 将本地的库链接到远程仓库地址

```
      终端中输入: git remote add origin远程仓库地址

      $ git remote add origin  https://github.com/erdouzhang/jy_react_project.git  
```

### git操作注意

```
   上传代码到远程库,上传之前最好先Pull一下,再执行命令: git pull origin master

      git pull origin master


   接着执行:git push origin master

      git push origin master

```

###  分支管理

```
   1.新建分支:
       $ git branch newbranch

   2.查看分支:
       $ git branch

       输出:
           *master
            newBranch

       *代表当前所在的分支

   3.切换分支
        $ git checkout newBranch

         切换后可用git branch查看是否切换到当前分支   

         提交改动到当前分支

            $ git add .
            $ git commit -a
            可使用git status查看提交状态
            接着切回主分支

            $ git checkout master   

  4. 将新分支提交的改动合并到主分支上

        $ git merge newbranch

        如果合并后产生冲突,可输入以下指令查看冲突:

        $ git diff

        修改之后,再次提交即可;接下来,就可以push代码了:

        $ git push -u origin master

        这时可能需要你输入你的github用户名和密码,按照提示输入即可;

  5.删除分支

      $ git branch -D newbranch


```

```
很多时候，我们再开发的时候需要分支。

那么怎么在本地创建分支，并提交到github或者是远程仓库中呢？

创建分支： $ git branch mybranch
切换分支： $ git checkout mybranch
创建并切换分支： $ git checkout -b mybranch

其实很简单：

第一步：
　　git checkout -b dev     创建新的分支

第二步：
　　git push origin dev      这样远程仓库中也就创建了一个test分支
完成以上两部，我们就将本地的分支提交到远程仓库了。
```
```
仅供参考:

    创建分支： $ git branch mybranch
    切换分支： $ git checkout mybranch
    创建并切换分支： $ git checkout -b mybranch

    更新master主线上的东西到该分支上：$git rebase master

    切换到master分支：$git checkout master

    更新mybranch分支上的东西到master上：$git rebase mybranch

    提交：git commit -a

    对最近一次commit的进行修改：git commit -a –amend

    commit之后，如果想撤销最近一次提交(即退回到上一次版本)并本地保留代码：git reset HEAD^
    合并分支：(merge from) $ git checkout master
    $ git merge mybranch (merge from mybranch)
    删除分支： $ git branch -d mybranch
    强制删除分支： $ git branch -D mybranch
    列出所有分支： $ git branch
    查看各个分支最后一次提交： $ git branch -v

    查看哪些分支合并入当前分支： $ git branch –merged

    查看哪些分支未合并入当前分支： $ git branch –no-merged

    更新远程库到本地： $ git fetch origin
    推送分支： $ git push origin mybranch
    取远程分支合并到本地： $ git merge origin/mybranch
    取远程分支并分化一个新分支： $ git checkout -b mybranch origin/mybranch
    删除远程分支：　　　　　　　　　　　　　　　　　$ git push origin :mybranch

    rebase: $ git checkout mybranch
    $ git rebase master (rebase from master)

    举例： $ git checkout server
    $ git rebase –onto master server client
    $ git checkout master
    $ git merge client (fostforward)
    $ git rebase master server (checkout sever)
    $ git merge server
    $ git branch -d client
    $ git branch -d server

```
