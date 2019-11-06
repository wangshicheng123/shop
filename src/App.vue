<template>
  <div id="app">
    <!-- 注意router-view的位置 -->
    <router-view></router-view>

    <!-- 控制某些组件可以在自己选择的页面进行使用 -->
    <router-view name="footer-bar"></router-view>
  </div>
</template>

<style lang="scss">

</style>
<script>
export default {
}
</script>>