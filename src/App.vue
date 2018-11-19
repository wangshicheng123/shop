<template>
  <div id="app">
    <router-view></router-view>
    <ol class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/catalogue">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ol>
  </div>
</template>

<style lang="scss">
  .footer-bar{
    display:flex;
    height:50px;
    position:fixed;
    bottom:0;
    width:100%;
    background:#ddd;
  }
  .footer-bar-item{
    flex-grow: 1;
    text-align:center;
    line-height:50px;
    border-right:1px red solid;
  }
</style>
