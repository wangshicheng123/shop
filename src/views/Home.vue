<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon slot="right" @click="toLogin">{{userInfo.username}}</van-icon>
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 热门商品 -->
    <p class="hot-title">热门商品</p>
    <swiper :options="swiperOption" class="hot-swiper">
      <swiper-slide v-for="(item,index) in hotSwiper" :key="index">
        <div class="hot-swiper-content">
          <img :src="item.imgsrc" alt />
          <div>{{item.name}}</div>
          <div>￥ {{item.price}}</div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 推荐商品列表 -->
    <p class="recommand-title">推荐商品</p>
    <div class="goods-list">
      <div class="goods-list-item" v-for="(item,index) in recommandList" :key="index">
        <img :src="item.imgsrc" alt />
        <div>{{item.name}}</div>
        <div>￥ {{item.price}}</div>
      </div>
    </div>
  </div>
</template>



<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import data from "@/mock/mock.js";
import axios from "axios";
import url from "../../service.config.js"
import {mapState} from "vuex";
export default {
  data() {
    return {
      recommandList: [],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      swiperOption: {
        slidesPerView: 3
      },
      hotSwiper: [],
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    axios.get(url.recommandList).then(res => {
      this.recommandList = res.data.list;
      this.hotSwiper = res.data.list;
    });
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods: {
    toLogin(){
      this.$router.push("/profile");
    }
  }
};
</script>

<style lang="scss" scoped>
.hot-title {
  margin: 0.2rem;
}
.hot-swiper {
  height: 3rem;
  width: 100%;
  &-content {
    margin: 0px 3px;
    text-align: center;
    img {
      height: 1rem;
      width: 1rem;
    }
  }
}
.recommand-title {
  text-align: center;
}
.goods-list {
  margin: 0.2rem 0.1rem 1rem 0.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &-item {
    width: 45%;
    // flex: 1
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>