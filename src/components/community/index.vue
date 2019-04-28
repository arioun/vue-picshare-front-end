<template>
  <div>
    <el-container>
      <el-header>
        <el-row type="flex" justify="center" class="comhead">
          <el-col :span="2" :offset="0" :class="['communitybtn',flag1?'com-btn-act':'']">
            <el-button type="text" @click="show('recommend')">推荐</el-button>
          </el-col>
          <el-col :span="2" :offset="5" :class="['communitybtn',flag2?'com-btn-act':'']">
            <el-button type="text" @click="show('myfollow')">关注</el-button>
          </el-col>
          <el-col :span="2" :offset="5" :class="['communitybtn',flag3?'com-btn-act':'']">
              <el-button type="text" @click="show('mycommunity')">我的社区</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "community",
  components: {
  },
  data() {
    return {
      comName:this.$route.path,
      flag1:true,
      flag2:false,
      flag3:false,
      uid:localStorage.getItem('uid')
    };
  },
  methods: {
    showsq(){
      this.$router.push({path: '/community/mycommunity',query:{my:true,uid:this.uid}});
    },
    show(data) {
      this.comName=data;
      if (/recommend/gi.test(this.comName)) {
      this.$router.push({path:'/community/recommend'});
      this.flag1=true,
      this.flag2=false,
      this.flag3=false
    }else if(/myfollow/gi.test(this.comName)){
      if (this.uid) {
        this.$router.push({path:'/community/myfollow'});
        this.flag1=false,
        this.flag2=true,
        this.flag3=false
      }else{
        this.$message({
                message: "您还未登录",
                type: "warning",
                customClass: "zIndex"
              });
      }
    }
    else if(/mycommunity/gi.test(this.comName)){
      if (this.uid) {
        this.showsq();
        this.flag1=false,
        this.flag2=false,
        this.flag3=true
      }else{
        this.$message({
                message: "您还未登录",
                type: "warning",
                customClass: "zIndex"
              });
      }
    }
    }
  },
  created() {
    if (/recommend/gi.test(this.comName)) {
      this.flag1=true,
      this.flag2=false,
      this.flag3=false
    }else if(/myfollow/gi.test(this.comName)){
      this.flag1=false,
      this.flag2=true,
      this.flag3=false
    }
    else if(/mycommunity/gi.test(this.comName)){
      this.flag1=false,
      this.flag2=false,
      this.flag3=true
    }
  }
};
</script>

<style>
.comhead {
  border-bottom: #bbbbbb solid 1px;
  height: 50px;
}
.communitybtn {
  text-align: center;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial,
    simsun, "宋体";
  margin-top: 5px;
}
.communitybtn span {
  font-size: 1rem;
  color: #000000;
}
.com-btn-act{
  border-bottom: #41B93B solid 2px;
}
.com-btn-act span{
  color: #41B93B;
}
</style>
