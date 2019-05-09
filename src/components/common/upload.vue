<template>
  <div>
    <img :src="avatarurl" style="width: 500px;height: 500px;">
    <input type="file" @change="changehead($event)" ref="avatarInput">
    <el-button class="pr-txbtn" size="mini" @click="uploadimg">上传图片</el-button>
  </div>
</template>
<script>
export default {
  name: 'upload',
  data() {
    return {
      avatarurl: "",
        description:'猫',
        tid:'14'
    };
  },
  methods: {
    changehead(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        that.avatarurl = this.result;
      };
    },
    uploadimg() {
      var image = new FormData();
      image.append("file", this.$refs.avatarInput.files[0]);
      this.$http
        .post("/api/upload", image)
        .then(res => {
          console.log(res);
          if (res.body.message=="上传成功") {
             // console.log(res.body.image);
              this.adminupload(res.body.image,res.body.weight,res.body.height)
          }
        });
    },
    adminupload(pos,width,height){
        this.$http.post('/api/adminUpload',{
            tid:this.tid,description:this.description,
            position:pos,weight:width,height:height
        },{emulateJSON:true}).then(res=>{
            console.log(res);
            if (res.body.message=='添加成功') {
                this.$message({
                message: '添加成功',
                customClass:'zIndex'
                })
            }
        })
    }
  }
};
</script>
