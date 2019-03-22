<template>
  <div class="ga">
    <div class="gbanner">
      <el-row type="flex" justify="center">
        <el-col :span="10" :offset="0" class="gel-col">
          <el-input placeholder="搜索图库内的图片" suffix-icon="el-icon-search"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="gmain">
      <el-row type="flex" justify="center">
        <el-col :span="1" :offset="0" class="gel-col2">
          <img src="../../assets/dian.png">
        </el-col>
        <el-col :span="4" class="gel-col2">
          <h1>热门专题</h1>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col2">
          <img src="../../assets/dian.png">
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4" :offset="0" class="gel-col3">
          <h1>THEME</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">城市</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">星空</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">旅游</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">下雪</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">教育</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">美食</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">健身</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">风景</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">冬天</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4">
          <el-button type="text">金融</el-button>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col4 gsp">
          <el-button plain round size="mini">更多</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="gtuku">
      <el-row type="flex" justify="center" >
        <el-col :span="7" :offset="0" class="gtukugap">
          <img src="../../assets/g1.jpg">
        </el-col>
        <el-col :span="7" :offset="0" class="gtukugap">
          <img src="../../assets/g2.jpg">
        </el-col>
        <el-col :span="6" :offset="0" class="gtukugap">
          <img src="../../assets/g3.jpg">
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" >
        <el-col :span="7" :offset="0" class="gtukugap">
          <img src="../../assets/g4.jpg">
        </el-col>
        <el-col :span="7" :offset="0" class="gtukugap">
          <img src="../../assets/g5.jpg">
        </el-col>
        <el-col :span="6" :offset="0" class="gtukugap">
          <img src="../../assets/g6.jpg">
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" >
        <el-col :span="7" :offset="0" class="gtukugap">
          <img src="../../assets/g7.jpg">
        </el-col>
        <el-col :span="7" :offset="0" class="gtukugap">
          <img src="../../assets/g8.jpg">
        </el-col>
        <el-col :span="6" :offset="0" class="gtukugap">
          <img src="../../assets/g9.jpg">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
    name:"gallery"
}
</script>

<style>
.gbanner {
  width: 100%;
  height: 600px;
  background: url("../../assets/tuku1.jpg") no-repeat;
  background-size: cover;
}
.gel-col {
  padding-top: 30%;
}
.gel-col input {
  height: 50px;
  opacity: 0.8;
}
.gel-col i {
  opacity: 1;
  color: #101010;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 5px;
}
.gmain {
  margin-top: 1%;
  margin-bottom: 1%;
  height: auto;
}
.gel-col2 {
  height: 60px;
}
.gel-col2 h1 {
  text-align: center;
  letter-spacing: 0.6em;
  font-size: 2rem;
  padding-left: 6%;
}
.gel-col2 img {
  width: 18px;
  height: 18px;
  margin-top: 70%;
  margin-left: 37%;
}
.gel-col3 h1 {
  text-align: center;
  letter-spacing: 0.4em;
  font-size: 1.3rem;
  padding-left: 5%;
}
.gel-col4 span {
  color: #bfbfbf;
}
.gsp {
  margin-top: 0.4%;
}
.gtuku{
    height: auto;
}
.gtuku img{
    width: 100%;
    height: 300px;
  
}
.gtukugap{
    margin: 0% 1% 1% 1%;
}
</style>