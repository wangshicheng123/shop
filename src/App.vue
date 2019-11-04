<template>
  <div id="app">
    <!-- 底部栏 -->
    <van-tabbar v-model="active">
      <!-- 不允许导航到当前路由位置 -->
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/catalogue">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>

    <!-- 注意router-view的位置 -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

</style>
<script>
export default {
  data(){
    return {
      active: 0
    }
  }
}
</script>>