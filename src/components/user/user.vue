<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="center" class="comhead">
        <el-col :span="2" :offset="0" class="userbtn">
          <el-button type="text">资料</el-button>
        </el-col>
        <el-col :span="2" :offset="3" class="userbtn">
          <el-button type="text">账号和密码</el-button>
        </el-col>
        <el-col :span="2" :offset="3" class="userbtn">
          <el-button type="text">设置</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="user-main">
        <setting></setting>
    </el-main>
  </el-container>
</template>

<script>
import profile from "./profile.vue";
import account from "./account.vue";
import setting from "./setting.vue";
export default {
  name: "user",
  components: {
    profile,
    account,
    setting
  }
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
</style>
