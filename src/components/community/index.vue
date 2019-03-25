<template>
  <div>
    <el-container>
      <el-header>
        <el-row type="flex" justify="center" class="comhead">
          <el-col :span="2" :offset="0" :class="['communitybtn',flag1?'com-btn-act':'']">
            <router-link to="/community/recommend">
            <el-button type="text" @click="show('recommend')">推荐</el-button>
            </router-link>
          </el-col>
          <el-col :span="2" :offset="5" :class="['communitybtn',flag2?'com-btn-act':'']">
            <router-link to="/community/myfollow">
            <el-button type="text" @click="show('myfollow')">关注</el-button>
            </router-link>
          </el-col>
          <el-col :span="2" :offset="5" :class="['communitybtn',flag3?'com-btn-act':'']">
            <router-link to="/community/mycommunity">
              <el-button type="text" @click="show('mycommunity')">我的社区</el-button>
            </router-link>
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
import tuijian from "./tuijian.vue";
import guanzhu from "./guanzhu.vue";
import myshequ from "./myshequ.vue";

export default {
  name: "community",
  components: {
    tuijian,
    guanzhu,
    myshequ
  },
  data() {
    return {
      comName:this.$route.path,
      flag1:true,
      flag2:false,
      flag3:false
    };
  },
  methods: {
    show(data) {
      this.comName=data;
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
