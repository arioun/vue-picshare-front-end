<template>
  <div class="tj">
    <el-row type="flex" justify="center">
      <el-col :span="23">
        <waterfall class="tj-div" :col="col" :width="itemWidth" :gutterWidth="gutterWidth" :data="imgs" @loadmore="loadmore"
      @scroll="scroll">
      <template>
        <div class="cell-item" v-for="img in imgs" :key="img.id">
          <img :src="img.position" class="tj-img" @click="show(img)">
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
          <img :src="useritem.head_image" @click="others(diaitem.uid)">
        </div>
        <div class="tj-diahead-name" @click="others(diaitem.uid)">{{useritem.username?useritem.username:'注册用户'}}</div>
        <el-button size="medium" class="tj-diahead-btn" type="success" @click="follow(diaitem.uid)">关注</el-button>
      </div>
      <div class="tj-dia-cont">
        <img :src="diaitem.position">
      </div>
      <div class="tj-dia-text" v-text="diaitem.description"></div>
      <div class="tj-dia-like">
        <el-button icon="el-icon-gz-heart" @click="like(diaitem.pid)"></el-button>
          <span v-text="diaitem.like_num"></span>
      </div>
          <div class="tj-dia-tabs">
            <div class="tj-dia-comment">
              <el-input class="tj-dia-input" v-model="comment" placeholder="请输入内容"></el-input>
              <el-button class="tj-dia-btn" type="primary" @click="addcom(diaitem.pid,diaitem.uid,comment)">评 论</el-button>
            </div>
            <div class="tj-hot" v-for="com in picdetail.comment" :key="com.cid">
              <div class="tj-hot-tx">
                <img :src="com.from_head_image">
              </div>
              <div class="tj-hot-name" >{{com.from_username?com.from_username:'注册用户'}}</div>
              <div class="tj-coms-com" >{{com.content}}</div>
            </div>
          </div>
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
      uid:localStorage.getItem('uid'),
      dialogVisible: false,
      comment: "",
      col: 4,
      avatar:'http://188.131.192.194/head_images/5LSk0zVtyKDq9UciiWPab50dwjoNI2324KtwSyBD.jpeg',
      imgs: [],
      diaitem: [],
      picdetail:[],
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
      return 9 * 0.5 * (document.documentElement.clientWidth /300);
    }
  },
  methods: {
    others(uid){
      this.$router.push({path: "/community/others",query:{my:false,uid:uid}})
    },
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
    getpicdetail(pid){
      this.$http.post('/api/pictureDetail',{pid:pid},{emulateJSON:true})
      .then(res=>{
        console.log(res);
        this.picdetail=Object.assign(res.body);
      })
    },
    addcom(pid,uuid,content){
      this.$http.post('/api/userComment',{pid:pid,uid:this.uid,uuid:uuid,content:content})
      .then(res=>{
        if(res.body=='评论成功'){   
          this.getpicdetail(pid)
          this.comment=''
        }else{
          this.$message({
              message: "评论失败",
              type: "danger",
              customClass: "zIndex"
            })
        }
      })
    },
    like(pid){
      this.$http.post('/api/pictureLike',{uid:this.uid,pid:pid})
      .then(res=>{
        console.log(res);
        
        if (res.body.message=='点赞成功') {
          this.$message({
              message: "点赞成功",
              type: "success",
              customClass: "zIndex"
            })
          this.getpicdetail()
        }else{
          this.$message({
              message: "点赞失败",
              type: "danger",
              customClass: "zIndex"
            })
        }
      })
    },
    show(item) {
      if (this.uid) {
        this.dialogVisible = true;
        this.diaitem = item;
        this.getuserinfo(item.uid)
        this.getpicdetail(item.pid)
      }else{
        this.$message({
              message: "您还未登录",
              type: "warning",
              customClass: "zIndex"
            })
      }
      
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
  cursor: pointer;
}
.tj-diahead-name {
  width: auto;
  margin: auto 30px;
  font-size: 20px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
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
  margin: 10px 0 0 0px;
  display: inline-block;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial,
    simsun, "宋体";
  font-size: 1rem;
  color: #444;
}
.tj-dia-tabs {
  margin-top: 40px;
  background-color: #fafafa;
  overflow: hidden;
}
.tj-dia-like {
  font-size: 15x;
  text-align: center;
  height: 25px;
  width: 70px;
  margin-top: 10px;
  float: right;
}
.tj-dia-like button{
  border: none;
  padding: 0;
}
.tj-dia-like span{
  line-height: 15px;
  margin-left: 10px;
  display:inline-block;
  position: relative;
  top:-29%;
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
