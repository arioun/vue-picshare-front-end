<template>
  <el-container class="fb">
    <el-main class="fb-main">
      <el-upload
        class="fb-upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :auto-upload="false"
        :limit="6"
        :file-list="fileList"
        :on-exceed="maxnum"
        accept=".jpg, .jpeg, .png, .JPG, .JPEG"
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
      <el-input class="fb-width" v-model="title"></el-input>
      <h5 class="fb-title">作品描述</h5>
      <el-input
        class="fb-width"
        type="textarea"
        :rows="3"
        placeholder="说说你的拍摄经历...."
        v-model="description"
      ></el-input>
      <h5 class="fb-title">标签</h5>
      <span class="fb-title fb-tj">推荐:</span>
      <ul class="fb-ul fb-ulf">
        <li
          v-for="(item,i) of categories"
          :key="item.id"
          v-if="i<5"
          v-text="item.category"
          @click="handleInputConfirm(item.category)"
        ></li>
      </ul>
      <ul class="fb-ul">
        <li
          v-for="(item,i) of categories"
          :key="item.id"
          v-if="i>5"
          v-text="item.category"
          @click="handleInputConfirm(item.category)"
        ></li>
      </ul>
      <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
      <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini"
        @keyup.enter.native="handleInputConfirm(inputValue)"></el-input>
      <el-button class="button-new-tag" size="small" @click="showInput" v-if="dynamicTags.length<10">+</el-button>
      <ul class="fb-ult">
        <li class="fb-li-left">(输入标签内容回车即可添加标签)</li>
        <li class="fb-li-right">{{dynamicTags.length}}/10</li>
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
      dynamicTags: [],
        inputVisible: false,
        inputValue: '',
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      title: "",
      description: "",
      tag: "",
      tagList: [],
      categories: [
        {
          id: 0,
          category: "人像"
        },
        {
          id: 1,
          category: "风光"
        },
        {
          id: 2,
          category: "城市"
        },
        {
          id: 3,
          category: "旅行"
        },
        {
          id: 4,
          category: "纪实"
        },
        {
          id: 5,
          category: "色彩"
        },
        {
          id: 6,
          category: "手机"
        },
        {
          id: 7,
          category: "黑白"
        },
        {
          id: 8,
          category: "胶片"
        },
        {
          id: 9,
          category: "抓拍"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {},
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    maxnum() {
      this.$alert("最多只能上传6张图片", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm(inputValue) {
        let flag=false;
        for (let i = 0; i < this.dynamicTags.length; i++) {
          if(inputValue==this.dynamicTags[i]){
            flag=true;
          }
        }
        if(flag){
          this.inputVisible = false;
          this.inputValue = '';
        }else if(inputValue){
          this.dynamicTags.push(inputValue);
          this.inputVisible = false;
          this.inputValue = '';
        }
      },
  }
};
</script>

<style>

.el-tag{
  margin-left: 10px !important;
}
  .button-new-tag {
    margin-left: 10px;
    height: 30px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  
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
  cursor: pointer;
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

