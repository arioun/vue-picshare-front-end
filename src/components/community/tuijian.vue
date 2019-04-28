<template>
  <div class="tj">
    <el-row type="flex" justify="center">
      <el-col :span="23">
        <waterfall class="tj-div" :col="col" :width="itemWidth" :gutterWidth="gutterWidth" :data="imgs" @loadmore="loadmore"
      @scroll="scroll">
      <template>
        <div class="cell-item" v-for="img in imgs" :key="img.id" @click="show(img);getuserinfo(img.uid)">
          <img :src="img.position" class="tj-img">
          <div class="item-body">
            <div class="tj-desc">{{img.description}}</div>
            <el-row type="flex" class="tj-footer">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="tj-tx">
              <img :src="img.head_image" @click="others(img.uid)">
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="tj-name">
            <span @click="others(img.uid)">{{img.username?img.username:'注册用户'}}</span>
          </el-col>
          </el-row>
          </div>
        </div>
      </template>
    </waterfall>
      </el-col>
    </el-row>
    <!--弹出对话框-->
    <el-dialog :visible.sync="dialogVisible" width="70%">
      <div class="tj-diahead">
        <div class="tj-diahead-tx">
          <img :src="useritem.head_image">
        </div>
        <div class="tj-diahead-name">{{useritem.username?useritem.username:'注册用户'}}</div>
        <el-button size="medium" class="tj-diahead-btn" type="success">关注</el-button>
      </div>
      <div class="tj-dia-cont">
        <img :src="diaitem.position">
      </div>
      <div class="tj-dia-text" v-text="diaitem.description"></div>
      <el-button type="text" class="tj-dia-like">{{like}}</el-button>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="'热度(50)'" name="hot">
          <div class="tj-dia-tabs">
            <div class="tj-hot" v-for="o in 5" :key="o">
              <div class="tj-hot-tx">
                <img :src="avatar">
              </div>
              <div class="tj-hot-name">可爱的狮子</div>喜欢此图片</div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="'评论(20)'" name="comments">
          <div class="tj-dia-tabs">
            <div class="tj-dia-comment">
              <el-input class="tj-dia-input" v-model="comment" placeholder="请输入内容"></el-input>
              <el-button class="tj-dia-btn" type="primary">发 布</el-button>
            </div>
            <div class="tj-hot" v-for="o in 5" :key="o">
              <div class="tj-hot-tx">
                <img :src="avatar">
              </div>
              <div class="tj-hot-name" >可爱的狮子</div>
              <div class="tj-coms-com" >2333333333</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "tuijian",
  components: {
  },
  data() {
    return {
      dialogVisible: false,
      diaitem: [],
      activeName: "comments",
      comment: "",
      col: 4,
      like:'点赞',
      avatar:'http://188.131.192.194/head_images/5LSk0zVtyKDq9UciiWPab50dwjoNI2324KtwSyBD.jpeg',
      imgs: [],
      useritem:[]
    };
  },
  created() {
    this.getData();
  },
  computed: {
    itemWidth() {
      return 138 * 0.5 * (document.documentElement.clientWidth /320);
    },
    gutterWidth() {
      return 9 * 0.5 * (document.documentElement.clientWidth /170);
    }
  },
  methods: {
    others(uid){
      this.$router.push({path: "/community/others",query:{my:false,uid:uid}})
    },
    scroll() {
    },
    loadmore() {
    },
    getData(){
      this.$http.get('/api/pictureUsersList').then(res=>{
        this.imgs = Object.assign(res.body);
      })
    },
    getuserinfo(uid){
      this.$http.post('/api/basicInfo',{uid:uid},{emulateJSON:true})
      .then(res=>{
        this.useritem = Object.assign(res.body[0]);  
      })
    },
    show(item) {
      this.dialogVisible = true;
      this.diaitem = item;
    }
  }
};
</script> 
<style>
.tj {
  background-color: #ededef;
  width: 100%;
  min-height: 500px;
  height: auto;
  overflow: hidden;
}
.tj-div {
  margin: 20px auto;
}
.cell-item{
  text-align: center;
  background: #fff;
  border: #bbbbbb solid 1px;
  margin-bottom: 20px;
}
.tj-img {
  margin-top: 0;
  width: 100%;
  height: 80%;
  cursor: pointer;
}
.tj-desc{
  margin: 5px 0 5px 10px;
  text-align: left;
  font-size: 14px;
  height: auto;
  word-wrap:break-word;
}
.tj-footer{
  border-top:1px solid #F2F2F2;
}
.tj-tx{
  width: 35px;
  height: 35px;
  margin: 10px 10px 10px 20px;
  vertical-align: middle;
}
.tj-tx img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  vertical-align: middle;
  cursor: pointer;
}
.tj-name{
  color: #9E7E6B;
  font-size: 14px;
  display: table-cell;
  vertical-align: middle;
  line-height: 55px;
  cursor: pointer;
}

.tj-card-foot-btn button {
  padding: 0;
  border: none;
  margin-top: 25%;
}
.el-dialog__body {
  padding-top: 0;
}
.tj-diahead {
  height: 50px;
  margin-bottom: 20px;
}
.tj-diahead-tx {
  width: 50px;
  height: 50px;
  display: inline-block;
  text-align: center;
}
.tj-diahead-tx img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.tj-diahead-name {
  width: auto;
  margin: auto 30px;
  font-size: 20px;
  text-align: center;
  display: inline-block;
}
.tj-diahead-btn {
  display: inline-block;
}
.tj-dia-cont {
  margin: 0 auto;
  width: auto;
  height: auto;
  text-align: center;
}
.tj-dia-cont img{
  width: 100%;
  height: 100%;
}
.tj-dia-text {
  margin: 0px 0 0 20px;
  display: inline-block;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial,
    simsun, "宋体";
  font-size: 1rem;
  color: #444;
}
.tj-dia-tabs {
  background-color: #fafafa;
  overflow: hidden;
}
.tj-dia-like {
  font-size: 15x;
  text-align: center;
  float: right;
}
.tj-hot {
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0 10px 10px;
  font-size: 12px;
}
.tj-hot-tx {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
}
.tj-hot-tx img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.tj-hot-name {
  display: inline-block;
  margin: 0 10px;
  color: #7594b3;
}
.tj-coms-com {
  display: inline-block;
}
.tj-dia-comment {
  margin: 10px auto;
  width: 800px;
}
.tj-dia-input {
  display: inline-block;
  width: 700px;
}
.tj-dia-btn {
  display: inline-block;
  margin-left: 10px;
}
</style>
