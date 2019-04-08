<template>
  <div>
    <div class="aldetail-head">
      <el-button size="mini" class="aldetail-head-btn">上传图片</el-button>
    </div>
    <div class="aldetail">
      <div
        class="aldetail-div"
        v-for="(img) in items"
        :key="img.id"
        :style="{width:img.width*200/img.height+'px',flexGrow:img.width*200/img.height}"
      >
        <div
          class="aldetail-img"
          :style="{backgroundImage:'url('+img.url+')',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',width:'100%',height:'100%'}"
        ></div>
        <div class="aldetail-shadow">
          <div class="aldetail-det">
            <el-button type="text" @click="show(img)">查看详情</el-button>
          </div>
          <div class="aldetail-btn">
            <el-button type="text">删除</el-button>
          </div>
        </div>
        <i :style="{paddingBottom:img.height/img.width*100+'%'}"></i>
      </div>

      <el-dialog :visible.sync="dialogVisible" width="70%">
        <div class="dia-cont">
          <img :src="diaitem.url">
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "albumdetail",
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
.aldetail-head {
  display: block;
  margin: 10px 0;
  position: relative;
  right: -91.4%;
}
.aldetail-head-btn {
  margin-top: 8px;
  border: #d1b200 solid 1px !important;
}
.aldetail-head-btn span {
  color: #d1b200 !important;
}
.aldetail {
  min-height: 300px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 0 auto;
}
.aldetail:after {
  content: "";
  flex-grow: 999999999;
}
.aldetail-div {
  margin: 2px;
  background-color: violet;
  position: relative;
  overflow: hidden;
}
.aldetail-div i {
  display: block;
}
.aldetail-img {
  transition: all 0.6s;
}
.aldetail-img:hover {
  transform: scale(1.2);
}
.aldetail-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 0.2s;
}
.aldetail-shadow:hover {
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
}
.aldetail-det {
  color: #fff;
  position: relative;
  top: 40%;
  left: 40%;
}
.aldetail-det span {
  color: #fff;
}
.aldetail-btn {
  position: relative;
  top: 65%;
  left: 85%;
}
.aldetail-btn span {
  color: #fff;
  font-size: 12px;
}
.aldetail-lc {
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
</style>