<template>
  <div>
    <van-nav-bar title="商品分类" class="type-title"></van-nav-bar>
    <van-row>
      <van-col span="8" style="position: relative;">
        <div>
          <van-sidebar v-model="activeKey" class="cate-list">
            <van-sidebar-item
              @click="changeType(item.typeId)"
              class="cate-list-item"
              :title="item.typeName"
              v-for="(item, index) in typeList"
              :key="index"
            />
          </van-sidebar>
        </div>
      </van-col>
      <van-col span="16">
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
          <van-list
            class="product-list"
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell @click="goDetail(item._id)" v-for="(item,index) in productrList" :key="index" class="product-list-item">
              <img :src="item.img" alt />
              <div class="product-list-item-name">{{item.name}}</div>
              <div class="product-list-item-price">￥{{item.price}}</div>
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import url from "../../service.config.js";
import axios from "axios";
export default {
  data() {
    return {
      activeKey: 0,
      typeList: [],
      loading: false,
      finished: false,
      productrList: [],
      length: 10, // 每次加载的数据条数
      start: 0, // 默认从第一条数据开始
      typeId: "1"
    };
  },
  created() {
    axios({
      url: url.getTypeList
    }).then(res => {
      this.typeList = res.data.data;
    });
    this.changeType(this.typeId);
  },
  methods: {
    getProductList() {
      axios({
        url: url.getProduct,
        method: "get",
        params: {
          typeId: this.typeId,
          length: this.length,
          start: this.start
        }
      }).then(res => {
        if (res.data.code == 200) {
          console.log(res.data);
          this.productrList.push(...res.data.data);
          if (res.data.data.length < 10) {
            this.finished = true;
          }
          this.loading = false;
        } else {
          this.loading = false;
        }
      });
    },
    changeType(typeId) {
      this.loading = true;
      this.productrList = [];
      this.typeId = typeId;
      this.finished = false;
      this.getProductList();
    },
    onLoad() {
      setTimeout(() => {
        this.start++;
        this.getProductList();
      }, 2000);
    },
    onRefresh() {
      console.log("onrefresh");
      this.productrList = [];
      this.finished = false;
      this.start = 0;
      this.getProductList();
    },
    goDetail(id){
      // console.log(item)

      // 路由传递参数， 页面刷新也不会丢失
      // this.$router.push(`/detail/${id}`);

      // name传递参数，页面刷新数据会丢失
      // this.$router.push({
      //   name: "detail",
      //   params: {id: id}
      // });

      // path传递参数，页面刷新数据不会丢失
      this.$router.push({
        path: "/detail",
        query: {id: id}
      });
    }
  }
};
</script>

<style lang="scss">
.type-title {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 1rem;
}
.cate-list {
  position: fixed;
  top: 1rem;
  left: 0px;
  width: 2.2rem;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-bottom: 1rem;
  &-item {
    text-align: center;
  }
  height: 8.5rem;
}
.product-list {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  &-item {
    width: 45%;
    padding: 0.2rem 0.1rem;
    img {
      width: 1.8rem;
      height: 1.8rem;
    }
    &-name {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
