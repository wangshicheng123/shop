import Vue from 'vue'
import Router from 'vue-router'
const Home= ()=> import("@/views/Home.vue")
const Cart=()=>import("@/views/Cart.vue")
const Catalogue =()=>import("@/views/Catalogue.vue")
const Profile= ()=>import("@/views/Profile.vue")
import Detail from "./views/Detail.vue"
import FooterBar from "@/components/FooterBar.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      components: {
        default: Home,
        "footer-bar": FooterBar
      },
      meta: {keepAlive: true}
    },{
      path:'/cart',
      name:'cart',
      // component:Cart
      components: {
        default: Cart,
        "footer-bar": FooterBar
      },
      meta: {keepAlive: true}
    },{
      path:'/catalogue',
      name:'catalogue',
      // component:Catalogue
      components: {
        default: Catalogue,
        "footer-bar": FooterBar
      },
      meta: {keepAlive: true}
    },{
      path:'/profile',
      name:'profile',
      // component:Profile
      components:{
        default: Profile,
        "footer-bar": FooterBar
      },
      meta: {keepAlive: false}
    },{
      // path: "/detail/:id",
      path: '/detail',
      name: "detail",
      component: Detail,
      meta: {keepAlive: true}
    }
  ]
})
