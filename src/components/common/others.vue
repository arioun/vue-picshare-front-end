<template>
  <div class="sq">
    <div class="oth-head">
      <div class="head-bg">
        <ul class="sq-ul">
          <li class="sq-tx">
            <img :src="txurl">
          </li>
          <li class="sq-li2">
            <ul class="sq-ul2">
              <li class="sq-name" v-text="username"></li>
              <li>
                <ul class="sq-ul3">
                  <li>
                    <router-link to="/community/mycommunity/focus">
                      <el-button type="text" @click="show('focus')">关注&nbsp;{{focus}}</el-button>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/community/mycommunity/follows">
                      <el-button type="text" @click="show('follows')">粉丝&nbsp;{{follows}}</el-button>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="sq-intr" v-text="introduction"></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <el-container>
      <el-header>
        <el-row type="flex" justify="center" class="sq-head">
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" :class="['sq-btn',flag1?'sq-btn-act':'']">
            <el-button type="text" @click="show('work')">他的作品</el-button>
          </el-col>
          <el-col
            :xs="1"
            :sm="1"
            :md="1"
            :lg="1"
            :xl="1"
            :class="['sq-btn','sq-like',flag2?'sq-btn-act':'']"
          >
            <el-button type="text" @click="show('like')">喜欢</el-button>
          </el-col>
          <el-col
            :xs="1"
            :sm="1"
            :md="1"
            :lg="1"
            :xl="1"
            :class="['sq-btn','sq-collection',collection?'sq-btn-act':'']"
          >
            <el-button type="text" @click="show('collection')">收藏</el-button>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" :class="['sq-btn',flag3?'sq-btn-act':'']">
            <el-button type="text" @click="show('album')">相册</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="mysq-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "others",
  components: {},
  data() {
    return {
      comName: this.$route.path,
      flag1: true,
      flag2: false,
      flag3: false,
      collection: false,
      username: "Discovery",
      txurl: "/img/tx6.27d6e020.jpg",
      introduction: "做个自我介绍吧..",
      focus: 12,
      follows: 15,
      newalbum: false,
      form: {
        name: "",
        visible: ""
      },
      formLabelWidth1: "100px",
      formLabelWidth2: "100px"
    };
  },
  methods: {
    show(data) {
      this.comName = data;
      if (/focus/gi.test(this.comName)) {
        this.$router.push({ path: "/community/others/focus" });
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.collection = false;
      } else if (/follows/gi.test(this.comName)) {
        this.$router.push({ path: "/community/others/follows" });
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.collection = false;
      } else if (/work/gi.test(this.comName)) {
        this.$router.push({ path: "/community/others/work" });
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;
        this.collection = false;
      } else if (/like/gi.test(this.comName)) {
        this.$router.push({ path: "/community/others/like" });
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;
        this.collection = false;
      } else if (/collection/gi.test(this.comName)) {
        this.$router.push({ path: "/community/others/collection" });
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.collection = true;
      } else if (/detail/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.collection = false;
      } else if (/album/gi.test(this.comName)) {
        this.$router.push({ path: "/community/others/album" });
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.collection = false;
      }
    }
  },
  created() {
    if (/focus/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.collection = false;
    } else if (/follows/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.collection = false;
    } else if (/work/gi.test(this.comName)) {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = false;
      this.collection = false;
    } else if (/like/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = false;
      this.collection = false;
    } else if (/collection/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.collection = true;
    } else if (/detail/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.collection = false;
    } else if (/album/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.collection = false;
    }
  }
};
</script>

<style>
.sq {
  min-height: 600px;
  height: auto;
}
.oth-head {
  height: 350px;
  width: 100%;
  background: url("../../assets/shequ-bg.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.head-bg {
  height: 350px;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  overflow: hidden;
}
.sq-ul {
  list-style: none;
  margin: 13% 0 0 0;
}
.sq-ul li {
  color: #ffffff;
  text-align: center;
}
.sq-tx {
  width: 120px;
  height: 120px;
  display: inline-block;
}
.sq-tx img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.sq-li2 {
  display: inline-block;
  position: relative;
  top: -20px;
}
.sq-btn-editfm {
  display: inline-block;
}
.sq-ul2 {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sq-name {
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 15px;
}
.sq-intr {
  margin-top: 15px;
  font-size: 13px;
}
.sq-ul3 {
  margin: 0;
  list-style: none;
}
.sq-ul3 span {
  color: #ffffff !important;
}
.sq-ul3 li {
  display: inline;
  font-size: 14px;
}
.sq-ul3 li:before {
  content: "/";
  color: #e0e0e0;
  font-size: 14px;
  margin: 0 10px;
}
.sq-btn-editfm {
  float: right;
  margin-right: 50px;
  position: relative;
  bottom: -65px;
}
.sq-btn-editfm span {
  color: #ffffff !important;
}
.sq-head {
  border-bottom: #bbbbbb solid 1px;
}
.sq-btn {
  text-align: center;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial,
    simsun, "宋体";
}
.sq-like {
  margin: 0 40px 0 50px;
}
.sq-collection {
  margin: 0 40px 0 0;
}
.sq-head-btn {
  position: relative;
  right: -31%;
}

.sq-btn span {
  font-size: 0.8rem;
  color: #000000;
}
.sq-btn-act {
  border-bottom: #41b93b solid 2px;
}
.sq-btn-act span {
  color: #41b93b;
}
.mysq-main {
  min-height: 500px;
  height: auto;
  background-color: #f9f9f9;
}
.mysq-btn-al {
  margin-top: 8px;
  border: #009688 solid 1px !important;
}
.mysq-btn-al span {
  color: #009688;
}
</style>

