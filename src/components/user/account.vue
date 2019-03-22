<template>
  <div class="ac">
    <h2 class="ac-title">账号</h2>
    <h5 class="ac-title" >Email地址</h5>
    <el-input v-model="input1" :disabled="true" class="ac-input">
        <el-button slot="append" type="text" class="ac-input-btn">更改</el-button>
    </el-input>
    <br>
    <el-input  placeholder="输入要修改的邮箱" class="ac-input">
        <el-button slot="append" type="text" class="ac-input-btn">获取验证码</el-button>
    </el-input>
    <br>
    <el-input  placeholder="输入验证码" class="ac-input ac-yzm"></el-input>
    <br>
    <el-button class="ac-btn">确定</el-button>

    <h5 class="ac-title" >手机号码</h5>
    <el-input v-model="input2" :disabled="true" class="ac-input">
        <el-button slot="append" type="text" class="ac-input-btn">更改</el-button>
    </el-input>
    <br>
    <el-input  placeholder="输入要修改的手机号码" class="ac-input">
        <el-button slot="append" type="text" class="ac-input-btn">获取验证码</el-button>
    </el-input>
    <br>
    <el-input placeholder="输入验证码" class="ac-input ac-yzm"></el-input>
    <br>
    <el-button class="ac-btn">确定</el-button>
  </div>
</template>

<script>
export default {
  name: "account",
  data() {
      return {
          input1:'picshare@pic.com',
          input2:'13312341234'
      }
  },
};
</script>

<style>
.ac{
    background-color: #fff;
    border: #bbbbbb solid 1px;;
    width: 80%;
    margin: 30px auto;
}
.ac-title{
    margin-left: 15px;
}
.ac input{
    margin-left: 15px;
    padding-right: 0 !important; 
    background-color: #fff !important;
}
.ac-input{
    width: 500px !important;
    margin-top: 15px;
    
}
.ac-yzm{
    width: 486px !important;
}
.ac-input-btn{
    border: none;
}
.ac-input-btn span{
    color: #D1B200;
    font-size: 12px;
}
.el-input-group__append{
    border: none;
    background-color: #fff !important;
}
.ac-btn{
    margin:  10px 0 20px 15px !important;
    width: 15%;
    background-color: #D1B200 !important;
    color: #fff !important;
    border: #BBBBBB solid 1px !important;
}
</style>
