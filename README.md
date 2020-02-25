# 电影小程序（云开发）练习

## 项目简介
因为公司最近给我分了个项目前端是需要PC端和小程序端都要的，因为之前没学习过小程序开发，借这次机会学习一下小程序的开发。因为有vue的基础，所以在看文档的时候就有一点熟悉的感觉。<br>
主要有三个page，movie主要展示从豆瓣调用的api展示的电影列表；![movie](./miniprogram/images/PicsForReadme/5.PNG)<br>点击评价进入comment，主要展示电影的详情并可以发表评价；<br>
![comment](./miniprogram/images/PicsForReadme/6.PNG)<br>最后是profile，顾名思义就是简单的个人信息页面<br>
![profile](./miniprogram/images/PicsForReadme/7.PNG)<br>
我是19年毕业刚入行的小白，有些代码写的不好，希望各位前辈大佬们可以指点指点<br>

### 开发记录（记录一下过程和坑）
1. 项目的图标使用的是阿里巴巴矢量图标库的淘票票官方图标库
[地址戳我](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=16957)

2. tips：在app.json文件里配置页面路径可以在目录中自动生成文件，省去到目录里创建文件夹和文件的过程 <br>
```JAVASCRIPT
  "pages": [
    "pages/movie/movie",
    "pages/profile/profile"
  ],
```
![目录](./miniprogram/images/PicsForReadme/1.PNG) <br>
坑：自动生成文件失败<br>
![自动生成失败](./miniprogram/images/PicsForReadme/2.PNG) <br>
解决办法：
项目初始化后的app.json是自带了一些页面路径的，在删掉这些路径配置和硬盘中的文件前先配置一条你需要的一个页面路径，这时候一般是能自动生成文件，没有问题之后就可以把初始化自带的页面路径都删掉了，然后就能愉快的在这里配置其他页面路径并自动生成文件了。

3. 引入vant-weapp组件库。
有三种主流的组件库，简单介绍一下
```JAVASCRIPT
|-- UI组件库
　　|-- WeUI 一套同微信原生视觉体验一致的基础样式库
　　|-- iView Weapp 高质量的微信小程序UI组件库
　　|-- Vant Weapp 轻量、可靠小程序UI组件库
```
这里我选了vant-weapp组件库，下面介绍一下安装和引入<br>
首先在目录的miniprogram文件夹右键打开终端并输入下面命令在该文件夹下去初始化package.json
```JAVASCRIPT
npm init  //输入之后一路回车到结束
```
生成package.json之后在终端中输入下面命令安装对应的包
```JAVASCRIPT
npm i vant-weapp -S --production
```
接着到工具下点击构建npm，成功之后miniprogram下会生成miniprogram_npm文件夹，里面就有vant-weapp的包 <br>
![构建npm](./miniprogram/images/PicsForReadme/3.JPG) <br>
最后一步是到开发工具最右边点击箭头里的详情勾选使用npm模块<br>
![使用npm模块](./miniprogram/images/PicsForReadme/4.PNG) <br>
引入组件库：<br>
比如在profile.json中引入组件库
```JAVASCRIPT
"usingComponents": {
  "van-button": "vant-weapp/button"
}
```
然后就可以在profile.wxml中使用vant-weapp的按钮组件了，具体使用可以到官方文档学习[点我](https://youzan.github.io/vant-weapp/)

4. 使用request包发请求
使用request/request-promise方法
先创建movielist的云函数，点击这个文件夹右键打开终端先安装request这个包
```JAVASCRIPT
npm install --save request
```
安装成功之后再安装request-promise这个包
```JAVASCRIPT
npm install --save request-promise
```
在movielist云函数index.js中引入request-promise
```JAVASCRIPT
var rp = require('request-promise');
```
调用豆瓣电影API接口<br>
```JAVASCRIPT
获取正在热映的电影：https://douban.uieee.com/v2/movie/in_theaters
访问参数：
start : 数据的开始项
count：单页条数

```
5. 电影详情页的背景图高斯模糊效果，参考[一](https://blog.csdn.net/weixin_39015132/article/details/81179775) [二](https://blog.csdn.net/ion_L/article/details/82464548?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task)


6. open-data开放能力
通过type的合法值取值可以获取用户的信息，具体可以到官方文档进行学习[open-data](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)

## 参考
1. [小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

2. [vant-app官方文档](https://youzan.github.io/vant-weapp/#/intro)

3. [谢成老师的小程序与云开发入门](https://www.imooc.com/learn/1121)

