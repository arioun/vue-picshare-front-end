<template>
  <div>
    <el-form label-width="80px" class="re-dialog-form" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-row>
            <el-col :span="6">
            <el-select v-model="retype" placeholder="请选择" class="re-select">
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
            <el-form-item v-if="retype=='phone'" prop="phone">
              <el-input  class="rename" v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
            <el-form-item v-else-if="retype=='email'" prop="email"> 
            <el-input class="rename" v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          </el-col>        
        </el-row>
      
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
        <el-button type="primary" @click="register(retype,retype=='phone'?ruleForm.phone:ruleForm.email,ruleForm.checkPass)">立即注册</el-button>
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
    var validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.length<6){
          callback(new Error('密码不能少于6位'));
        }else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        }else if(value.length<6){
          callback(new Error('密码不能少于6位'));
        }
         else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

    return {
        rename:'',
        retype: "phone",
      options: [
        {
          value: "phone",
          label: "手机"
        },
        {
          value: "email",
          label: "邮箱"
        }
      ],
      ruleForm: {
          phone:'',
          email:'',
          pass: '',
          checkPass: ''
        },
        rules: {
          phone:[
            {validator: validatePhone, trigger: 'blur'}
          ],
          email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
          ],
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
    register(type,data,passwd){
      this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$emit("register",type,data,passwd);
          } else {
            return false;
          }
        });
      
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
