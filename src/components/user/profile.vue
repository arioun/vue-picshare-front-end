<template>
  <div class="pr">
    <h2 class="pr-title">基本信息</h2>
    <el-container>
      <el-main class="pr-title">
        <h5>用户名</h5>
        <el-input v-model="username" class="pr-input"></el-input>
        <h5 >性别</h5>
        <el-select v-model="sex" placeholder="请选择">
          <el-option label="保密" value="0"></el-option>
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
        <h5 >生日</h5>
        <div class="block">
          <el-date-picker v-model="birth" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
        </div>
        <h5>简介</h5>
        <el-input v-model="desc" class="pr-input"></el-input>
        <h5 >居住城市</h5>
        <v-distpicker :province="province" :city="city" hide-area></v-distpicker>
        <el-button class="pr-btn" @click="save">保&nbsp;存</el-button>
      </el-main>
      <el-aside width="300px" class="pr-aside">
        <img :src="avatarurl" class="pr-tx">
        <br>
        <input type="file" @change="changehead($event)" ref="avatarInput" style="display:none;">
        <el-button class="pr-txbtn" size="mini" @click="setavatar">上传图片</el-button>
        <!--<el-upload action="" :multiple='false' :before-upload="beforeUpload" :on-change="changehead" :auto-upload="true" :limit="1">
  <el-button size="small" type="primary">点击上传</el-button>
</el-upload>-->
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker';
export default {
  name: "profile",
  components:{
      VDistpicker
  },
   data() {
      return {
        picture: {},
        username:'',
        sex:'',
        email:'',
        phone:'',
        birth:'',
        desc:'',
        province:'',
        city:'',
        headimg:'',
        multiple:false,
        avatarurl:''
      }
   },
   created(){
     this.getinfo()
   },
   methods: {
     sexs(v){
       if (v==0) {
         return '保密'
       } else if(v==1){
         return '男'
       }else if(v==2){
        return '女'
       }
     },
     getinfo(){
       this.$http.post('/api/basicInfo',{uid:localStorage.getItem('uid')},{emulateJSON:true})
     .then(result=>{
       this.username=result.body[0].username;
       this.sex=this.sexs(result.body[0].sex);
       this.email=result.body[0].birthday;
       this.phone=result.body[0].birthday;
       this.birth=result.body[0].birthday;
       this.desc=result.body[0].introduce;
       this.province=result.body[0].province;
       this.city=result.body[0].city;
       this.avatarurl=result.body[0].head_image;
     })
     },
     updataInfo(){
       this.$http.post('/api/updateInfo',{uid:localStorage.getItem('uid'),
       username:this.username,
       sex:this.sex,
       email:this.email,
       phone:this.phone,
       birthday:this.birth,
       introduce:this.desc,
       province:this.province,
       city:this.city
       },{emulateJSON:true}).then(result=>{
         console.log(result);
         if (res.body.message=="编辑成功") {
          this.$message({
              message: "修改成功",
              type: "success",
              customClass: "zIndex"
            });
          this.getmywork()
        }else{
          this.$message({
              message: "修改失败",
              type: "danger",
              customClass: "zIndex"
            });
        }
       })
     },
     save(){
       this.uploadimg();
       this.updataInfo();
     },
     changehead(e){
       this.uploadimg()
     },
     setavatar(){
       this.$refs.avatarInput.click();
     },
    uploadimg(){
      var image = new FormData()
      image.append('file', this.$refs.avatarInput.files[0])
      console.log(this.$refs.avatarInput.files[0]);
      /*this.$http.post('/api/upload',image)
      .then(result=>{
        console.log(result);
        this.avatarurl=result.body.image;
      })*/
    },
    /*beforeUpload(file){
      console.log(file)
       let fd = new FormData()
       fd.append('file', file)
       // console.log(fd)
        this.$http.post('/api/upload',fd)
        .then(result=>{
          console.log(result);
        })
    }*/
   }
};
</script>

<style>
.pr {
  background-color: #fff;
  border: #bbbbbb solid 1px;
  width: 80%;
  margin: 30px auto;
}
.pr-aside {
  text-align: center;
}
.pr-tx {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.pr-title{
    margin-left: 15px;
}
.pr-input input{
    width: 70%;
}
.pr-btn{
    width: 15%;
    margin: 50px 0 50px 0 !important;
    background-color: #D1B200 !important;
    color: #fff !important;
}
.pr-txbtn{
    margin-top: 20px !important;
    border: #C99A05 solid 1px !important;
    background-color: #fff;
}
.pr-txbtn button{
    border-radius: 5% !important;
}
.pr-txbtn span{
    color:#C99A05;
}
</style>
