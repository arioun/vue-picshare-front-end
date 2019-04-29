<template>
  <div class="sy">
    <div class="ibanner ib1">
      <el-row>
        <el-col :span="2" class="iel-col" :offset="1">
          <span class="iwhite">图库</span>
        </el-col>
        <el-col :span="1" class="iel-col ibtn">
            <router-link to="gallery">
              <el-button icon="el-icon-arrow-right" type="primary"></el-button>
            </router-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :offset="1" class="iel-col2">
          <p>探索超过100,000张的高清图片</p>
        </el-col>
      </el-row>
    </div>
    <div class="ibanner ib2">
      <el-row>
        <el-col :span="2" class="iel-col" :offset="1">
          <span class="iwhite">社区</span>
        </el-col>
        <el-col :span="1" class="iel-col ibtn cshequ">
          <router-link to="community"><el-button icon="el-icon-arrow-right "></el-button></router-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="1" class="iel-col2">
          <p>与全世界的优秀摄像师交流、分享</p>
        </el-col>
      </el-row>
    </div>
    <div class="ibanner ib3">
        <el-row>
        <el-col :span="2" class="iel-col" :offset="1">
          <span class="iwhite">发布</span>
        </el-col>
        <el-col :span="1" class="iel-col ibtn cfabu">
            <el-button icon="el-icon-arrow-right" @click="fabu"></el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" :offset="1" class="iel-col2">
          <p>让更多的人看到你拍摄的图片</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "myindex",
  data () {
    return {
      abc:'abc',
      uid:localStorage.getItem('uid')
  }
  },
  methods: {
    showtuku(){
      this.$emit('func','gallery'); 
    },
    fabu(){
      if (this.uid) {
        this.$router.push({ path: "/publish" });
      }else{
        this.$message({
                message: "您还未登录",
                type: "warning",
                customClass: "zIndex"
              });
      }
    }
  }
};
</script>

<style>
.sy{
 width: auto;
 margin: 0 auto;
}
.ibanner {
  height: 550px;
  margin-bottom: 20px;
   
}
.ib1 {
  background: url("../../assets/tuku.jpg") no-repeat;
  background-size: cover;
}
.ib2 {
  background: url("../../assets/shequ.jpg") no-repeat;
  background-size: cover;
}
.ib3 {
  background: url("../../assets/fabu.jpg") no-repeat;
  background-size: cover;
  margin-bottom: 5px;
}
.iwhite {
  color: #ffffff;
  margin: 0;
  padding: 15% 0 0 6%;
  font-size: 3rem;
  font-weight: bold;
  width: 120px;
  display: inline-block;
}
.ibtn button {
  width: 45px;
  height: 45px;
  display: inline-block;
  margin-top: 65%;
}
.ibtn i {
  margin-left: -6px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
}
.iel-col {
  padding-top: 15%;
  width: auto;
}
.iel-col2 {
  padding-left: 6px;
}
.iel-col2 input {
  height: 50px;
  opacity: 0.7;
}
.iel-col2 i {
  opacity: 1;
  color: #000000;
  font-weight: bold;
  font-size: 1.5rem;
}
.iel-col2 p{
    color: #ffffff;
}
.cfabu button{
    background-color: #D1B200 !important;
    border: #D1B200;
}
.cshequ button{
    background-color: #41B93B;
    border: #41B93B;
}
</style>
