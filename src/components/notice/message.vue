<template>
  <div class="me">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="评论" name="first" class="me-tab">
        <div class="me-item">
          <ul class="me-ul">
            <li class="me-tx">
              <img src="../../assets/tx6.jpg">
            </li>
            <li class="me-user">用户A</li>
            <li class="me-do">评论了</li>
            <li class="me-thing">你的作品</li>
            <li class="me-pic">
              <img src="../../assets/tj2.jpg">
            </li>
            <li class="me-time">53分钟前</li>
          </ul>
        </div>
        <div class="me-item">
          <ul class="me-ul">
            <li class="me-tx">
              <img src="../../assets/tx6.jpg">
            </li>
            <li class="me-user">用户A</li>
            <li class="me-do">评论了</li>
            <li class="me-thing">你的作品</li>
            <li class="me-pic">
              <img src="../../assets/tj2.jpg">
            </li>
            <li class="me-time">53分钟前</li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="喜欢" name="second" class="me-tab">
        <div class="me-item">
          <ul class="me-ul">
            <li class="me-tx">
              <img src="../../assets/tx6.jpg">
            </li>
            <li class="me-user">用户A</li>
            <li class="me-do">评论了</li>
            <li class="me-thing">你的作品</li>
            <li class="me-pic">
              <img src="../../assets/tj2.jpg">
            </li>
            <li class="me-time">53分钟前</li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
    name:'message',
    data () {
        return {
            activeName:'first'
        }
    }
}
</script>

<style>
.me {
  margin: 0 auto;
}
.me-tab {
  margin: 0 auto;
}
.el-tabs__nav {
  margin-left: 46%;
}
.el-tabs__header{
    margin-bottom: 0 !important;
}
.me-ul {
  list-style: none;
  margin: 0 auto;
  display: block;
  width: 550px;
  padding: 0;
}
.me-ul li {
  display: inline;
}
.me-tx {
  margin-right: 10px;
  position: relative;
  top: -15px;
}
.me-tx img {
  border-radius: 50%;
  width: 45px;
  height: 45px;
}
.me-user {
  position: relative;
  top: -30px;
  margin-right: 10px;
  color: #1936fa;
  font-size: 14px;
}
.me-do {
  position: relative;
  top: -30px;
  margin-right: 10px;
  font-size: 14px;
}
.me-thing {
  position: relative;
  top: -30px;
  margin-right: 100px;
  font-size: 14px;
}
.me-pic{
    position: relative;
    top: -2px;
}
.me-pic img {
  height: 70px;
  width: 70px;
}
.me-time {
  position: relative;
  top: -30px;
  margin-left: 50px;
  color: #bbbbbb;
  font-size: 10px;
}
.me-item{
    border-bottom: #BBBBBB solid 1px;
    height: 80px;
    width: auto;
    margin-top: 10px;
}
</style>