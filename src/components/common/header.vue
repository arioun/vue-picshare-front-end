<template>
  <div id="head" class="hheader">
    <el-row>
      <el-col :lg="4" :xs="1" :sm="1" :md="1" :xl="4" class="hel-col">
        <router-link to="/">
          <img src="../../assets/logo.png" class="hlogo" @click="show">
        </router-link>
      </el-col>
      <el-col :lg="0" :xs="8" :sm="4" :md="4" :xl="1">&nbsp;</el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" :class="['hel-col',flag1?'active-tk':'']">
        <router-link to="/gallery">
          <el-button type="text" class="hbtn" @click="show('/gallery')">图库</el-button>
        </router-link>
      </el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1">&nbsp;</el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" :class="['hel-col',flag2?'active-sq':'']">
        <router-link to="/community">
          <el-button type="text" class="hbtn" @click="show('/community')">社区</el-button>
        </router-link>
      </el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1">&nbsp;</el-col>
      <el-col :lg="2" :xs="2" :sm="2" :md="2" :xl="2" :class="['hel-col',flag3?'active-fb':'']">
        <router-link to="/publish">
          <el-button type="text" class="hbtn" @click="show('/publish')">发布作品</el-button>
        </router-link>
      </el-col>
      <el-col :xs="2" :sm="8" :md="9" :lg="11" :xl="13">&nbsp;</el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" class="hbtn1 hel-col">
        <img src="../../assets/user.png" class="huser">
      </el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" class="hbtn1 hel-col">
        <el-button type="text" class="hbtn" @click="dialogLogin= true">登录</el-button>
      </el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" class="hbtn1 hel-col">
        <el-button type="text" class="hbtn" @click="dialogRegister= true">注册</el-button>
      </el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" class="hbtn2 hel-col">
        <router-link to="/notice">
          <div
            :class="['huser',flag4?'h-message-btn-open':'h-message-btn-close']"
            @click="show('/notice')"
          ></div>
        </router-link>
      </el-col>
    </el-row>
    
    <el-dialog :title="dialogtitle" :visible.sync="dialogLogin" width="30%" class="head-dialog">
      <component :is="dialogcom" @func='dialogswitch'></component>
    </el-dialog>
  </div>
</template>

<script>
import login from './login.vue';
import register from './register.vue'
export default {
  name: "myheader",
  components:{
    login,
    register
  },
  data() {
    return {
      comName: "/community",
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      dialogLogin: false,
      
      dialogtitle:'登录',
      dialogcom:'login'
    };
  },
  methods: {
    show(data) {
      this.comName = data;
      if (this.comName == "/gallery") {
        (this.flag1 = true),
          (this.flag2 = false),
          (this.flag3 = false),
          (this.flag4 = false);
      } else if (this.comName == "/community") {
        (this.flag1 = false),
          (this.flag2 = true),
          (this.flag3 = false),
          (this.flag4 = false);
      } else if (this.comName == "/publish") {
        (this.flag1 = false),
          (this.flag2 = false),
          (this.flag3 = true),
          (this.flag4 = false);
      } else if (this.comName == "/notice") {
        (this.flag1 = false),
          (this.flag2 = false),
          (this.flag3 = false),
          (this.flag4 = true);
      } else {
        (this.flag1 = false),
          (this.flag2 = false),
          (this.flag3 = false),
          (this.flag4 = false);
      }
    },
    dialogswitch(data){
      this.dialogcom=data;
      if(data=='login'){
        this.dialogtitle="登录"
      }else if(data=='register'){
        this.dialogtitle="注册"
      }
    }
  },
  created() {
    this.comName = this.$route.path;
    if (/gallery/g.test(this.comName)) {
      console.log("true");

      (this.flag1 = true),
        (this.flag2 = false),
        (this.flag3 = false),
        (this.flag4 = false);
    } else if (/community/g.test(this.comName)) {
      (this.flag1 = false),
        (this.flag2 = true),
        (this.flag3 = false),
        (this.flag4 = false);
    } else if (/publish/g.test(this.comName)) {
      (this.flag1 = false),
        (this.flag2 = false),
        (this.flag3 = true),
        (this.flag4 = false);
    } else if (/notice/g.test(this.comName)) {
      (this.flag1 = false),
        (this.flag2 = false),
        (this.flag3 = false),
        (this.flag4 = true);
    } else {
      (this.flag1 = false),
        (this.flag2 = false),
        (this.flag3 = false),
        (this.flag4 = false);
    }
  }
};
</script>

<style>
.hheader {
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  border-bottom: #bbbbbb solid 1px;
}
.hlogo {
  height: 2.6rem;
  width: 10rem;
  padding-left: 0.5rem;
  float: left;
}
.huser {
  padding-top: 8px;
  width: 23px;
  height: 23px;
}
.h-message-btn-close {
  background: url("../../assets/message.png") no-repeat;
  background-size: 23px 23px;
}
.h-message-btn-open {
  background: url("../../assets/message-open.png") no-repeat;
  background-size: 21px 21px;
}
.hel-col {
  padding-top: 5px;
  text-align: center;
}
.hbtn {
  color: #303133 !important;
}
.hbtn1 {
  width: 35px !important;
}
.hbtn2 {
  width: 35px !important;
  padding-left: 20px !important;
  margin-top: 8px;
}
.active-tk {
  border-bottom: #44a0ff solid 2px;
}
.active-tk span {
  color: #44a0ff;
}
.active-sq {
  border-bottom: #41b93b solid 2px;
}
.active-sq span {
  color: #41b93b;
}
.active-fb {
  border-bottom: #d1b200 solid 2px;
}
.active-fb span {
  color: #d1b200;
}

.head-dialog span{
  
  font-weight: bold;
}


</style>

