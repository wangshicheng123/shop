import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'

Vue.config.productionTip = false

import { Button,NavBar,Icon,Swipe, SwipeItem,Lazyload, Tabbar, TabbarItem} from 'vant';
Vue.use(Button).use(NavBar).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload).use(Tabbar).use(TabbarItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
