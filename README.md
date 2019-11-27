

## 移动端农机商城项目总结
`移动端农机商城系统，包括首页展示，类别展示，购物功能，注册登录`
## 目录结构
- [效果图](#效果图)
- [实现功能](#实现功能)
- [技术栈](#技术栈)
- [项目目录](#项目目录)
- [项目结构](#项目结构)
- [搭建vue的运行环境](#搭建vue的运行环境)
- [开发过程中重点问题总结](#开发过程中重点问题总结)
   - [一-项目前期准备遇到的问题](#一-项目前期准备遇到的问题)
   - [二-首页布局及vant ](#二-首页布局及vant )
   - [三-axios及mockjs](#三-axios及mockjs)
   - [四-koa2](#四-koa2)
   - [五-mongodb](#五-mongodb)
   - [六-用户注册](#六-用户注册)
   - [七-用户登录](#七-用户登录)
   - [八-商品分类功能](#八-商品分类功能)
   - [九-商品详情功能](#九-商品详情功能)
   - [十-购物车功能及打包优化](#十-购物车功能及打包优化)
## 效果图
![效果图请看：](http://49.232.143.111:3000/images/11.jpg)
![效果图请看：](http://49.232.143.111:3000/images/22.jpg)
![效果图请看：](http://49.232.143.111:3000/images/33.jpg)
![效果图请看：](http://49.232.143.111:3000/images/44.jpg)
![效果图请看：](http://49.232.143.111:3000/images/55.jpg)
![效果图请看：](http://49.232.143.111:3000/images/66.jpg)
## 实现功能

## 技术栈
`Vue 全家桶、Vant、ES6、webpack、Node.js、Koa2、 MongoDB、Mongoose`

## 项目目录
![项目目录：](http://49.232.143.111:3000/images/dir1.png)
## 项目结构
```
. assets文件夹存放的是通用的css和fonts<br/>
. componets文件夹用来存放Vue组件<br/>
. vue.config.js文件存放的是一些配置项，比如我们服务器访问的端口配置等<br/>
. dist该文件一开始是不存放，在项目经过build之后才会生成<br/>
. server.config.js该文件是用于存放一些公共接口的和一些全局常量
. App.vue根组件，所有的子组件都将在这里被引用<br/>
. index.html整个项目的入口文件，将会引用我们的根组件App.vue<br/>
. main.js入口文件的js逻辑，在webpack打包之后将被注入到index.html<br/>
. views文件夹存放的是一些页面级别的组件<br/>
. router.js文件是用于配置路由组件的<br/>
. store.js文件时用于存储全局的状态信息<br/>
. mock文件夹中是用于存放一些开发时使用的一些模拟生成的数据<br/>
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
#### 一 项目前期准备遇到的问题
1. 移动端屏幕适配方案<br>

   首页中推荐列表目前我们使用mockjs模拟的数据，
   但是布局却是使用的flex弹性盒模型布局：
   ```
   .parent{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
   }
   .son{
      flex: .4;
      // width: 45%;
   }
   ```
   常用的还有：
   百分比
   媒体查询
   rem

2. 配置底部菜单路由<br>
   ```
         使用的是vant提供的tabbar导航栏组件，
         存在的问题：不能重复点击当前这个导航项，不然会报错（不能跳转到当前路由)<br>
         解决方法： 可以使用vue提供的全局导航守卫beforeRouterenter来进行拦截判断；
        <van-tabbar v-model="active" route @change="change">
          <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
          <van-tabbar-item icon="records" to="/catalogue">分类</van-tabbar-item>
          <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
          <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
        </van-tabbar>
   ```
#### 二 首页布局及Vant 
1. 按需引入Vant<br>
1. 首页布局及样式<br>
1. 轮播图组件及懒加载<br>
1. 热门商品vue-awesome-swiper<br>

#### 三 Axios及Mockjs
1. Axios介绍及使用<br>
1. Mock.js生成随机数据,拦截Ajax请求<br>
1. 完成首页其他部分<br>
1. 后端接口配置<br>

#### 四 Koa2
1. 异步操作async、await<br>
1. MVC模式<br>
1. 安装Koa2<br>
1. 接收前端请求GET、POST<br>
1. koa-router<br>
1. cookie<br>
1. 模板ejs<br>

#### 五 MongoDB
1. 安装MongoDB <br>
1. 常用命令<br>
1. 数据增删改查<br>
1. 索引<br>

#### 六 用户注册
1. 前端页面编写<br>
1. 前后端交互操作数据库<br>
1. koa-router <br>
1. Mongoose<br>
1. 跨域<br>
1. 密码加盐加密<br>

#### 七 用户登录
1. 页面编写<br>
1. 密码加盐加密<br>
1. session<br>
1. Vuex<br>

#### 八 商品分类功能
1. Node.js读取JSON文件数据导入数据库<br>
1. 页面编写,二级联动<br>
1. 上拉加载<br>
1. 下拉刷新<br>

#### 九 商品详情功能
1. 页面编写<br>
1. vue-router传参方式<br>
1. 使用Vant组件<br>
1. 连接数据库查询商品详情<br>
1. 指定路由不显示公共组件<br>
1. 加入购物车判断登录状态<br>

#### 十 购物车功能及打包优化
1. 页面编写<br>
1. 总价计算computed<br>
1. 多集合查询<br>
1. 打包 优化<br>
   1. 刷新页面，footerBar默认选中
   2. 缓存路由组件
   3. 路由组件懒加载
   4. 错误页面处理 404
   5. UI库按需加载
   6. 打包文件分析 report
   7. gzip





