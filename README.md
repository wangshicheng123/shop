

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
   ```
      import {TabbarItem,Tabbar} from "vant";
      Vue.use(Tabbar).use(TabbarItem);
   ```
2. 首页布局及样式<br>
3. 轮播图组件及懒加载<br>
4. 热门商品vue-awesome-swiper<br>
   ```
      这是我在npm官网上找的一个轮播图： vue-awesome-swiper
     <swiper :options="swiperOption" class="hot-swiper">
      <swiper-slide v-for="(item,index) in hotSwiper" :key="index">
        <div class="hot-swiper-content" @click="goDetail(item._id)">
          <img :src="item.img" alt />
          <div class="hot-swiper-content-name">{{item.name}}</div>
          <div class="hot-swiper-content-price">￥ {{item.price}}</div>
        </div>
      </swiper-slide>
    </swiper>
   ```

#### 三 Axios及Mockjs
1. Axios介绍及使用<br>
   `整个项目我们使用Vue推荐的axios做为发起http请求的工具`
   ```
   get:
   axios.get(url,{params:{name:"xiaowang"}}).then((res)=>{
      console.log(res);
   });
   axios({
      method: "GET",
      url: "yourUrl",
      params: {name: "xiaowang"}
   }).then((res)=>{
      console.log(res);
   })
   post: 
   axios.post(url,{name: "xiaowang"}).then((res)=>{
      console.log(res);
   });
   axios({
      method: "POST",
      url: "yourUrl",
      data: {name:"xiaowang"}
   }).then((res)=>{
      console.log(res);
   })
   ```
2. Mock.js生成随机数据,拦截Ajax请求<br>
   mockjs在我开发初期并没有后台接口的时候用于测试使用的，目前
   项目已经开发到尾声，为了展示，仍在首页中使用的mockjs模拟的数据
   ```
     let Random = Mock.Random;
     Mock.mock(url.recommandList,{
      'list|10-15': [{
        'imgsrc': Random.image('250x250'),
        'name': Random.ctitle(),
        'price|2000-10000': 0
        }]
     })
   ```
3. 后端接口配置<br>
   我们的后台接口我同意配置在vue.config.js文件中：
   ```
      const MOCKURL= "http://nongji.com/";
      const SERVERURL= "http://49.232.143.111/shop/";

      export default{
          recommandList: MOCKURL+ 'recommandList',
          login: SERVERURL+ "user/login",
          regist: SERVERURL+ "user/regist",
          getTypeList: SERVERURL+ "type/getTypeList",
          getProduct: SERVERURL+ "product/getProduct",
          getProductDetail: SERVERURL+ "product/getProductDetail",
          addCart: SERVERURL+ "cart/addCart",
          getCart: SERVERURL+ "cart/getCart",
          deleCart: SERVERURL+ "cart/deleCart"
      }
   ```

#### 四 Koa2
1. 异步操作async、await<br>
   我们后台框架使用的是kao2,在这个框架中最常用的就是async,await
   用于把异步代码以同步的形式表达出来的一种es7语法，他是generator的进一步封装的结果，
   同是他又是基于promise的。
   
   下面以注册接口为例：
   ```
      router.post("/regist", async(ctx)=>{
       let User= Mongoose.model("User");

       // 实例化数据模型
       let newUser=new User({
           username: ctx.request.body.username,
           pass: ctx.request.body.pass
       });
       
       await newUser.save().then(()=>{
           ctx.body={
               code: 200,
               message: "注册成功"
           }
       }).catch((err)=>{
           ctx.body={
               code: 500,
               message: err
           }
       });
   });
   ```
2. MVC模式<br>
   后台代码我们采用的是mvc这种架构模式，
   M: model(数据模型)， V: View(视图页面)，C: controller(控制器，逻辑代码)  
3. 安装Koa2<br>
   `cnpm i koa2 --save`
4. koa-router<br>
   koa-router是用于获取前端请求的接口，分发到不同的控制器下面处理不同的逻辑
   ```
      const Router = require("koa-router");
      let router = new Router({
          prefix: "/shop"
      });
      router.use("/user", user.routes());   // 前缀是/user的,进入user的路由
      app.use(router.routes());  // 加载路由到app上
      app.use(router.allowedMethods());  // 允许get.post请求
   ```
5. cookie<br>
   在我们的项目中最然没有显示的使用到cookie,
   但是只要前端向后端发起请求就会携带cookie
#### 五 MongoDB
1. 使用mongoose连接数据库
   ```
      const Mongoose = require("mongoose");
      // 为了一次性引入所有的schema
      const glob = require("glob");
      const path= require("path");

      let url= " mongodb://49.232.143.111:27017/shop";


      // 引入所有的schema数据模型
      exports.initSchema=()=>{
          glob.sync(path.resolve(__dirname,"./model", "*.js")).forEach(require);
      }

      exports.connect=()=>{
          Mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true});
          // 监听disconnected事件
          Mongoose.connection.on("disconnected",()=>{
              Mongoose.connect(url,{useNewUrlParser: true})
          })
          // 监听error事件
          Mongoose.connection.on("error",(err)=>{
              console.log(err);
              Mongoose.connect(url,{useNewUrlParser: true})
          });
          // 监听open事件
          Mongoose.connection.once("open", ()=>{
              console.log("mongodb connnected success");
          })
      }
   ```
2. 定义数据模型
   ```
      const Mongoose = require("mongoose");
      const bcrypt = require("bcryptjs");
      let Schema = Mongoose.Schema;

      // 定义用户信息的数据模型
      let UserSchema = new Schema({
          username: { type: String },
          pass: { type: String }
      })
      // 发布数据模型
      Mongoose.model("User", UserSchema);
   ```
3. 使用数据模型
   ```
      const Mongoose= require("mongoose");
      let User= Mongoose.model("User");
       // 实例化数据模型
       let newUser=new User({
           username: ctx.request.body.username,
           pass: ctx.request.body.pass
       });
   ```
#### 六 用户注册
1. 跨域<br>
   由于我们前端的项目是vue-cli框架是一个单独的项目端口号是8080， 
   后端使用的是koa2框架， 端口号是3333,
   当我们在前端向后端发起ajax请求的时候，由于浏览器的同源策略必然会导致跨域，
   为了解决跨域问题，我们在后端代码中使用了cors（跨域资源共享）这个插件，
   
   注意： 在cors参数配置中我们加上了credentials这个值得原因是
   为了能够在后端代码中接受cookie,不然由于cors的安全性原因，我们是接受不到cookie的，
   进而可能会导致session失效
   ```
      const cors = require("koa2-cors");
      let app = new Koa();
      // 解决跨域
      app.use(cors(
          {
              origin: ['http://localhost:8080'],
              credentials: true      // 注意需要证书
          }
      ));
   ```
2. 密码加盐加密<br>
   用于在注册或的时候，其密码是必然要进行加密的，
   我们使用的是 bcryptjs这个包专门用于处理密码的加盐加密；
   
   bcrypt中的genSalt方法是用于生成一个随机的10位的字符串作为盐，
   hash方法是把生成的盐和用户的密码作为参数生成一个加盐加密的密码字符串；
   ```
        bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            throw err;
        } else {
            bcrypt.hash(this.pass, salt, (err, hash) => {
                if (err) {
                    throw err;
                } else {
                    this.pass = hash;
                    next();
                }
            })
        }
      })
   ```
#### 七 用户登录
1. 密码加盐加密<br>
   用户登录的时候也需要进行密码的加盐加密，可上述注册时一样的流程
2. session<br>
   session用于暂时存储用户的登录状态，保存用户的基本信息；
   我们在配置cors参数的时候，必须要加上credentials这个参数，不然会出现session失效的问题，
   因为我们的服务端接收不到用户请求头参数中的cookie，
   于是也就接受不到cookie中的session-id这个参数，也就找不到对应存储的服务端session的值
3. Vuex<br>
   由于我们的项目中需要多次在多个页面中使用用户的信息，为了避免
   多个页面之间的相互传值，我们在把用户的基本信息存储在vuex中，
   但是要注意： 只要页面刷新，vuex中的值就会消失，所以说是暂时存在；
   ```
      Vue.use(Vuex)
      export default new Vuex.Store({
        state: {
          userInfo: {}
        },
        mutations: {
          changeUser(state, status){
            state.userInfo= status;
          }
        },
        actions: {
          changeUserAction({commit}, status){
            // 可以在这里执行异步操作， 然后使用commit 去改变数据状态
            commit("changeUser", status);
          }
        }
      })
   ```
#### 八 商品分类功能
1. Node.js读取JSON文件数据导入数据库<br>
   项目的数据来源于网络中的json文件，需要将这个json文件读取，
   然后写入到数据库中；
   ```
   let router = new Router();
   router.get("/addProduct", async (ctx) => {
       let Product = Mongoose.model("Product");
       fs.readFile("./data/product.json", "utf-8", (err, data) => {
           if (err) {
               throw err;
           } else {
               JSON.parse(data).map((item) => {
                   let product = new Product(item);
                   product.typeId = (Math.floor(Math.random() * 8) + 1) + "";
                   product.save().then((res) => {
                   }).catch((err) => {
                       console.log(err);
                   });
               });
           }
       })

       ctx.body = "";
   });
   ```
2. 上拉加载动态加载数据<br>
   出于页面的性能考虑，我们不能一次性把所有的数据
   都加载到页面上，可以一次加载十条数据，
   每一次上拉触底都会出发一个触底事件，我们可以在处理函数中接着加载另外十条，一直循环加载...
   ```
      router.get("/getProduct", async (ctx) => {
       let Product = Mongoose.model("Product");
       let start = parseInt(ctx.query.start);
       let length = parseInt(ctx.query.length);
       let typeId = ctx.query.typeId;

       await Product.find({ "typeId": typeId }).skip(start*length).limit(length).then((res) => {
           // console.log(res);
           ctx.body = {
               code: 200,
               data: res
           }
       }).catch((err) => {
           ctx.body = {
               code: 500,
               data: err
           }
           throw err;
       });
      });
   ```

#### 九 商品详情功能
1. vue-router传参方式<br>
   ```
   // params传参
   this.router.push("/path",{params:{name:"xiaowang"}})
   
   // 
   this.router.push({"name":"Footer",query:{}});
   ```
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





