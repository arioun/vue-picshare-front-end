<template>
  <div class="focus">
      <span class="focus-title">您关注了 {{focusnum}} 位用户</span>
    <el-row class="focus-row">
      <el-col :span="5" v-for="(o) in 10" :key="o" class="focus-col">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="card-bg"></div>
            <ul class="focus-ul">
                <li class="focus-tx"><img src="../../assets/tx6.jpg" ></li>
                <li class="focus-name" v-text="username"></li>
                <li class="focus-btn">
                    <el-button size="mini">关注</el-button>
                </li>
            </ul>
            <ul class="focus-ul2">
                <li>关注{{focusnum}}</li>
                <li class="focus-space">粉丝{{followsnum}}</li>
            </ul>
            <span v-text="userintr" class="focus-userintr"></span>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "focus",
  data() {
      return {
          username:'climbdylan',
          focusnum:15,
          followsnum:100,
          userintr:'亲爱的我们生活在最好的年代。'
      }
  },
};
</script>

<style>

.focus-title{
    display: block;
    margin-left: 50px;
    margin-top: 15px;
    color: #85888a;
}

.focus-col{
    margin: 15px 10px 15px 40px;
}
.card-bg{
    background: url('../../assets/shequ-bg.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100px;
}
.focus-ul{
    list-style: none;
    margin: 0 0 0 10px;
    padding: 0;
    height: 60px;
}
.focus-tx{
    width: 80px;
    height: 80px;
    position: relative;
    top: -40px;
}
.focus-tx img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: #fff solid 2px;
}
.focus-name{
    position: relative;
    top: -60px;
    margin-left: 15px;
}
.focus-btn{
    position: relative;
    top: -60px;
    margin-left: 25px;
}
.focus-ul li{
    display: inline-block;
}
.focus-ul2{
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0;
}
.focus-ul2 li{
    display: inline;
    font-size: 14px;
    color: #85888a;
}
.focus-space::before{
    content: "/";
  color: #e0e0e0;
  font-size: 14px;
  margin: 0 10px;
}
.focus-userintr{
    display: block;
    margin:10px 0 15px 15px; 
    font-size: 14px;
    color: #85888a;
}
</style>

