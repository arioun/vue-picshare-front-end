<template>
  <div class="mywork">
    <div
      class="mywork-div"
      v-for="(img) in items"
      :key="img.id"
      :style="{width:img.width*200/img.height+'px',flexGrow:img.width*200/img.height}"
    >
      <div
        class="mywork-img"
        :style="{backgroundImage:'url('+img.url+')',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',width:'100%',height:'100%'}"
      ></div>
      <div class="mywork-shadow">
        <div class="mywork-det">
          <el-button type="text" @click="show(img)">查看详情</el-button>
        </div>
        <div class="mywork-btn">
          <el-button type="text">删除</el-button>
        </div>
        <div class="mywork-lc">{{img.like}}喜欢/{{img.comments}}评论</div>
      </div>
      <i :style="{paddingBottom:img.height/img.width*100+'%'}"></i>
    </div>

    <el-dialog :visible.sync="dialogVisible" width="70%" class="tj-dia">
      <div class="dia-cont">
        <img :src="diaitem.url">
      </div>
      <div class="dia-text" v-text="diaitem.text"></div>
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
  name: "mywork",
  data() {
    return {
      dialogVisible: false,
      diaitem: [],
      activeName: "comments",
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
          height: 900,
          flag: false
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
          height: 780,
          flag: false
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
          height: 780,
          flag: false
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
          height: 1536,
          flag: false
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
          height: 1333,
          flag: false
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
          height: 1333,
          flag: false
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
          height: 780,
          flag: false
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
          height: 1339,
          flag: false
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
          height: 1080,
          flag: false
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
          height: 1334,
          flag: false
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
          height: 668,
          flag: false
        }
      ]
    };
  },
  methods: {
    show(item) {
      this.dialogVisible = true;
      this.diaitem = item;
    }
  }
};
</script>

<style>
.sq-row {
  margin-top: 15px;
}
.sq-work {
  margin-right: 20px;
  text-align: center;
}
.sq-work img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 200px;
  min-height: 200px;
}
.mywork {
  min-height: 300px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 0 auto;
}
.mywork:after {
  content: "";
  flex-grow: 999999999;
}

.mywork-div {
  margin: 2px;
  background-color: violet;
  position: relative;
  overflow: hidden;
}
.mywork-div i {
  display: block;
}
.mywork-img {
  transition: all 0.6s;
}
.mywork-img:hover {
  transform: scale(1.2);
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
  position: relative;
  top: 40%;
  left: 40%;
}
.mywork-det span {
  color: #fff;
}
.mywork-btn {
  position: relative;
  top: 65%;
  left: 85%;
}
.mywork-btn span {
  color: #fff;
  font-size: 12px;
}
.mywork-lc {
  color: #fff;
  font-size: 12px;
  position: relative;
  top: 55%;
  left: 5%;
}

.el-dialog__body {
  padding-top: 0;
}
.el-tabs__content {
  padding: 0 !important;
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
.el-tabs__nav {
  margin-left: 0 !important;
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
  color: #7594b3;
}
.coms-com {
  display: inline-block;
}
</style>


