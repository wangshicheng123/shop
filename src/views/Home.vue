<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon slot="right" @click="toLogin">{{userInfo.username ? userInfo.username: "未登录"}}</van-icon>
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="van-swiper">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="van-swiper-item">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 热门商品 -->
    <p class="hot-title">热门商品</p>
    <swiper :options="swiperOption" class="hot-swiper">
      <swiper-slide v-for="(item,index) in hotSwiper" :key="index">
        <div class="hot-swiper-content">
          <img :src="item.img" alt />
          <div class="hot-swiper-content-name">{{item.name}}</div>
          <div class="hot-swiper-content-price">￥ {{item.price}}</div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 推荐商品列表 -->
    <p class="recommand-title">推荐商品</p>
    <div class="goods-list">
      <div class="goods-list-item" v-for="(item,index) in recommandList" :key="index">
        <img :src="item.imgsrc" alt />
        <div class="goods-list-item-name">{{item.name}}</div>
        <div class="goods-list-item-price">￥ {{item.price}}</div>
      </div>
    </div>
  </div>
</template>



<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import data from "@/mock/mock.js";
import axios from "axios";
import url from "../../service.config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      recommandList: [],
      images: [
        "http://img49.nongjx.com/2/20180426/636603348531851190929_198_170_5.png",
        "http://img57.nongjx.com/2/20171122/636469555088384823669_198_170_5.jpg",
        "http://img42.nongjx.com/2/2008/20071030161017287_198_170_5.jpg"
      ],
      swiperOption: {
        slidesPerView: 3
      },
      hotSwiper: [
        {
          name: "  多功能韭菜收割机 玉米青储机 多用割晒机",
          img:
            "http://img48.nongjx.com/2/20180927/636736616039290776714_198_170_5.jpg",
          price: "3160",
          company: "曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "  菜园小型除草机 四冲汽油割灌机",
          img:
            "http://img48.nongjx.com/2/20180920/636730488779461000136_198_170_5.jpg",
          price: "920",
          company: "曲阜润丰机械有限公司",
          city: "济宁市"
        },
        {
          name: "  优质秸秆打捆机厂家",
          img:
            "http://img47.nongjx.com/2/20180606/636639161243538140545_198_170_5.jpg",
          price: "面议",
          company: "乐陵春益农牧机械有限公",
          city: "德州市"
        },
        {
          name: "  青贮饲料包膜机 秸秆圆捆机 打捆包裹机",
          img:
            "http://img48.nongjx.com/2/20180308/636561201781924899338_198_170_5.jpg",
          price: "21600",
          company: "曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "  新式花生摘果机 大型鲜花生打果子机价格",
          img:
            "http://img48.nongjx.com/2/20180823/636706398801075832166_198_170_5.gif",
          price: "2200",
          company: "曲阜市佳鑫机械设备有限",
          city: "济宁市"
        },
        {
          name: "  自走式剪草机 农场青草收割机哪里有卖",
          img:
            "http://img49.nongjx.com/2/20180826/636708991496686946418_198_170_5.jpg",
          price: "860",
          company: "曲阜市启航机械有限公司",
          city: "曲阜市"
        },
        {
          name: "  背负式除草机 菜园松土割草机 汽油打草机",
          img:
            "http://img49.nongjx.com/2/20180802/636688146445938229946_198_170_5.jpg",
          price: "1000",
          company: "曲阜市富兴机械设备有限",
          city: "曲阜市"
        },
        {
          name: "  新型稻麦收割机 多用途谷物割倒机型号",
          img:
            "http://img49.nongjx.com/2/20180703/636662077787860849152_198_170_5.jpg",
          price: "1",
          company: "曲阜中泰机械有限公司",
          city: "曲阜市"
        },
        {
          name: "  自动捡拾捆草机，四轮后悬挂麦秆打捆机",
          img:
            "http://img56.nongjx.com/2/20141128/635527853899357490893_198_170_5.jpg",
          price: "17000",
          company: "曲阜兴运输送机械设备有",
          city: "济宁市"
        },
        {
          name: "  辽宁不破皮果子分离机 花生收获摘果机",
          img:
            "http://img62.nongjx.com/2/20171123/636470399184027399388_198_170_5.jpg",
          price: "2680",
          company: "曲阜市众发机械设备有限",
          city: "济宁市"
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    axios.get(url.recommandList).then(res => {
      this.recommandList = res.data.list;
    });
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    toLogin() {
      this.$router.push("/profile");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-swiper{
  &-item{
    img{
      width: 100%;
      height: 4rem;
    }
  }
}
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
      height: 1.5rem;
      width: 1.5rem;
    }
    &-name{
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      // line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
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
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>