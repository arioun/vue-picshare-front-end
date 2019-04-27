<template>
  <div class="like">
    <el-row type="flex" justify="center">
      <el-col :span="23">
        <waterfall class="like-div" :col="col" :width="itemWidth" :gutterWidth="gutterWidth" :data="imgs" @loadmore="loadmore"
      @scroll="scroll">
      <template>
        <div class="like-item" v-for="img in imgs" :key="img[0].pid">
          <div class="like-img">
            <img :src="img[0].position">
          </div>
          <div class="like-shadow">
          <div class="like-det">
            <el-button type="text" @click="show(img);getuserinfo(img[0].uid)">查看详情</el-button>
          </div>
          <div class="like-line">
            <div class="like-lc">{{img[0].like_num}}喜欢/555评论</div>
            <div class="my-work-space"></div>
            <div class="like-btn"><el-button type="text" @click="deletelike(img[0].pid)">取消点赞</el-button></div>
          </div>
      </div>
        </div>
      </template>
    </waterfall>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="dialogVisible" width="70%" class="like-dia">
      <div class="like-diahead">
        <div class="like-diahead-tx">
          <img :src="useritem.head_image">
        </div>
        <div class="like-diahead-name">{{useritem.username?useritem.username:'注册用户'}}</div>
        <el-button size="medium" class="like-diahead-btn" type="success">关注</el-button>
      </div>
      <div class="like-dia-cont">
        <img :src="diaitem.position">
      </div>
      <div class="like-dia-text" v-text="diaitem.description"></div>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="'热度('+diaitem.like_num+')'" name="hot">
          <div class="like-dia-tabs">
            <div class="like-hot" v-for="o in 5" :key="o">
              <div class="like-hot-tx">
                <img :src="diaitem.tx">
              </div>
              <div class="like-hot-name" v-text="diaitem.username"></div>喜欢此图片
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="'评论('+diaitem.comments+')'" name="comments">
          <div class="like-dia-tabs">
            <div class="like-hot" v-for="o in 5" :key="o">
              <div class="like-hot-tx">
                <img :src="avatar">
              </div>
              <div class="like-hot-name">注册用户</div>
              <div class="like-coms-com"></div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "like",
  data() {
    return {
      dialogVisible: false,
      activeName: "comments",
      avatar:'http://188.131.192.194/head_images/5LSk0zVtyKDq9UciiWPab50dwjoNI2324KtwSyBD.jpeg',
      comment: "",
      col:5,
      uid:this.$route.query.uid,
      imgs:[],
      diaitem: [],
      useritem:[],
    };
  },
  created(){
    this.getmylike()
  },
  computed: {
    itemWidth() {
      return 138 * 0.5 * (document.documentElement.clientWidth /310);
    },
    gutterWidth() {
      return 9 * 0.5 * (document.documentElement.clientWidth /400);
    }
  },
  methods: {
    scroll(scrollData) {
    },
    loadmore(index) {
    },
    getmylike(){
      this.$http.post('/api/like',{uid:this.uid},{emulateJSON:true})
      .then(res=>{
        this.imgs = Object.assign(res.body);
        console.log(this.imgs);
      })
    },
    deletelike(pid){
      this.$http.post('/api/pictureLikeDelete',{uid:this.uid,pid:pid},{emulateJSON:true})
      .then(res=>{
        if (res.body.message=="取消点赞成功") {
          this.$message({
              message: "取消点赞成功",
              type: "success",
              customClass: "zIndex"
            });
          this.getmylike()
        }else{
          this.$message({
              message: "取消点赞失败",
              type: "danger",
              customClass: "zIndex"
            });
        }
      })
    },
    getuserinfo(uid){
      this.$http.post('/api/basicInfo',{uid:uid},{emulateJSON:true})
      .then(res=>{
        this.useritem = Object.assign(res.body[0]);
        console.log(this.useritem);
      })
    },
    follow(uid){

    },
    show(img) {
      this.diaitem = img;
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
.like {
  min-height: 300px;
  height: auto;
  display: flex;
  width: auto;
  margin: 0 auto;
}

.like-div {
  margin: 20px auto;
}
.like-item{
  text-align: center;
  margin-bottom: 20px;
  position: relative;
}
.like-img img{
  width: 100%;
  height: 100%;
}

.like-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 0.2s;
}
.like-shadow:hover {
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
}
.like-det {
  color: #fff;
  position: absolute;
  top: 35%;
  left: 40%;
}
.like-det span {
  color: #fff;
}
.like-line{
  position: absolute;
  top: 75%;
  width: 100%;
}
.like-lc {
  color: #fff;
  font-size: 12px;
  display: inline-block;
}
.my-work-space{
  display: inline-block;
  width: 50%;
}
.like-btn {
  display: inline-block;
}
.like-btn span {
  color: #fff;
  font-size: 12px;
}

.el-dialog__body {
  padding-top: 0;
}
.el-tabs__content {
  padding: 0 !important;
}

.like-diahead {
  height: 50px;
  margin-bottom: 20px;
}
.like-diahead-tx {
  width: 50px;
  height: 50px;
  display: inline-block;
  text-align: center;
}
.like-diahead-tx img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.like-diahead-name {
  width: auto;
  margin: auto 30px;
  font-size: 20px;
  text-align: center;
  display: inline-block;
}
.like-diahead-btn {
  display: inline-block;
}
.like-dia-cont {
  margin: 0 auto;
  width: auto;
  height: auto;
  text-align: center;
}
.like-dia-cont img{
  width: 100%;
  height: 100%;
}
.like-dia-text {
  margin: 0px 0 0 20px;
  display: inline-block;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial,
    simsun, "宋体";
  font-size: 1rem;
  color: #444;
}
.like-dia-tabs {
  background-color: #fafafa;
  overflow: hidden;
}
.like-dia-like {
  font-size: 15x;
  text-align: center;
  float: right;
}
.like-hot {
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0 10px 10px;
  font-size: 12px;
}
.like-hot-tx {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
}
.like-hot-tx img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.like-hot-name {
  display: inline-block;
  margin: 0 10px;
  color: #7594b3;
}
.like-coms-com {
  display: inline-block;
}
.like-dia-comment {
  margin: 10px auto;
  width: 800px;
}
.like-dia-input {
  display: inline-block;
  width: 700px;
}
.like-dia-btn {
  display: inline-block;
  margin-left: 10px;
}
</style>