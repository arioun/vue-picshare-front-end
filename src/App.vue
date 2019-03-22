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
import tuijian from "./components/community/tuijian.vue";
import guanzhu from "./components/community/guanzhu.vue";
import mywork from './components/community/mywork.vue';
import album from './components/community/album.vue';
import user from './components/user/user.vue'
import profile from './components/user/profile.vue';
import account from './components/user/account.vue';
import setting from './components/user/setting.vue';
import noticeindex from './components/notice/index.vue';
import message from './components/notice/message.vue';

export default {
  name: "app",
  components: {
    myheader,
    myfooter,
    tuijian,
    guanzhu,
    mywork,
    album,
    user,
    profile,
    account,
    setting,
    noticeindex,
    message,
  },
  data(){
    return{
    }
    
  },
  methods: {

  },
  updated() {
    if (this.comName == "tuku") {
      console.log(this.comName);
      
      this.flag1=true,
      this.flag2=false,
      this.flag3=false
    }else if(this.comName == "shequ"){
      console.log(this.comName);
      this.flag1=false,
      this.flag2=true,
      this.flag3=false
    }
    else if(this.comName == "fabu"){
      this.flag1=false,
      this.flag2=false,
      this.flag3=true
    }
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
}
</style>
