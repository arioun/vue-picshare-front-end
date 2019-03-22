<template>
  <div id="foot" class="footer">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="1" class="fbtn">
        <el-button type="text" >用户协议</el-button>
      </el-col>
      <el-col :span="1" class="fbtn"><p class="s">|</p></el-col>
      <el-col :span="1" class="fbtn">
        <el-button type="text">寻求帮助</el-button>
      </el-col>
      <el-col :span="1" class="fbtn"><p class="s">|</p></el-col>
      <el-col :span="1" class="fbtn">
        <el-button type="text">联系我们</el-button>
      </el-col>
      <el-col :span="1" class="fbtn"><p class="s">|</p></el-col>
      <el-col :span="1" class="fbtn">
        <el-button type="text">关于我们</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="10"><p class="cp">©2019 pictureshare.me 版权所有</p></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "myfooter"
};
</script>

<style>
    .footer{
        background-color: #f5f5f5;
        border: solid 1px #bbbbbb;

        height: 65px;
    }
    .fbtn{
        text-align: center;
        height: 35px;
    }
    .fbtn span{
        color: #303133 !important;
    }
    .s{
        margin-top: 6px;
        text-align: center;
    }
    .cp{
        color: #AEAEAE;
        font-size: 10px;
        margin-top: 0;
        text-align: center;
    }
</style>

