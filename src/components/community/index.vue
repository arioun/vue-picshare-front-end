<template>
  <div>
    <el-container>
      <el-header>
        <el-row type="flex" justify="center" class="comhead">
          <el-col :span="2" :offset="0" :class="['communitybtn',flag1?'com-btn-act':'']">
            <el-button type="text" @click="show('tuijian')"  >推荐</el-button>
          </el-col>
          <el-col :span="2" :offset="5" :class="['communitybtn',flag2?'com-btn-act':'']">
            <el-button type="text" @click="show('guanzhu')">关注</el-button>
          </el-col>
          <el-col :span="2" :offset="5" :class="['communitybtn',flag3?'com-btn-act':'']">
            <el-button type="text" @click="show('shequ')">我的社区</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <component :is="comName"></component>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import tuijian from "./tuijian.vue";
import guanzhu from "./guanzhu.vue";
import shequ from "./myshequ.vue";

export default {
  name: "community",
  components: {
    tuijian,
    guanzhu,
    shequ
  },
  data() {
    return {
      comName: "tuijian",
      flag1:true,
      flag2:false,
      flag3:false
    };
  },
  methods: {
    getInfo() {
      this.$http.get("link").then(result => {
        //code
      });
    },
    postInfo() {
      this.$http.post("link", {}, { emulateJSON: true }).then(result => {
        //code
      });
    },
    jsonpInfo() {
      this.$http.jsonp("link").then(result => {
        //code
      });
    },
    show(data) {
      this.comName = data;
    }
  },
  updated() {
    if (this.comName == "tuijian") {
      this.flag1=true,
      this.flag2=false,
      this.flag3=false
    }else if(this.comName == "guanzhu"){
      this.flag1=false,
      this.flag2=true,
      this.flag3=false
    }
    else if(this.comName == "shequ"){
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
