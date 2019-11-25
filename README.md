## 移动端农机商城项目总结
`移动端农机商城系统，包括首页展示，类别展示，购物功能，注册登录`
## 效果图
![效果图请看：](http://49.232.143.111:3000/images/1.jpg)
![效果图请看：](http://49.232.143.111:3000/images/2.jpg)
![效果图请看：](http://49.232.143.111:3000/images/3.jpg)
![效果图请看：](http://49.232.143.111:3000/images/4.jpg)
![效果图请看：](http://49.232.143.111:3000/images/5.jpg)
![效果图请看：](http://49.232.143.111:3000/images/6.jpg)
## 实现功能

## 技术栈
`Vue 全家桶、Vant、ES6、webpack、Node.js、Koa2、 MongoDB、Mongoose`

## 项目目录

## 项目结构
```
. common文件夹存放的是通用的css和fonts<br/>
. componets文件夹用来存放Vue组件<br/>
. router文件夹存放Vue组件<br/>
. build文件是webpack的打包编译配置文件<br/>
. config文件夹存放的是一些配置项，比如我们服务器访问的端口配置等<br/>
. dist该文件一开始是不存放，在项目经过build之后才会生成<br/>
. Prod.server.js该文件是测试模拟的服务器配置，用来运行dist里面的文件
. config/index.js中，build对象中添加一条端口设置port:9000<br/>
. App.vue根组件，所有的子组件都将在这里被引用<br/>
. Index.html整个项目的入口文件，将会引用我们的根组件App.vue<br/>
. Main.js入口文件的js逻辑，在webpack打包之后将被注入到index.html<br/>
```
## 搭建Vue的运行环境
1. 首先是安装node <br>
端开发框架和环境都是需要Node.js，先安装node.js开发环境，vue的运行是依赖于node的npm的管理工具来实现的，下载地址(nodejs.org/en/)
2. 查看node的版本号<br>
`node -v`
3. 安装淘宝npm镜像<br>
`$ npm install -g cnpm --registry=https://registry.npm.taobao.org`
4. 安装全局vue-cli脚手架<br>
`cnpm install -g vue-cli`
5. 初始化项目<br>
`Vue init webpack demo`
6. 运行项目<br>
`npm run dev`
7. 发布代码<br>
`npm run build`

## 开发过程中重点问题总结
1. 要求自适应布局<br>


2. transition过渡<br>










