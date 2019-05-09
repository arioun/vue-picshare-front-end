<template>
  <div class="mywork">
  <el-row type="flex" justify="center">
      <el-col :span="23">
        <waterfall class="mywork-div" :col="col" :width="itemWidth" :gutterWidth="gutterWidth" :data="imgs" @loadmore="loadmore"
      @scroll="scroll">
      <template>
        <div class="mywork-item" v-for="img in imgs" :key="img.id">
          <div class="mywork-img">
            <img :src="img.position">
          </div>
          <div class="mywork-shadow">
          <div class="mywork-det">
            <el-button type="text" @click="show(img);getpicdetail(img.pid)">查看详情</el-button>
          </div>
          <div class="mywork-line">
            <div class="mywork-lc">{{img.like_num}}喜欢</div>
            <div class="my-work-space"></div>
            <div v-if="my" class="mywork-btn"><el-button type="text" @click="deletepic(img.pid)">删除</el-button></div>
          </div>
      </div>
        </div>
      </template>
    </waterfall>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="dialogVisible" width="70%" class="tj-dia">
      <div class="mywork-dia-img">
        <img :src="diaitem.position">
      </div>
      <div class="mywork-dia-text" v-text="diaitem.description"></div>
        <div class="tj-dia-like">
        <el-button icon="el-icon-gz-heart"></el-button>
          <span v-text="diaitem.like_num"></span>
        </div>
        <div class="mywork-tag">标签：{{diaitem.type_name}}</div>
          <div class="mywork-dia-tabs">
            <div class="mywork-hot" v-for="com in picdetail.comment" :key="com.cid">
              <div class="mywork-hot-tx">
                <img :src="com.from_head_image">
              </div>
              <div class="mywork-hot-name">{{com.from_username?com.from_username:'注册用户'}}</div>
              <div class="mywork-coms-com">{{com.content}}</div>
            </div>
          </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "mywork",
  data() {
    return {
      dialogVisible: false,
      diaitem: [],
      picdetail:[],
      activeName: "comments",
      col:5,
      uid:this.$route.query.uid,
      my:this.$route.query.my,
      avatar:'http://188.131.192.194/head_images/5LSk0zVtyKDq9UciiWPab50dwjoNI2324KtwSyBD.jpeg',
      imgs:[]
    };
  },
  created(){
    this.getmywork()
  },
  computed: {
    itemWidth() {
      return 138 * 0.5 * (document.documentElement.clientWidth /310);
    },
    gutterWidth() {
      return 9 * 0.5 * (document.documentElement.clientWidth /400);
    }
  },
  methods: {
    scroll() {
    },
    loadmore() {
    },
    getmywork(){
    this.$http.post('/api/myPictures',{uid:this.uid},{emulateJSON:true})
      .then(res=>{
        this.imgs = Object.assign(res.body);
      })
    },
    getpicdetail(pid){
      this.$http.post('/api/pictureDetail',{pid:pid},{emulateJSON:true})
      .then(res=>{
        this.picdetail=Object.assign(res.body);
      })
    },
    deletepic(pid){
      this.$http.post('/api/delete',{uid:this.uid,pid:pid},{emulateJSON:true})
      .then(res=>{
        if (res.body.message=="删除成功") {
          this.$message({
              message: "删除成功",
              type: "success",
              customClass: "zIndex"
            });
          this.getmywork()
        }else{
          this.$message({
              message: "删除失败",
              type: "danger",
              customClass: "zIndex"
            });
        }
      })
    },
    show(item) {
      this.dialogVisible = true;
      this.diaitem = item;
    }
  }
};
</script>

<style>
.mywork {
  min-height: 300px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  width:auto;
  margin: 0 auto;
}
.mywork-div {
  margin: 20px auto;
}
.mywork-item{
  text-align: center;
  margin-bottom: 20px;
  position: relative;
}
.mywork-img img{
  width: 100%;
  height: 100%;
}

.mywork-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 0.2s;
}
.mywork-shadow:hover {
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
}
.mywork-det {
  color: #fff;
  position: absolute;
  top: 35%;
  left: 40%;
}
.mywork-det span {
  color: #fff;
}
.mywork-line{
  position: absolute;
  top: 75%;
  width: 100%;
}
.mywork-lc {
  color: #fff;
  font-size: 12px;
  display: inline-block;
}
.my-work-space{
  display: inline-block;
  width: 50%;
}
.mywork-btn {
  display: inline-block;
}
.mywork-btn span {
  color: #fff;
  font-size: 12px;
}

.el-dialog__body {
  padding-top: 0;
}
.mywork-dia-img {
  margin: 10px auto;
  width: auto;
  height: auto;
  text-align: center;
}
.mywork-dia-img img{
  width: 100%;
  height: 100%;
}
.mywork-dia-text {
  margin: 0 0 0 20px;
  display: inline-block;
  font-size: 1rem;
  color: #444;
}
.mywork-dia-tabs {
  margin-top: 40px;
  background-color: #fafafa;
  overflow: hidden;
}
.mywork-hot {
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0 10px 10px;
  font-size: 12px;
}
.mywork-hot-tx {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
}
.mywork-hot-tx img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.mywork-hot-name {
  display: inline-block;
  margin: 0 10px;
  color: #7594b3;
}
.mywork-coms-com {
  display: inline-block;
}
.mywork-tag{
  margin-top: 5px;
  margin-left: 10px;
}
</style>


