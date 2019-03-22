<template>
  <el-container class="fb">
    <el-main class="fb-main">
      <el-upload
        class="fb-upload"
        action
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
        <div class="el-upload__tip" slot="tip">
          最大支持20MB的JPEG格式照片
          <br>不建议加画框和水印签名
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt>
      </el-dialog>
    </el-main>
    <el-aside width="30%" class="fb-aside">
      <h5 class="fb-title">标题</h5>
      <el-input  class="fb-width"></el-input>
      <h5 class="fb-title">作品描述</h5>
      <el-input
        class="fb-width"
        type="textarea"
        :rows="3"
        placeholder="说说你的拍摄经历...."
        
      ></el-input>
      <h5 class="fb-title">标签</h5>
      <span class="fb-title fb-tj">推荐:</span>
      <ul class="fb-ul fb-ulf">
        <li>人像</li>
        <li>风光</li>
        <li>城市</li>
        <li>旅行</li>
        <li>纪实</li>
      </ul>
      <ul class="fb-ul">
        <li>色彩</li>
        <li>手机</li>
        <li>黑白</li>
        <li>胶片</li>
        <li>抓拍</li>
      </ul>
      <el-input class="fb-width" type="textarea" :rows="3" ></el-input>
      <ul class="fb-ult">
        <li class="fb-li-left">(输入标签内容回车即可添加标签)</li>
        <li class="fb-li-right">1/10</li>
      </ul>
      <el-button class="fb-btn" plain>发&nbsp;&nbsp;&nbsp;布</el-button>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: "fabu",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
.fb {
  min-height: 541px;
  height: auto;
}
.fb-main {
  background-color: #f9f9f9;
}
.fb-aside {
  background-color: #f5f5f5;
  border-left: #ffffff solid 1px;
}
.fb-upload {
  margin: 35px;
}
.el-upload--picture-card {
  background-color: #ededef !important;
  border: #bbbbbb solid 1px !important;
}
.fb-title {
  margin-left: 10px;
}
.fb-width {
  text-align: center;
}
.fb-width input,
textarea {
  width: 350px !important;
  margin: 0 auto;
}
.fb-tj {
  color: #85888a;
  font-size: 13px;
  display: inline;
}
.fb-ulf {
  display: inline;
  padding: 0;
}
.fb-ul {
  margin: 5px 0 10px 0;
}
.fb-ul li {
  list-style: none;
  display: inline;
  margin: 0 10px 0 10px;
  color: #101010;
  font-size: 14px;
}
.fb-ult {
  list-style: none;
  margin: 0;
  padding: 0;
}
.fb-ult li {
  display: inline;
  font-size: 13px;
  color: #85888a;
}
.fb-li-left {
  margin-left: 8%;
}
.fb-li-right {
  margin-left: 30%;
}
.fb-btn {
  clear: both;
  width: 60%;
  display: block !important;
  margin: 5% auto !important;
  background-color: #d1b200 !important;
  color: #ffffff !important;
  font-size: 16px !important;
}
</style>

