<template>
  <div id="app">
    <el-container>
      <el-header class="appheader">
        <myheader></myheader>
        </el-header>
      <el-main>
        <router-view></router-view>
        </el-main>
      <el-footer>
        <myfooter></myfooter>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
import myheader from "./components/common/header.vue";
import myfooter from "./components/common/footer.vue";

export default {
  name: "app",
  components: {
    myheader,
    myfooter,
  },
  data(){
    return{
    }
    
  },
  methods: {

  }
};
</script>

<style>
body {
  margin: 0;
}
.el-header,.el-main,.el-footer{
  padding: 0 !important;
  height: auto !important;

}
.appheader{
  margin-bottom: 49px;
  z-index: 2999;
}
.zIndex{
  z-index: 9999 !important;
}
</style>
