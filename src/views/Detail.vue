<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="clickLeftHander"></van-nav-bar>
    <div class="product">
      <img :src="productInfo.img" alt />
      <div class="product-name">{{productInfo.name}}</div>
      <div class="product-price">￥{{productInfo.price}}</div>
      <div class="product-compony">公司： {{productInfo.company}}</div>
      <div class="product-city">城市：{{productInfo.city? productInfo.city:"未知"}}</div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"/>
      <van-goods-action-icon icon="cart-o" text="购物车"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button type="danger" text="立即购买"/>
    </van-goods-action>
  </div>
</template>

<script>
import axios from "axios";
import url from "../../service.config.js";
import {mapState} from "vuex";
export default {
  data() {
    return {
      productInfo: {}
    };
  },
  computed: {
      ...mapState(["userInfo"])
  },
  methods: {
    clickLeftHander() {
      this.$router.go(-1);
    },
    addCart(){
        if(JSON.stringify(this.userInfo)=="{}"){
            this.$router.push("/profile");
        }else{
          console.log(this.userInfo);
            axios({
                url: url.addCart,
                method: "get",
                params: {
                    userId: this.userInfo._id,
                    productId: this.productInfo._id
                }
            }).then((res)=>{
                if(res.data.code==200){
                    this.$toast.success("加入购物车成功");
                }
            }).catch((err)=>{
                this.$$toast.fail("加入购物车失败");
            });
        }
    }
  },
  created() {
    this.id = this.$route.query.id;
    axios({
      url: url.getProductDetail,
      method: "get",
      params: {
        id: this.$route.query.id
      }
    }).then(res => {
      if (res.data.code == 200) {
        this.productInfo = res.data.data;
      } else {
        this.$toast.fail("失败");
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.product {
  padding: 0.1rem;
  img {
    width: 100%;
    height: 5rem;
  }
  &-name {
    padding: 0.2rem;
    font-weight: bolder;
  }
  &-price {
    color: #ff0036;
    font-size: 0.4rem;
  }
}
</style>