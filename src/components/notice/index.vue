<template>
  <el-container>
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
      comName:'inform',
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

