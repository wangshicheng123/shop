<template>
  <div>
    <!-- 组件必须局部页面进行引入 -->
    <van-tabs v-model="active">
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" v-model="loginUsername" required clearable placeholder="请输入用户名"></van-field>
          <van-field
            label="密码"
            type="password"
            v-model="loginPassword"
            required
            clearable
            placeholder="请输入密码"
          ></van-field>
          <van-button type="primary" @click="login" size="large">登录</van-button>
        </van-cell-group>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" v-model="registUsername" required clearable placeholder="请输入用户名"></van-field>
          <van-field
            label="密码"
            type="password"
            v-model="registPassword"
            required
            clearable
            placeholder="请输入密码"
          ></van-field>
          <van-button type="primary" @click="regist" size="large">注册</van-button>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Field, CellGroup, Cell } from "vant";
import axios from "axios";
import url from "../../service.config.js";
import {mapActions} from  "vuex";
export default {
  data() {
    return {
      active: 0,
      loginUsername: "",
      loginPassword: "",
      registUsername: "",
      registPassword: "",
      value: ""
    };
  },
  methods: {
    ...mapActions(["changeUserAction"]),
    login() {
      axios({
        method: "post",
        url: url.login,
        data: {
          username: this.loginUsername,
          pass: this.loginPassword
        }
      })
        .then(res => {
          if(res.data.code==200){
            this.$toast.success("登录成功");
            this.changeUserAction(res.data.data.username);
            new Promise((resolve,reject)=>{
              setTimeout(() => {
                resolve();
              }, 1000);
            }).then(()=>{
              this.$router.push("/");
            });
          }else{
            this.$toast.fail("登录失败,请重试");
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    regist() {
      axios({
        method: "post",
        url: url.regist,
        data: {
          username: this.registUsername,
          pass: this.registPassword
        }
      })
        .then(res => {
          console.log(res);
          if(res.data.code==200){
              this.$toast.success("注册成功")
              console.log(res.data);
          }else{
              this.$toast.fail("注册失败");
              console.log(res.data);
          }
        })
        .catch(res => {
            this.$toast.fail("注册失败");
            console.log(res.data);
        });
    }
  },
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  }
};
</script>

<style lang="sass">

</style>
