<template>
  <div class="tj">
    <el-col class="tj-card" v-for="item in items" :key="item.id">
      <el-row type="flex" class="tj-card-row">
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="tj-card-head">
          <img :src="item.tx" class="tx">
        </el-col>
        <el-col :xs="6" :sm="9" :md="6" :lg="6" :xl="6" class="tj-card-head-name">
          <p v-text="item.username"></p>
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="tj-card-head-btn">
          <el-button size="mini" type="success">关注</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23">
          <img :src="item.url" class="tj-img" @click="show(item)">
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" class="tj-card-text">
          <p v-text="item.text"></p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="tj-card-foot">
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" :offset="2" class="tj-card-foot-btn">
          <el-button icon="el-icon-my-heart"></el-button>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" :offset="0">
          <p>{{item.like}}人喜欢</p>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" :offset="4" class="tj-card-foot-btn">
          <el-button icon="el-icon-my-comment" @click="show(item)"></el-button>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <p @click="show(item)" style="cursor: pointer">{{item.comments}}条评论</p>
        </el-col>
      </el-row>
    </el-col>
    <el-dialog :visible.sync="dialogVisible" width="70%">
      <div class="diahead">
        <div class="diahead-tx">
          <img :src="diaitem.tx">
        </div>
        <div class="diahead-name" v-text="diaitem.username"></div>
        <el-button size="medium" class="diahead-btn" type="success">关注</el-button>
      </div>
      <div class="dia-cont">
        <img :src="diaitem.url">
      </div>
      <div class="dia-text" v-text="diaitem.text"></div>
      <el-button icon="el-icon-my-heart" class="dia-like"></el-button>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="'热度('+diaitem.like+')'" name="hot">
          <div class="dia-tabs">
            <div class="hot" v-for="o in 5" :key="o">
              <div class="hot-tx">
                <img :src="diaitem.tx">
              </div>
              <div class="hot-name" v-text="diaitem.username"></div>喜欢此图片
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="'评论('+diaitem.comments+')'" name="comments">
          <div class="dia-tabs">
            <div class="dia-comment">
              <el-input class="dia-input" v-model="comment" placeholder="请输入内容"></el-input>
              <el-button class="dia-btn" type="primary">发 布</el-button>
            </div>
            <div class="hot" v-for="o in 5" :key="o">
              <div class="hot-tx">
                <img :src="diaitem.tx">
              </div>
              <div class="hot-name" v-text="diaitem.username"></div>
              <div class="coms-com" v-text="diaitem.text"></div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "tuijian",
  data() {
    return {
      dialogVisible: false,
      diaitem: [],
      activeName: "comments",
      comment:'',
      items: [
        {
          id: 0,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url: "https://xieranmaya.github.io/images/cats/photo-103450229.jpg",
          width: 675,
          height: 900
        },
        {
          id: 1,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url: "https://xieranmaya.github.io/images/cats/photo-108273877.jpg",
          width: 1170,
          height: 780
        },
        {
          id: 2,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url: "https://xieranmaya.github.io/images/cats/photo-115203323.jpg",
          width: 1170,
          height: 780
        },
        {
          id: 3,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url: "https://xieranmaya.github.io/images/cats/photo-23583825.jpg",
          width: 2048,
          height: 1536
        },
        {
          id: 4,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-123942383.jpg",
          width: 2000,
          height: 1333
        },
        {
          id: 5,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-124559545.jpg",
          width: 2000,
          height: 1333
        },
        {
          id: 6,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-132046989.jpg",
          width: 1170,
          height: 780
        },
        {
          id: 7,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-132118343.jpg",
          width: 2000,
          height: 1339
        },
        {
          id: 8,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-132311221.jpg",
          width: 1920,
          height: 1080
        },
        {
          id: 9,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-132586903.jpg",
          width: 2000,
          height: 1334
        },
        {
          id: 10,
          tx: "/img/tx6.27d6e020.jpg",
          username: "冬眠的熊",
          text: "月有阴晴圆缺",
          like: "8",
          comments: "20",
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-135203031.jpg",
          width: 1000,
          height: 668
        }
      ]
    };
  },
  mounted() {},
  methods: {
    show(item) {
      this.dialogVisible = true;
      this.diaitem = item;
    }
  }
};
</script> 
<style>
.tj {
  background-color: #ededef;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.tj-card {
  width: 17%;
  height: 350px;
  margin: 10px 10px 10px 25px;
  background-color: #fff;
  border: #bbbbbb solid 1px;
}
@media screen and (max-width: 900px) {
  .tj-card-head-btn {
    margin-top: 9%;
  }
}
@media screen and (max-width: 1024px) {
  .tj-card-head-btn {
    margin-top: 9%;
    margin-left: 5%;
  }
}
@media screen and (min-width: 1024px) {
  .tj-card-head-btn {
    margin-top: 9%;
    margin-left: 19%;
  }
}
.tj-card-head {
  margin-top: 4%;
  margin-right: 5%;
  margin-left: 2%;
  width: 20%;
  height: 100%;
}
.tj-card-head-name {
  margin-top: 7%;
}
.tj-card-head-name p {
  font-size: 0.1rem;
}
.tx {
  width: 100%;
  height: 100%;
}
.tj-img {
  width: 100%;
  height: 200px;
  cursor: pointer;
}
.tj-card-text {
  font-size: 14px;
}
.tj-card-foot {
  font-size: 10px;
  border-top: #aaaaaa solid 1px;
}
.el-icon-my-heart {
  width: 22px;
  height: 22px;
  background: url("../../assets/xin.png") center no-repeat;
  background-size: 22px 21px;
  text-align: center;
}
.el-icon-my-comment {
  width: 22px;
  height: 22px;
  background: url("../../assets/comments.png") center no-repeat;
  background-size: 22px 21px;
  text-align: center;
}
.tj-card-foot-btn button {
  padding: 0;
  border: none;
  margin-top: 25%;
}
.el-dialog__body {
  padding-top: 0;
}
.diahead {
  height: 50px;
  margin-bottom: 20px;
}
.diahead-tx {
  width: 50px;
  height: 50px;
  display: inline-block;
  text-align: center;
}
.diahead-tx img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.diahead-name {
  width: auto;
  margin: auto 30px;
  font-size: 20px;
  text-align: center;
  display: inline-block;
}
.diahead-btn {
  display: inline-block;
}
.dia-cont {
  margin: 0 auto;
  width: auto;
  height: auto;
  text-align: center;
}
.dia-text {
  margin: 50px 0 0 20px;
  display: inline-block;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial,
    simsun, "宋体";
  font-size: 1rem;
  color: #444;
}
.dia-tabs {
  background-color: #fafafa;
  overflow: hidden;
}
.dia-like {
  font-size: 15x;
  padding: 0;
  border: none;
  display: inline-block !important;
  text-align: center;
  float: right;
  position: relative;
  bottom: -50px;
}
.hot {
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0 10px 10px;
  font-size: 12px;
}
.hot-tx {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
}
.hot-tx img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.hot-name {
  display: inline-block;
  margin: 0 10px;
  color: #7594B3;
}
.coms-com{
  display: inline-block;
}
.dia-comment{
  margin:  10px auto;
  width: 800px;
}
.dia-input{
  display: inline-block;
  width: 700px;
}
.dia-btn{
  display: inline-block;
  margin-left: 10px;
}
</style>
