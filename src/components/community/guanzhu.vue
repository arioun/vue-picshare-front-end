<template>
  <div class="gz">
    <div class="gz-card" v-for="item of items" :key="item.cid">
      <el-row type="flex" class="gz-row" justify="center">
        <el-col :span="24">
          <img :src="item.position" class="gz-pic">
        </el-col>
      </el-row>
      <!--author-->
      <el-row class="gz-card-author" >
        <el-col :span="2" class="gz-tx">
          <img :src="item.head_image" @click="others(item.uid)">
        </el-col>
        <el-col :span="2" class="gz-name">
          <p @click="others(item.uid)">{{item.username?item.username:'注册用户'}}</p>
        </el-col>
        <!--<el-col :span="2" :offset="1" class="gz-date">
          <p></p>
        </el-col>-->
        <el-col :span="3" :offset="15" class="gz-btn-zan">
          <el-button icon="el-icon-gz-heart" @click="like(item.pid)"></el-button>
          <p v-text="item.like_num"></p>
        </el-col>
        <el-col :span="2" class="gz-btn-zan">
          <el-button icon="el-icon-gz-comment"></el-button>
          <p v-text="item.comments"></p>
        </el-col>
      </el-row>
      <!--描述-->
      <el-row>
        <el-col :span="20" class="gz-card-words">
          <div v-text="item.description"></div>
        </el-col>
      </el-row>
      <!--输入评论-->
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="24">
          <el-input placeholder="你的评论是对ta最大的鼓励..." v-model="inputcomment" prefix-icon="el-icon-edit" class="gz-input">
            <el-button slot="append" type="text" class="gz-send" @click="addcom(item.pid,item.uid,inputcomment)">发送</el-button>
          </el-input>
        </el-col>
      </el-row>
      <!--评论者-->
      <div class="gz-comments" v-for="(img,i) of item.comment" :key="i">
        <el-row>
          <el-col :span="2" class="gz-follow-tx">
            <img :src="img.send_head_image" >
          </el-col>
          <el-col :span="2" class="gz-follow-name">
            <p>{{img.send_username?img.send_username:'注册用户'}}</p>
          </el-col>
        </el-row>
        <el-row class="gz-follow-comment">
          <el-col :span="5" :offset="2">
            <p v-text="img.content"></p>
          </el-col>
          <!--<el-col :span="2" :offset="15">
            <p class="gz-follow-comment-date">42分钟前</p>
          </el-col>-->
        </el-row>
      </div>
      <!--<div class="gz-comments" v-for="(img,i) of item.comment" v-if="i>5&" :key="i">
          <el-row>
          <el-col :span="2" class="gz-follow-tx">
            <img :src="img.send_head_image" >
          </el-col>
          <el-col :span="2" class="gz-follow-name">
            <p>{{img.send_username?img.send_username:'注册用户'}}</p>
          </el-col>
        </el-row>
        <el-row class="gz-follow-comment">
          <el-col :span="5" :offset="2">
            <p v-text="img.content"></p>
          </el-col>
          <el-col :span="2" :offset="15">
            <p class="gz-follow-comment-date">42分钟前</p>
          </el-col>
        </el-row>
      </div>
     
    <el-row type="flex" justify="center" v-if="flag">
        <el-col :span="4">
          <el-button type="text" class="gz-more" @click="showmore(item.id)">查看更多评论<i class="el-icon-my-arrow-down el-icon--right"></i></el-button>
        </el-col>
      </el-row>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "guanzhu",
  data() {
    return {
      items: [],
      inputcomment:'',
      uid:localStorage.getItem('uid')
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    others(uid){
      this.$router.push({path: "/community/others",query:{my:false,uid:uid}})
    },
   showmore(id){
      this.items[id].flag=true;
    },
    getdata(){
      this.$http.post('/api/userFocus',{uid:this.uid},{emulateJSON:true})
      .then(res=>{
        this.items = Object.assign(res.body);
      })
    },
    addcom(pid,uuid,content){
      this.$http.post('/api/userComment',{pid:pid,uid:this.uid,uuid:uuid,content:content})
      .then(res=>{
        if(res.body=='评论成功'){   
          this.getdata()
          this.inputcomment=''
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
        if (res.body.message=='点赞成功') {
          this.getdata()
        }else{
          this.$message({
              message: "点赞失败",
              type: "danger",
              customClass: "zIndex"
            })
        }
      })
    },
    dislike(pid){
      this.$http.post('/api/pictureLike',{uid:this.uid,pid:pid})
      .then(res=>{
        if (res.body.message=='取消点赞成功') {
          this.getdata()
        }else{
          this.$message({
              message: "取消点赞失败",
              type: "danger",
              customClass: "zIndex"
            })
        }
      })
    }
  }
}
</script>

<style>
.gz {
  background-color: #f9f9f9;
  min-height: 500px;
  height: auto;
  overflow: hidden;
}
.gz-card {
    background-color: #fff;
    width: 60%;
    margin: 1% auto;
    border:#BBBBBB solid 1px;
}
.gz-pic{
    width: 100%;
    height: auto;
}
.gz-row{
    height: 100%;
}
.gz-card-author{
  margin-top: 2%;
}
.gz-tx{
    text-align: center;
}
.gz-tx img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
}
.gz-follow-tx{
  margin-top: 10px;
  text-align: center;
}
.gz-follow-tx img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
.gz-com{
  padding-left: 10px;
}
.gz-name{
    font-size: 13px;
    cursor: pointer;
}
.gz-follow-name p{
  font-size: 10px;
}
.gz-date{
    color: grey;
    font-size: 10px;
    margin-top: 2px;
}
.el-icon-gz-heart {
  width: 25px;
  height: 25px;
  background: url("../../assets/xin.png") center no-repeat;
  background-size: 25px 25px;
  text-align: center;
}
.el-icon-gz-comment {
  width: 25px;
  height: 25px;
  background: url("../../assets/comments.png") center no-repeat;
  background-size: 25px 25px;
  text-align: center;
}
.gz-btn-zan button{
    padding: 0;
    border: none;
    margin-top: 10px;
}
.gz-btn-zan p{
    color: gray;
    margin-left: 10px;
    position: relative;
    top: -6px;
    display: inline;
}
.gz-card-words{
    margin: 10px 0 10px 20px;
}
.gz-input{
  margin-bottom: 20px;
}
.gz-input input{
  border-right: none;
  border-left: none;
  border-radius: 0px;
  width: 100%!important;
}
.gz-input div{
  background-color: #fff;
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: 1px solid #DCDFE6 !important;
  border-bottom: 1px solid #DCDFE6 !important;
}
.gz-send{
  border-radius: 0;
  position: relative;
}
.gz-send span{
  color: #41B93B;
  background-color: #fff;
}
.gz-comments{
  margin-top: 1%;
  border-bottom: #BBBBBB solid 1px;
}
.gz-follow-comment{
  font-size: 12px;
}
.gz-follow-comment p{
  margin-top: 0;
}
.gz-follow-comment-date{
  font-size: 0.1rem;
  color: gray;
}
.el-icon-my-arrow-down{
  width: 15px;
  height: 11px;
  background: url("../../assets/arrow-down.png") center no-repeat;
  background-size: 15px 20px;
  text-align: center;
}
.gz-more span{
  color: #101010;
}
</style>