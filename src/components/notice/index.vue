<template>
  <el-container>
    <el-header>
        <el-row type="flex" justify="center" class="no-head">
        <el-col :span="2" :offset="0" class="no-btn">
          <el-button type="text">消息</el-button>
        </el-col>
        <el-col :span="2" :offset="3" class="no-btn">
          <el-button type="text">通知</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="no-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import message from "./message.vue";
import notice from "./notice.vue";
export default {
  name: "noticeindex",
  data() {
    return {
      
    }
  },
  components: {
    message,
    notice
  }
};
</script>

<style>
.no-head{
  border-bottom: #BBBBBB solid 1px;
  height: 40px;
}
.no-btn{
    text-align: center;
    font-family: "Hiragino Sans GB","Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";
    
}
.no-btn span{
    font-size: 1rem;
    color: #000000;
}
.no-main{
  min-height: 500px;
  height: auto;
  background-color: #F9F9F9;
}
</style>

