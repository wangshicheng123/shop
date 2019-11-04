import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: "未登录"
    }
  },
  mutations: {
    changeUser(state, status){
      state.userInfo.username= status;
    }
  },
  actions: {
    changeUserAction({commit}, status){
      // 可以在这里执行异步操作， 然后使用commit 去改变数据状态
      commit("changeUser", status);
    }
  }
})
