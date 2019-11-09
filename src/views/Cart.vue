<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="cart">
      <van-card
        v-for="(item,index) in productList"
        :key="index"
        :price="item.productId.price"
        :desc="item.productId.company"
        :title="item.productId.name"
      >
        <div slot="thumb" class="cart-img">
          <img :src="item.productId.img" alt />
        </div>
        <div slot="footer">
          <van-button size="mini" @click="deleCart(item._id,index)">删除</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import axios from "axios";
import url from "../../service.config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      productList: []
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice(){
        return (this.productList.reduce((total,item)=>{
            if(item.productId.price=="面议"){item.productId.price=5000}
            return total+parseInt(item.productId.price);
        },0))*100  
    }
  }, 

  created() {
    if (JSON.stringify(this.userInfo) == "{}") {
      this.$router.push("/profile");
    } else {
      axios({
        url: url.getCart,
        method: "get",
        params: { userId: this.userInfo._id }
      }).then(res => {
        if (res.data.code == 200) {
          this.productList=res.data.data;
          // for (let item of res.data.data) {
            // this.productList.push(item.productId);
          // }
        } else {
          this.$toast.fail("购物车暂无数据");
        }
      });
    }
  },
  methods: {
    deleCart(_id, index) {
        axios({
            url: url.deleCart,
            method: "get",
            params: {_id: _id}
        }).then((res)=>{
            if(res.data.code==200){
                this.productList.splice(index,1)
            }
        });
    },
    onSubmit(){

    }
  }
};
</script>

<style lang="scss">
.cart {
  margin-bottom: 2rem;
  &-img {
    img {
      width: 1.8rem;
      height: 2rem;
    }
  }
}
.submit-bar{
    margin-bottom: 1rem;
}
</style>
