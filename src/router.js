import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Catalogue from './views/Catalogue.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/cart',
      name:'cart',
      component:Cart
    },{
      path:'/catalogue',
      name:'catalogue',
      component:Catalogue
    },{
      path:'/profile',
      name:'profile',
      component:Profile
    }
  ]
})
