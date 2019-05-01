<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="center" class="comhead">
        <el-col :span="2" :offset="0" :class="['userbtn',flag1?'user-btn-active':'']">
          <el-button type="text" @click="show('/profile')">资料</el-button>
        </el-col>
        <el-col :span="2" :offset="3" :class="['userbtn',flag2?'user-btn-active':'']">
          <el-button type="text" @click="show('/account')">账号和密码</el-button>
        </el-col>
       <!-- <el-col :span="2" :offset="3" :class="['userbtn',flag3?'user-btn-active':'']">
          <el-button type="text" @click="show('/setting')">设置</el-button>
        </el-col>-->
      </el-row>
    </el-header>
    <el-main class="user-main">
        <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      flag1:false,
      flag2:false,
      flag3:false,
      comName:'/profile'
    }
  },
  methods: {
    show(data){
      this.comName=data;
      if (this.comName == "/profile") {
        this.$router.push({path:'/user/profile'});
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;
      } else if (this.comName == "/account") {
        this.$router.push({path:'/user/account'});
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;
      } else if (this.comName == "/setting") {
        this.$router.push({path:'/user/setting'});
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
      } 
    },
  },
  created () {
    this.comName = this.$route.path;
    if (/profile/g.test(this.comName)) {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = false;
    } else if (/account/g.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = false;
    } else if (/setting/g.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
    }
  },
  
};
</script>

<style>
.userbtn{
    text-align: center;
    font-family: "Hiragino Sans GB","Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";
    margin-top: 5px;
}
.userbtn span{
    font-size: 1rem;
    color: #000000;
}
.user-main{
    background-color: #F9F9F9;
}
.user-btn-active{
  border-bottom: 2px solid #C99A05;
}
</style>
