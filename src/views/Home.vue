<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon slot="right" @click="toLogin">{{userInfo.username ? userInfo.username: "未登录"}}</van-icon>
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="van-swiper">
      <van-swipe-item
        v-for="(item, index) in images"
        :key="index"
        class="van-swiper-item"
        @click="goDetail(item._id)"
      >
        <img :src="item.img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 热门商品 -->
    <p class="hot-title">热门商品</p>
    <swiper :options="swiperOption" class="hot-swiper">
      <swiper-slide v-for="(item,index) in hotSwiper" :key="index">
        <div class="hot-swiper-content" @click="goDetail(item._id)">
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
        {
          _id: "5dc1042b879061372471be76",
          name: "  摘棉机",
          img: "http://img42.nongjx.com/2/2008/20071030161017287_198_170_5.jpg",
          price: "面议",
          company: "约翰迪尔（中国）投资有",
          city: null,
          typeId: "1"
        },
        {
          _id: "5dc1042b879061372471be77",
          name: "  玉米收获机",
          img: "http://img42.nongjx.com/2/2008/2007810231158117_198_170_5.jpg",
          price: "面议",
          company: "山东时风（集团）聊城农",
          city: null,
          typeId: "3"
        },
        {
          _id: "5dc1042b879061372471be78",
          name: "  优质玉米秸秆自动捡拾打捆机",
          img:
            "http://img57.nongjx.com/2/20131107/635194288343054809839_198_170_5.jpg",
          price: "面议",
          company: "沈阳方科机械制造有限公",
          city: "沈阳市",
          typeId: "4"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      },
      hotSwiper: [
        {
          _id: "5dc1042b879061372471be6f",
          name: "  7250约翰迪尔",
          img:
            "http://img42.nongjx.com/2/20091222/633970900718437500_198_170_5.jpg",
          price: "面议",
          company: "北京市德乐机械有限公司",
          city: "北京市",
          typeId: "6"
        },
        {
          _id: "5dc1042b879061372471be70",
          name: "  优质4LZ-8型自走式谷物联合收割机",
          img:
            "http://img49.nongjx.com/2/20180408/636588011697775992997_198_170_5.png",
          price: "面议",
          company: "新疆机械研究院股份有限",
          city: "乌鲁木齐市",
          typeId: "4"
        },
        {
          _id: "5dc1042b879061372471be71",
          name: "  工农12K-700型马玲薯收获机",
          img:
            "http://img50.nongjx.com/2/20181025/636760630053845958277_198_170_5.jpg",
          price: "面议",
          company: "费县华源农业装备工贸有",
          city: "临沂市",
          typeId: "7"
        },
        {
          _id: "5dc1042b879061372471be72",
          name: "  玉米籽粒机",
          img:
            "http://img49.nongjx.com/2/20180426/636603348531851190929_198_170_5.png",
          price: "面议",
          company: "河北中农博远农业装备有",
          city: "石家庄市",
          typeId: "3"
        },
        {
          _id: "5dc1042b879061372471be73",
          name: "  4LZ-2.0 自走式谷物联合收割机",
          img:
            "http://img61.nongjx.com/2/20170321/636257194316398458936_198_170_5.jpg",
          price: "面议",
          company: "爱科（中国）投资有限公",
          city: "常州市"
        },
        {
          _id: "5dc1042b879061372471be74",
          name: "  VB-VBP3100系列可变腔圆捆打捆机",
          img:
            "http://img57.nongjx.com/2/20171122/636469555088384823669_198_170_5.jpg",
          price: "面议",
          company: "法国库恩公司",
          city: "北京市",
          typeId: "5"
        },
        {
          _id: "5dc1042b879061372471be75",
          name: "  4YZB-7七行玉米收获机",
          img:
            "http://img61.nongjx.com/2/20170607/636324420018937118413_198_170_5.png",
          price: "面议",
          company: "常州东风农机集团有限公",
          city: "常州市",
          typeId: "4"
        },
        {
          _id: "5dc1042b879061372471be76",
          name: "  摘棉机",
          img: "http://img42.nongjx.com/2/2008/20071030161017287_198_170_5.jpg",
          price: "面议",
          company: "约翰迪尔（中国）投资有",
          city: null,
          typeId: "1"
        },
        {
          _id: "5dc1042b879061372471be77",
          name: "  玉米收获机",
          img: "http://img42.nongjx.com/2/2008/2007810231158117_198_170_5.jpg",
          price: "面议",
          company: "山东时风（集团）聊城农",
          city: null,
          typeId: "3"
        },
        {
          _id: "5dc1042b879061372471be78",
          name: "  优质玉米秸秆自动捡拾打捆机",
          img:
            "http://img57.nongjx.com/2/20131107/635194288343054809839_198_170_5.jpg",
          price: "面议",
          company: "沈阳方科机械制造有限公",
          city: "沈阳市",
          typeId: "4"
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
    },
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: { id: id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.van-swiper {
  &-item {
    img {
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
    &-name {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      // line-clamp: 2;
      -webkit-line-clamp: 1;
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