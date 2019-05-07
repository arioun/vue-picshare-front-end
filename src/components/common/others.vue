<template>
  <div class="other">
    <div class="head" :style="{backgroundImage:'url('+bgurl+')'}">
      <div class="head-bg">
        <ul class="other-ul">
          <li class="other-tx">
            <img :src="txurl">
          </li>
          <li class="other-li2">
            <ul class="other-ul2">
              <li class="other-name" v-text="username"></li>
              <li>
                <ul class="other-ul3">
                  <li>
                      <span>关注&nbsp;{{follows}}</span>
                  </li>
                  <li>
                      <span>粉丝&nbsp;{{fans}}</span>
                  </li>
                  <li>
                      <el-button class="other-gz" size="mini" @click="follow(uid)">关注</el-button>
                  </li>
                </ul>
              </li>
              <li class="other-intr" v-text="introduction"></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <el-container>
      <el-header>
        <el-row type="flex" justify="center" class="other-head">
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" :class="['other-btn',flag1?'other-btn-act':'']">
            <el-button type="text" @click="show('mywork');showwork()">他的作品</el-button>
          </el-col>
          <el-col
            :xs="1"
            :sm="1"
            :md="1"
            :lg="1"
            :xl="1"
            :class="['other-btn','other-like',flag2?'other-btn-act':'']"
          >
            <el-button type="text" @click="show('mylike');showlike()">喜欢</el-button>
          </el-col>
          <el-col
            :xs="1"
            :sm="1"
            :md="1"
            :lg="1"
            :xl="1"
            :class="['other-btn','other-collection',collection?'other-btn-act':'']"
          >
            <el-button type="text" @click="show('mycollection');showcollection()">收藏</el-button>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" :class="['other-btn',flag3?'other-btn-act':'']">
            <el-button type="text" @click="show('myalbum');showalbum()">相册</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="myother-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "other",
  components: {},
  data() {
    return {
      comName: this.$route.path,
      flag1: true,
      flag2: false,
      flag3: false,
      flag5: false,
      collection: false,
      uid:this.$route.query.uid,
      username: "",
      txurl: "/img/tx6.27d6e020.jpg",
      bgurl:'http://188.131.192.194/head_images/U1wjUvsbuKkrlGwO5K2h339nJ2wf0WdnYBTDxBhf.jpeg',
      introduction: "做个自我介绍吧..",
      fans: '',
      follows: '',
      newalbum: false,
      alname:'',
    };
  },
  created() {
    this.getinfo()
    if (/work/gi.test(this.comName)) {
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
  },
  watch: {
    $route: function(to) {
      if (/work/gi.test(to.path)) {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = false;
      this.collection = false;
    } else if (/like/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = false;
      this.collection = false;
    } else if (/collection/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.collection = true;
    } else if (/detail/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.collection = false;
    } else if (/album/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.collection = false;
    }
    }
  },
  methods: {
    follow(uuid){
        this.$http.post('/api/addFocus',{uid:this.uid,uuid:uuid},{emulateJSON:true})
        .then(res=>{
            if (res.body.message=="关注成功") {
          this.$message({
              message: "关注成功",
              type: "success",
              customClass: "zIndex"
            });
        }else{
          this.$message({
              message: "您已关注",
              type: "warning",
              customClass: "zIndex"
            });
        }
        })
      },
    getinfo(){
      this.$http.post('/api/basicInfo',{uid:this.uid},{emulateJSON:true})
     .then(result=>{
       if (result.body[0].username) {
          this.username=result.body[0].username;
       }else{
          this.username='注册用户';
       }
       this.introduction=result.body[0].introduce;
       this.txurl=result.body[0].head_image;
       this.fans=result.body[0].fans;
       this.follows=result.body[0].follow;
     })
    },
    showalbum(){
      this.$router.push({path: "/community/others/album",query:{uid:this.uid}})
    },
    showwork(){
      this.$router.push({path: "/community/others/work",query:{my:false,uid:this.uid}})
    },
    showlike(){
      this.$router.push({path: "/community/others/like",query:{my:false,uid:this.uid}})
    },
    showcollection(){
      this.$router.push({path: "/community/others/collection",query:{my:false,uid:this.uid}})
    },
    show(data) {
      this.comName = data;
      if (/work/gi.test(this.comName)) {
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.collection = false;
      } else if (/like/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;
        this.flag4 = false;
        this.collection = false;
      } else if (/collection/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.collection = true;
      } else if (/detail/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.flag4 = false;
        this.collection = false;
      } else if (/album/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.flag4 = true;
        this.collection = false;
      }
    }
  }
};
</script>

<style>
.other {
  min-height: 600px;
  height: auto;
}
.head {
  height: 350px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.head-bg {
  height: 350px;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  overflow: hidden;
}
.other-ul {
  list-style: none;
  margin: 13% 0 0 0;
}
.other-ul li {
  color: #ffffff;
  text-align: center;
}
.other-gz{
  background-color: #41b93b!important;
  border: none;
}
.other-tx {
  width: 120px;
  height: 120px;
  display: inline-block;
}
.other-tx img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.other-li2 {
  display: inline-block;
  position: relative;
  top: -20px;
}
.other-btn-editfm {
  display: inline-block;
}
.other-ul2 {
  list-style: none;
  margin: 0;
  padding: 0;
}
.other-name {
  
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 15px;
}
.other-intr {
  margin-top: 15px;
  font-size: 13px;
}
.other-ul3 {
  margin: 0;
  list-style: none;
}
.other-ul3 span {
  color: #ffffff !important;
}
.other-ul3 li {
  display: inline;
  font-size: 14px;
}
.other-ul3 li:before {
  content: "/";
  color: #e0e0e0;
  font-size: 14px;
  margin: 0 10px;
}
.other-btn-editfm {
  float: right;
  margin-right: 50px;
  position: relative;
  bottom: -65px;
}
.other-btn-editfm span {
  color: #ffffff !important;
}
.other-head {
  border-bottom: #bbbbbb solid 1px;
}
.other-btn {
  text-align: center;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial,
    simsun, "宋体";
}
.other-like {
  margin: 0 40px 0 50px;
}
.other-collection {
  margin: 0 40px 0 0;
}
.other-head-btn {
  position: relative;
  right: -31%;
}

.other-btn span {
  font-size: 0.8rem;
  color: #000000;
}
.other-btn-act {
  border-bottom: #41b93b solid 2px;
}
.other-btn-act span {
  color: #41b93b;
}
.myother-main {
  min-height: 500px;
  height: auto;
  width: auto;
  background-color: #f9f9f9;
}
.myother-btn-al {
  margin-top: 8px;
  border: #009688 solid 1px !important;
}
.myother-btn-al span {
  color: #009688;
}
</style>

