<template>
  <div>
    <el-row type="flex" justify="center" class="sq-row">
      <el-col :span="5" class="sq-work">
        <img src="../../assets/tj5.jpg">
      </el-col>
      <el-col :span="5" class="sq-work">
        <img src="../../assets/tj4.jpg">
      </el-col>
      <el-col :span="5" class="sq-work">
        <img src="../../assets/tj6.jpg">
      </el-col>
      <el-col :span="5" class="sq-work">
        <img src="../../assets/tj3.jpg">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "mywork"
};
</script>

<style>
.sq-row {
  margin-top: 15px;
}
.sq-work {
  margin-right: 20px;
  text-align: center;
}
.sq-work img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 200px;
  min-height: 200px;
}
</style>


