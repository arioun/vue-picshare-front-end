<template>
  <div class="ac">
    <h2 class="ac-title">账号</h2>
    <h5 class="ac-title">Email地址</h5>
    <el-input v-model="email" :disabled="true" class="ac-input"></el-input>
    <br>
    <el-form :model="emailForm" :rules="rules" ref="emailForm">
        <el-form-item prop="email">
            <el-input v-model="emailForm.email" placeholder="输入要修改的邮箱" class="ac-input"></el-input>
        </el-form-item>
    <br>
    <el-button class="ac-btn" @click="saveemail" :disabled="emailbtn">确定</el-button>
    </el-form>
    <h5 class="ac-title">手机号码</h5>
    <el-input v-model="phone" :disabled="true" class="ac-input"></el-input>
    <br>
    <el-form :model="phoneForm" :rules="rules" ref="phoneForm">
      <el-form-item prop="phone">
        <el-input v-model="phoneForm.phone" placeholder="输入要修改的手机号码" class="ac-input"></el-input>
      </el-form-item>
    <br>
    <el-button class="ac-btn" @click="savephone" :disabled="phonebtn">确定</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "account",
  data() {
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      uid:localStorage.getItem("uid"),
      email: "",
      phone: "",
      emailbtn:false,
      phonebtn:false,
      emailForm:{
          email:''
      },
      phoneForm:{
          phone:''
      },
      rules: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  created() {
    this.getuserinfo()
  },
  methods: {
    getuserinfo(){
      this.$http.post("/api/basicInfo",{ uid: this.uid },{ emulateJSON: true})
      .then(result => {
        if (result.body[0].email) {
          this.email=result.body[0].email;
        }else{
          this.email='您还未设置邮箱'
        }
       if(result.body[0].phone){
         this.phone=result.body[0].phone;
       }else{
         this.phone='您还未设置手机号';
       }
       
      });
    },
    saveemail() {
        this.$refs.emailForm.validate((valid) => {
          if (valid) {
            this.$http.post("/api/updateEmail",{ uid:this.uid,email: this.emailForm.email},{ emulateJSON: true })
        .then(res => {
          if (res.body.message=="编辑成功") {
          this.$message({
              message: "修改成功",
              type: "success",
              customClass: "zIndex"
            })
          this.getuserinfo()
          this.emailForm.email=''
        }else{
          this.$message({
              message: "修改失败",
              type: "danger",
              customClass: "zIndex"
            })
        }
        })
          } else {
            return false;
          }
        });
      
    },
    savephone() {
        this.$refs.phoneForm.validate((valid) => {
        if(valid){
        this.$http.post("/api/updatePhone",{ uid:this.uid, phone:this.phoneForm.phone},{ emulateJSON: true })
        .then(res => {
          if (res.body.message=="编辑成功") {
          this.$message({
              message: "修改成功",
              type: "success",
              customClass: "zIndex"
            })
          this.getuserinfo()
          this.phoneForm.phone=''
        }else{
          this.$message({
              message: "修改失败",
              type: "danger",
              customClass: "zIndex"
            })
        }
        })
        } else{
            return false;
        }
        });
    }
  }
};
</script>

<style>
.ac {
  background-color: #fff;
  border: #bbbbbb solid 1px;
  width: 80%;
  margin: 30px auto;
}
.ac-title {
  margin-left: 15px;
}
.ac input {
  padding-right: 0 !important;
  background-color: #fff !important;
}
.ac-input {
  width: 500px !important;
  margin-top: 15px;
  margin-left: 15px;
}
.el-form-item__error{
    margin-left: 15px;
}
.ac-input-btn span {
  color: #d1b200;
  font-size: 12px;
}
.el-input-group__append {
  border: none;
  background-color: #fff !important;
}
.ac-btn {
  margin: 10px 0 20px 15px !important;
  width: 15%;
  background-color: #d1b200 !important;
  color: #fff !important;
  border: #bbbbbb solid 1px !important;
}
</style>
