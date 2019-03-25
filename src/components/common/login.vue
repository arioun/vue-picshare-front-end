<template>
  <div>
    <el-form label-width="80px" class="head-dialog-form">
      <el-form-item>
        <el-input v-model="name" placeholder="手机号/邮箱/用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="password"
          type="password"
          autocomplete="off"
          placeholder="输入密码"
          class="passwd"
        >
          <el-button type="text" slot="append">忘记密码?</el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <el-row type="flex" justify="center" class="login">
      <el-col :span="23">
        <el-button type="primary">登录</el-button>
      </el-col>
    </el-row>
    <el-row class="zhuce-btn">
      <el-col :span="4">
        <el-button type="text" @click="register">立即注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    register() {
      this.$emit("func", "register");
    }
  }
};
</script>
<style>
.head-dialog-form div{
  margin-left: 0 !important;
}
.head-dialog-form input{
  width: 22rem;
  margin: 0 auto;
  border-top: none;
  border-left: none;
  border-right:none;
  border-radius: 0;
}
.passwd {
  clear: both;
}
.passwd input {
  float: left;
  width: 22rem;
  margin-right: 0;
}
.passwd div {
  position: relative;
  left: -4rem;
  border-radius: 0;
  border: none;
  box-shadow: none;
  color: #85888a !important;
  background-color: rgba(0, 0, 0, 0) !important;
}
.passwd button {
  background-color: rgba(0, 0, 0, 0) !important;
}
.passwd span {
  font-size: 12px !important;
  color: #85888a !important;
}
.login {
  margin-top: 50px;
}
.login button {
  width: 22rem;
}
.login span {
  color: #fff;
}
.zhuce-btn {
  margin-top: 10px;
}
</style>