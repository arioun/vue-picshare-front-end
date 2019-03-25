<template>
  <el-container>
    <el-header>
        <el-row type="flex" justify="center" class="no-head">
        <el-col :span="2" :offset="0" :class="['no-btn',flag1?'no-btn-act':'']">
          <router-link :to="{name:'message'}">
          <el-button type="text" @click="show('message')">消息</el-button>
          </router-link>
        </el-col>
        <el-col :span="2" :offset="3" :class="['no-btn',flag2?'no-btn-act':'']">
          <router-link :to="{name:'inform'}">
          <el-button type="text" @click="show('inform')">通知</el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="no-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "noticeindex",
  data() {
    return {
      comName:'message',
      flag1:true,
      flag2:false
    }
  },
  methods: {
    show(data){
      this.comName=data;
      if (/message/g.test(this.comName)) {
        this.flag1=true;
        this.flag2=false;
      } else {
        this.flag1=false;
        this.flag2=true;
      }
    }
  },
  created() {
    this.comName=this.$route.path;
    if (/message/g.test(this.comName)) {
        this.flag1=true;
        this.flag2=false;
      } else if(/inform/g.test(this.comName)){
        this.flag1=false;
        this.flag2=true;
      }
  },
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
.no-btn-act{
  border-bottom: #41B93B solid 2px;
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

