import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'

Vue.config.productionTip = false

import {PullRefresh ,Row, Col,List,Sidebar, SidebarItem,Toast ,Field, CellGroup, Cell,Tab, Tabs, Button,NavBar,Icon,Swipe, SwipeItem,Lazyload, Tabbar, TabbarItem} from 'vant';
Vue.use(PullRefresh).use(Row).use(Col).use(List).use(SidebarItem).use(Sidebar).use(Toast).use(Field).use(CellGroup).use(Cell).use(Tab).use(Tabs).use(Button).use(NavBar).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload).use(Tabbar).use(TabbarItem);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
