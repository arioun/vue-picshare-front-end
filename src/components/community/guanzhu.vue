<template>
  <div class="gz">
    <div class="gz-card">
      <el-row type="flex" class="gz-row" justify="center">
        <el-col :span="24">
          <img src="../../assets/gz1.jpg" class="gz-pic">
        </el-col>
      </el-row>
      <!--author-->
      <el-row class="gz-card-author" >
        <el-col :span="2" class="gz-tx">
          <img src="../../assets/tx1.jpg" >
        </el-col>
        <el-col :span="2" class="gz-name">
          <p >云卷云舒</p>
        </el-col>
        <el-col :span="2" :offset="1" class="gz-date">
          <p>11月1日</p>
        </el-col>
        <el-col :span="3" :offset="11" class="gz-btn-zan">
          <el-button icon="el-icon-gz-heart"></el-button>
          <p>30</p>
        </el-col>
        <el-col :span="3" class="gz-btn-zan">
          <el-button icon="el-icon-gz-comment"></el-button>
          <p>70</p>
        </el-col>
      </el-row>
      <!--描述-->
      <el-row>
        <el-col :span="20" class="gz-card-words">
          <p>晨曦中的落基山脉。。</p>
        </el-col>
      </el-row>
      <!--输入评论-->
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="24">
          <el-input placeholder="你的评论是对ta最大的鼓励..." prefix-icon="el-icon-edit" class="gz-input">
            <el-button slot="append" type="text" class="gz-send">发送</el-button>
          </el-input>
        </el-col>
      </el-row>
      <!--评论者-->
      <div class="gz-comments">
        <el-row>
          <el-col :span="2" class="gz-follow-tx">
            <img src="../../assets/tx2.jpg" >
          </el-col>
          <el-col :span="2" class="gz-follow-name">
            <p>Tingw</p>
          </el-col>
        </el-row>
        <el-row class="gz-follow-comment">
          <el-col :span="5" :offset="2">
            <p>手动点赞</p>
          </el-col>
          <el-col :span="2" :offset="15">
            <p class="gz-follow-comment-date">42分钟前</p>
          </el-col>
        </el-row>
      </div>
      <!--展示更多-->
    <el-row type="flex" justify="center">
        <el-col :span="4">
          <el-button type="text" class="gz-more">查看更多评论<i class="el-icon-my-arrow-down el-icon--right"></i></el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "guanzhu"
};
</script>

<style>
.gz {
  background-color: #f9f9f9;
  height: 100%;
  width: 100%;
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
}
.gz-follow-tx{
  text-align: center;
}
.gz-follow-tx img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
.gz-name{
    font-size: 13px;

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
    margin: 0 0 1% 1%;
}
.gz-send span{
  color: #41B93B;
  background-color: #fff;
}
.gz-input input{
  border-right: none;
  border-left: none;
  border-radius: 0px;
}
.gz-input div{
  background-color: #fff;
  border-left: none;
  border-right: none;
  border-radius: 0px;
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

