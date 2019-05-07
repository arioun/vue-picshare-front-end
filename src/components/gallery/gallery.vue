<template>
  <div class="ga">
    <div class="gbanner">
      <el-row type="flex" justify="center">
        <el-col :span="10" :offset="0" class="gel-col">
          <el-input placeholder="搜索图库内的图片" v-model="searchwords">
            <el-button slot="append" icon="el-icon-search" class="tuku-search" @click="search(searchwords)"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="gmain">
      <el-row type="flex" justify="center">
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" class="gel-col2">
          <img src="../../assets/dian.png">
        </el-col>
        <el-col :xs="9" :sm="7" :md="6" :lg="6" :xl="4" class="gel-col2">
          <h1>热门专题</h1>
        </el-col>
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" class="gel-col2">
          <img src="../../assets/dian.png">
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="gel-col3">
          <h1>THEME</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="height:46px;">
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" v-for="(sort,i) in sorts" v-if="i<10" :key="sort.id"
         :class="['gel-col4',sort.flag?'gtuku-active':'']">
          <el-button type="text" @click="sortacitve(sort.id)">{{sort.name}}</el-button>
        </el-col>
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" class="gel-col4 gsp">
          <el-button plain round size="mini" @click="more">更多</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="height:46px;" v-if="show">
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" v-for="(sort,i) in sorts" v-if="i>10" :key="sort.id"
          :class="['gel-col4',sort.flag?'gtuku-active':'']">
          <el-button type="text" @click="sortacitve(sort.id)">{{sort.name}}</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="gtuku">
      <div
        class="gtuku-div"
        v-for="(img) in imgs"
        :key="img.pid"
        :style="{width:img.weight*200/img.height+'px',flexGrow:img.weight*200/img.height}"
      >
        <i :style="{paddingBottom:img.height/img.weight*100+'%'}"></i>
        <img :src="img.position" @click="showdia(img)">
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="70%">
        <div class="dia-cont" @load="collectinfo(diaitem.pid)">
          <img :src="diaitem.position">
        </div>
        <el-button type="text" v-if="collect" @click="docollect(diaitem.pid)">收藏</el-button>
        <el-button type="text" style="color:#bfbfbf;" v-else @click="cancelcollect(diaitem.pid)">已收藏</el-button>
        <!--<el-button type="text" @click="downpic(diaitem.position)">下载</el-button>-->
      </el-dialog>
  </div>
</template>

<script>
import  saveAs  from 'file-saver'
var FileSaver = require('file-saver');
export default {
  name: "gallery",
  components: {
    saveAs
  },
  data() {
    return {
      show:false,
      searchwords:'',
      dialogVisible: false,
      uid:localStorage.getItem('uid'),
      collect:true,
      diaitem: [],
      imgs: [],
      sorts:[
        {id:1,name:"城市",flag:true},
        {id:2,name:"星空",flag:false},
        {id:3,name:"旅游",flag:false},
        {id:4,name:"春天",flag:false},
        {id:5,name:"教育",flag:false},
        {id:6,name:"美食",flag:false},
        {id:7,name:"健身",flag:false},
        {id:8,name:"风景",flag:false},
        {id:9,name:"金融",flag:false},
        {id:10,name:"背景",flag:false},
        {id:11,name:"医疗",flag:false},
        {id:12,name:"植物",flag:false},
        {id:13,name:"阅读",flag:false},
        {id:14,name:"动物",flag:false},
        {id:15,name:"科技",flag:false},
      ]
    };
  },
  created(){
    this.getdata(1)
  },
  methods: {
    sortacitve(key){
      for (let i= 0; i<15; i++) {
        this.sorts[i].flag=false;
      }
      this.sorts[key-1].flag=true;
      this.getdata(key)
    },
    getdata(tid){
      this.$http.post('/api/typeSearch',{tid:tid},{emulateJSON:true})
      .then(res=>{
        this.imgs=Object.assign(res.body);
      })
    },
    more(){
      this.show?this.show=false:this.show=true;
    },
    search(words){
      this.$router.push({path:'/gallery/search',query:{keywords:words}});
    },
    showdia(item) {
      this.dialogVisible = true;
      this.diaitem = item;
    },
    collectinfo(pid){
      this.$http.post('/api/pictureCollectDelete',{uid:this.uid,pid:pid},{emulateJSON:true})
      .then(res=>{
        if(res.body.message=="未点赞"){
          this.collect=true
        }else{
          this.$http.post('/api/pictureCollect',{uid:this.uid,pid:pid},{emulateJSON:true})
          .then(res=>{this.collect=false})
        }
      })
    },
    docollect(pid){
      if (this.uid) {
        this.$http.post('/api/pictureCollect',{uid:this.uid,pid:pid},{emulateJSON:true})
      .then(res=>{
        if(res.body.message=="收藏成功"){
          this.$message({
              message: "收藏成功",
              type: "success",
              customClass: "zIndex"
            });
        }else{
          this.$message({
              message: "您已经收藏",
              type: "danger",
              customClass: "zIndex"
            });
        }
      })
      } else {
        this.$message({
              message: "您还未登录",
              type: "warning",
              customClass: "zIndex"
            });
      }
      
    },
    cancelcollect(pid){
      this.$http.post('/api/pictureCollectDelete',{uid:this.uid,pid:pid},{emulateJSON:true})
      .then(res=>{
        if(res.body.message=="取消收藏成功"){
          this.$message({
              message: "取消收藏成功",
              type: "success",
              customClass: "zIndex"
            });
        }else{
          this.$message({
              message: "取消收藏失败",
              type: "danger",
              customClass: "zIndex"
            });
        }
      })
    },
    downpic(url){
      this.downloadIamge(url)
      //FileSaver.saveAs(url, "image.jpg");
    },
    downloadIamge(imgsrc, name) {
    let image = new Image();
	  // 解决跨域 Canvas 污染问题
	  image.setAttribute("crossOrigin", "anonymous");
	  image.onload = function() {
	    let canvas = document.createElement("canvas");
	    canvas.width = image.width;
	    canvas.height = image.height;
	    let context = canvas.getContext("2d");
	    context.drawImage(image, 0, 0, image.width, image.height);
	    let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
	    let a = document.createElement("a"); // 生成一个a元素
	    let event = new MouseEvent("click"); // 创建一个单击事件
	    a.download = name || "photo"; // 设置图片名称
	    a.href = url; // 将生成的URL设置为a.href属性
	    a.dispatchEvent(event); // 触发a的单击事件
    }
	image.src = imgsrc;
  },
  },
};
</script>

<style>
.ga{
  min-height: 300px;
  height: auto;
  width: auto;
}
.gbanner {
  width: 100%;
  height: 400px;
  background: url("../../assets/tuku1.jpg") center no-repeat;
  background-size: cover;
}
.gel-col {
  padding-top: 15%;
}
.gel-col input {
  height: 50px;
  opacity: 0.8;
  border-right: none;
}
.tuku-search{
  background-color: rgba(0,0,0,0.1) !important;
  border: none !important;
}
.gel-col i {
  opacity: 1;
  color: #101010;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 5px;
}
.gmain {
  margin-top: 1%;
  margin-bottom: 1%;
  height: auto;
}
.gel-col2 {
  height: 60px;
}
.gel-col2 h1 {
  text-align: center;
  letter-spacing: 0.6em;
  font-size: 2rem;
  padding-left: 6%;
}
.gel-col2 img {
  width: 18px;
  height: 18px;
  margin-top: 70%;
  margin-left: 37%;
}
.gel-col3 h1 {
  text-align: center;
  letter-spacing: 0.4em;
  font-size: 1.3rem;
  padding-left: 5%;
}
.gel-col4{
  text-align: center;
  margin: 2px;
}
.gel-col4 span {
  color: #bfbfbf;
  text-align: center;
}
.gsp {
  margin-top: 0.4%;
}
.gtuku-active{
  border-bottom: #44a0ff solid 2px;
}
.gtuku-active span{
  color: #000;
}
.gtuku {
  height: auto;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto 50px auto;
}

.gtuku:after {
  content: "";
  flex-grow: 999999999;
}

.gtuku-div {
  margin: 2px;
  background-color: #ededef;
  position: relative;
  overflow: hidden;
}
.gtuku-div i {
  display: block;
}
.gtuku-div img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  cursor: pointer;
  transition: all 0.6s;
}
.gtuku-div img:hover{
  transform: scale(1.2);
}
.el-dialog__body {
  padding-top: 0;
}
.el-tabs__content {
  padding: 0 !important;
}

.dia-cont {
  margin: 20px auto;
  width: auto;
  height: auto;
  text-align: center;
}
.dia-cont img{
  width: 100%;
  height: 100%;
}
</style>