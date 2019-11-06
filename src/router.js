import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Catalogue from './views/Catalogue.vue'
import Profile from './views/Profile.vue'
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
      }
    },{
      path:'/cart',
      name:'cart',
      // component:Cart
      components: {
        default: Cart,
        "footer-bar": FooterBar
      }
    },{
      path:'/catalogue',
      name:'catalogue',
      // component:Catalogue
      components: {
        default: Catalogue,
        "footer-bar": FooterBar
      }
    },{
      path:'/profile',
      name:'profile',
      // component:Profile
      components:{
        default: Profile,
        "footer-bar": FooterBar
      }
    },{
      // path: "/detail/:id",
      path: '/detail',
      name: "detail",
      component: Detail
    }
  ]
})
