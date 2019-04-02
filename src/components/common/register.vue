<template>
  <div>
    <el-form label-width="80px" class="re-dialog-form" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
      <el-form-item>
        <el-row>
          <el-col :span="5">
            <el-select v-model="retype" class="re-select">
              <el-option
                class="re-opt"
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="18">
            <el-input class="rename" v-model="rename" :placeholder="[retype=='手机'?'请输入手机号':'请输入邮箱号']"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
          <el-input
          v-model="yzm"
          autocomplete="off"
          placeholder="输入验证码"
          class="passwd"
        >
          <el-button type="text" slot="append">发送验证码</el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          v-model="ruleForm.pass" autocomplete="off" type="password"  placeholder="输入密码" class="re-passwd">
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          v-model="ruleForm.checkPass"
          type="password"
          autocomplete="off"
          placeholder="再次输入密码"
          class="re-passwd"
        >
        </el-input>
      </el-form-item>
    </el-form>
    <el-row type="flex" justify="center" class="login">
      <el-col :span="23">
        <el-button type="primary" @click="register">立即注册</el-button>
      </el-col>
    </el-row>
    <el-row class="zhuce-btn">
      <el-col :span="2">
        <el-button type="text" @click="tologin">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
        rename:'',
        phone:'',
        email:'',
      yzm:'',
      retype: "手机",
      options: [
        {
          value: "选项1",
          label: "手机"
        },
        {
          value: "选项2",
          label: "邮箱"
        }
      ],
      ruleForm: {
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    
  },
  methods: {
    tologin() {
      this.$emit("func", "login");
    },
    register(){
      this.$emit("register");
    }
  }
};
</script>
<style>
.el-select-dropdown {
  z-index: 9999 !important;
}
.re-select {
  width: 80px;
}
.re-dialog-form div {
  margin-left: 0 !important;
}
.re-dialog-form input {
    width: 22rem;
  margin: 0 auto;
  border-top: none;
  border-left: none;
  border-right:none;
  border-radius: 0;
}
.rename input{
    width: 17rem;
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
