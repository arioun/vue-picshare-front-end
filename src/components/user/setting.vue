<template>
  <div class="se">
    <h2 class="se-title">偏好</h2>
    <el-checkbox v-model="checked1" class="se-title">
      <h4>邮件提醒</h4>
    </el-checkbox>
    <p class="se-title">当有人发私信时，发邮件通知给我</p>
    <el-checkbox v-model="checked2" class="se-title">
      <h4>关注提醒</h4>
    </el-checkbox>
    <p class="se-title">当有人关注我时，发邮件通知给我</p>
    <el-checkbox v-model="checked3" class="se-title">
      <h4>消息订阅</h4>
    </el-checkbox>
    <p class="se-title">当有新功能或新通知时，发邮件通知给我</p>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
      return {
        checked1:'true',
        checked2:'',
        checked3:''
      }
  },
};
</script>

<style>
.se{
  background-color: #fff;
  border: #bbbbbb solid 1px;
  width: 80%;
  min-height: 450px;
  height: auto;
  margin: 30px auto;
}
.se-title{
    margin-left: 15px;
}
.se p{
    font-size: 13px;
}
</style>

