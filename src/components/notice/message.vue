<template>
  <div class="me">
    <el-tabs v-model="activeName">
      <el-tab-pane label="评论" name="first" class="me-tab">
        <div class="me-item" v-for="item of items" :key="item.id">
          <ul class="me-ul">
            <li class="me-tx">
              <img :src="item.tx">
            </li>
            <li class="me-user" v-text="item.username"></li>
            <li class="me-do">评论了</li>
            <li class="me-thing">你的作品</li>
            <li class="me-pic">
              <img :src="item.url">
            </li>
            <li class="me-time">53分钟前</li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="喜欢" name="second" class="me-tab">
        <div class="me-item" v-for="item of items" :key="item.id">
          <ul class="me-ul">
            <li class="me-tx">
              <img :src="item.tx">
            </li>
            <li class="me-user" v-text="item.username"></li>
            <li class="me-do">评论了</li>
            <li class="me-thing">你的作品</li>
            <li class="me-pic">
              <img :src="item.url">
            </li>
            <li class="me-time">53分钟前</li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      activeName: "first",
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
        }
      ]
    };
  }
};
</script>

<style>
.me {
  margin: 0 auto;
}
.me-tab {
  margin: 0 auto;
}
.el-tabs__nav {
  margin-left: 46%;
}
.el-tabs__header {
  margin-bottom: 0 !important;
}
.me-ul {
  list-style: none;
  margin: 0 auto;
  display: block;
  width: 550px;
  padding: 0;
}
.me-ul li {
  display: inline;
}
.me-tx {
  margin-right: 10px;
  position: relative;
  top: -15px;
}
.me-tx img {
  border-radius: 50%;
  width: 45px;
  height: 45px;
}
.me-user {
  position: relative;
  top: -30px;
  margin-right: 10px;
  color: #1936fa;
  font-size: 14px;
}
.me-do {
  position: relative;
  top: -30px;
  margin-right: 10px;
  font-size: 14px;
}
.me-thing {
  position: relative;
  top: -30px;
  margin-right: 100px;
  font-size: 14px;
}
.me-pic {
  position: relative;
  top: -2px;
}
.me-pic img {
  height: 70px;
  width: 70px;
}
.me-time {
  position: relative;
  top: -30px;
  margin-left: 50px;
  color: #bbbbbb;
  font-size: 10px;
}
.me-item {
  border-bottom: #bbbbbb solid 1px;
  height: 80px;
  width: auto;
  margin-top: 10px;
}
</style>