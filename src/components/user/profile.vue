<template>
  <div class="pr">
    <h2 class="pr-title">基本信息</h2>
    <el-container>
      <el-main class="pr-title">
        <h5>用户名</h5>
        <el-input v-model="input" class="pr-input"></el-input>
        <h5 >性别</h5>
        <el-select v-model="value" placeholder="请选择">
          <el-option label="保密" value="1"></el-option>
          <el-option label="男" value="2"></el-option>
          <el-option label="女" value="3"></el-option>
        </el-select>
        <h5 >生日</h5>
        <div class="block">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
        <h5>简介</h5>
        <el-input v-model="input" class="pr-input"></el-input>
        <h5 >居住城市</h5>
        <v-distpicker  hide-area></v-distpicker>
        <el-button class="pr-btn">保&nbsp;存</el-button>
      </el-main>
      <el-aside width="300px" class="pr-aside">
        <img src="../../assets/tx6.jpg" class="pr-tx">
        <br>
        <el-button plain size="mini" class="pr-txbtn">更换头像</el-button>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker';
export default {
  name: "profile",
  components:{
      VDistpicker
  },
   data() {
      return {
          
      }
   }
};
</script>

<style>
.pr {
  background-color: #fff;
  border: #bbbbbb solid 1px;
  width: 80%;
  margin: 30px auto;
}
.pr-aside {
  text-align: center;
}
.pr-tx {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.pr-title{
    margin-left: 15px;
}
.pr-input input{
    width: 70%;
}
.pr-btn{
    width: 15%;
    margin: 50px 0 50px 0 !important;
    background-color: #D1B200 !important;
    color: #fff !important;
}
.pr-txbtn{
    margin-top: 20px !important;
    border: #C99A05 solid 1px !important;
    
}
.pr-txbtn button{
    border-radius: 5% !important;
}
.pr-txbtn span{
    color:#C99A05;
}
</style>
