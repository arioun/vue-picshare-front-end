<template>
  <div id="head" class="hheader">
    <el-row>
      <el-col :lg="4" :xs="1" :sm="1" :md="1" :xl="4" class="hel-col">
        <img src="../../assets/logo.png" class="hlogo" @click="show">
      </el-col>
      <el-col :lg="0" :xs="8" :sm="4" :md="4" :xl="1">&nbsp;</el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" :class="['hel-col',flag1?'active-tk':'']">
        <el-button type="text" class="hbtn" @click="show('/gallery')">图库</el-button>
      </el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1">&nbsp;</el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" :class="['hel-col',flag2?'active-sq':'']">
        <el-button type="text" class="hbtn" @click="show('/community')">社区</el-button>
      </el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1">&nbsp;</el-col>
      <el-col :lg="2" :xs="2" :sm="2" :md="2" :xl="2" :class="['hel-col',flag3?'active-fb':'']">
        <el-button type="text" class="hbtn" @click="show('/publish')">发布作品</el-button>
      </el-col>
      <el-col :xs="2" :sm="8" :md="10" :lg="11" :xl="12">&nbsp;</el-col>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" class="hbtn1 hel-col">
        <img src="../../assets/user.png" class="huser">
      </el-col>
      <div v-if="user">
        <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" class="hbtn1 hel-col">
          <el-button type="text" class="hbtn" @click="dialog('login')">登录</el-button>
        </el-col>
        <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" class="hbtn1 hel-col">
          <el-button type="text" class="hbtn" @click="dialog('regis')">注册</el-button>
        </el-col>
      </div>
      <div v-else>
        <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" class="user">
          <el-dropdown @command="dropcommand">
            <div class="he-username">{{username}}</div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="setting">账号设置</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </div>
      <el-col :lg="1" :xs="1" :sm="1" :md="1" :xl="1" class="hbtn2 hel-col">
        <div
          :class="['huser',flag4?'h-message-btn-open':'h-message-btn-close']"
          @click="show('/notice')"
        ></div>
      </el-col>
    </el-row>

    <el-dialog :title="dialogtitle" :visible.sync="dialogLogin" width="30%" class="head-dialog">
      <component :is="dialogcom" @func="dialogswitch" @login="login" ></component>
    </el-dialog>
    <el-dialog :title="dialogtitle" :visible.sync="dialogRegister" width="30%" class="head-dialog">
      <component :is="dialogcom" @func="dialogswitch" @register="register"></component>
    </el-dialog>
  </div>
</template>

<script>
import login from "./login.vue";
import register from "./register.vue";
export default {
  name: "myheader",
  components: {
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
      dialogRegister: false,
      user: true,
      username: "",
      dialogtitle: "登录",
      dialogcom: "login",
      uid:localStorage.getItem('uid')
    };
  },
  methods: {
    show(data) {
      this.comName = data;
      if (this.comName == "/gallery") {
        this.$router.push({ path: "/gallery" });
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
      } else if (this.comName == "/community") {
        this.$router.push({ path: "/community" });
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;
        this.flag4 = false;
      } else if (this.comName == "/publish") {
        if (this.uid) {
        this.$router.push({ path: "/publish" });
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.flag4 = false;
      }else{
        this.$message({
                message: "您还未登录",
                type: "warning",
                customClass: "zIndex"
              });
      }
      } else if (this.comName == "/notice") {
        if (localStorage.getItem("login")) {
          this.$router.push({ path: "/notice" });
          this.flag1 = false;
          this.flag2 = false;
          this.flag3 = false;
          this.flag4 = true;
        } else {
          this.$message({
            message: "您还未登录",
            type: "warning",
            customClass: "zIndex"
          });
        }
      } else {
        this.$router.push({ path: "/" });
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
      }
    },
    dialog(type) {
      if (type == "login") {
        this.dialogcom = "login";
        this.dialogtitle = "登录";
        this.dialogLogin = true;
        this.dialogRegister = false;
      } else if (type == "regis") {
        this.dialogcom = "register";
        this.dialogtitle = "注册";
        this.dialogLogin = false;
        this.dialogRegister = true;
      }
    },
    dialogswitch(data) {
      this.dialogcom = data;
      if (data == "login") {
        this.dialogtitle = "登录";
      } else if (data == "register") {
        this.dialogtitle = "注册";
      }
    },
    getinfo(uid) {
      this.$http.post("/api/basicInfo", { uid: uid }, { emulateJSON: true })
        .then(res => {
          if (res.body[0].username) {
            this.username = res.body[0].username;
          } else if(res.body[0].phone){
            this.username = res.body[0].phone;
          }else if(res.body[0].email){
            this.username = res.body[0].email;
          }
          
        });
    },
    login(type, data, passwd) {
      if (type == "phone") {
        this.$http
          .post(
            "/api/phoneLogin",
            { phone: data, password: passwd },
            { emulateJSON: true }
          )
          .then(result => {
            if (result.body.message == "登录成功") {
              this.user = false;
              localStorage.setItem("uid", result.body.uid);
              localStorage.setItem("login", "yes");
              this.getinfo(result.body.uid)
              this.dialogLogin = false;
              this.$router.go(0)
            } else if (result.body.message == "用户名或密码错误") {
              this.$message({
                message: "手机号或密码错误",
                type: "warning",
                customClass: "zIndex"
              });
            } else {
              this.$message({
                message: "登录失败",
                type: "warning",
                customClass: "zIndex"
              });
            }
          })
      } else if (type == "email") {
        this.$http
          .post(
            "/api/emailLogin",
            { email: data, password: passwd },
            { emulateJSON: true }
          )
          .then(result => {
            if (result.body.message == "登录成功") {
              this.user = false;
              localStorage.setItem("uid", result.body.uid);
              localStorage.setItem("login", "yes");
              this.getinfo(result.body.uid)
              this.dialogLogin = false;
              this.$router.go(0)
            } else if (result.body.message == "用户名或密码错误") {
              this.$message({
                message: "邮箱或密码错误",
                type: "warning",
                customClass: "zIndex"
              });
            } else {
              this.$message({
                message: "登录失败",
                type: "warning",
                customClass: "zIndex"
              });
            }
          })
      }
    },
    logout() {
      this.user = true;
      localStorage.setItem("login", "");
      localStorage.setItem("uid", "");
      localStorage.setItem("username", "");
      this.$router.push({path:'/'})
    },
    register(type, data, passwd) {
      if (type == "phone") {
        this.$http
          .post(
            "/api/phoneRegister",
            { phone: data, password: passwd },
            { emulateJSON: true }
          )
          .then(result => {
            if (result.body.message == "注册成功") {
              localStorage.setItem("uid", result.body.uid)
              localStorage.setItem("login", 'yes')
              this.getinfo(result.body.uid)
              this.user = false;
              this.dialogRegister = false;
              this.$router.go(0)
            } else if (result.body.message == "该手机号已注册") {
              this.$message({
                message: "该手机号已注册",
                type: "warning",
                customClass: "zIndex"
              });
            }
          })

      } else if (type == "email") {
        this.$http
          .post(
            "/api/emailRegister",
            { email: data, password: passwd },
            { emulateJSON: true }
          )
          .then(result => {
            if (result.body.message == "注册成功") {
              localStorage.setItem("uid", result.body.uid)
              localStorage.setItem("login", 'yes')
              this.getinfo(result.body.uid)
              this.user = false
              this.dialogRegister = false
              this.$router.go(0)
            } else if (result.body.message == "该邮箱已注册") {
              this.$message({
                message: "该邮箱已注册",
                type: "warning",
                customClass: "zIndex"
              });
            }
          })
      }
    },
    setting() {
      this.$router.push({path:'/user/profile'})
    },
    dropcommand(data) {
      if (data == "logout") {
        this.logout();
      } else if (data == "setting") {
        this.setting();
      }
    }
  },
  created() {
    if (localStorage.getItem("login") == 'yes') {
        this.user = false;
        this.getinfo(localStorage.getItem("uid"))
    }
    this.comName = this.$route.path;
    if (/gallery/g.test(this.comName)) {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
    } else if (/community/g.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = false;
      this.flag4 = false;
    } else if (/publish/g.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.flag4 = false;
    } else if (/notice/g.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = true;
    } else {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
    }
  },
  watch: {
    $route: function(to) {
      if (/gallery/g.test(to.path)) {
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
      } else if (/community/g.test(to.path)) {
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;
        this.flag4 = false;
      } else if (/publish/g.test(to.path)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.flag4 = false;
      } else if (/notice/g.test(to.path)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = true;
      } else {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
      }
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
  border-bottom: #bbbbbb solid 1px;
}
.hlogo {
  height: 2.6rem;
  width: 10rem;
  padding-left: 0.5rem;
  float: left;
  cursor: pointer;
}
.huser {
  padding-top: 8px;
  width: 23px;
  height: 23px;
  cursor: pointer;
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

.head-dialog span {
  font-weight: bold;
}
.user {
  margin-top: 12px;
  margin-right: 10px;
}
.user button {
  color: #000;
}
.he-username{
  width:88px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding-top:3px;
}
</style>