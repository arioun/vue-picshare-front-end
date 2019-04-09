<template>
  <div class="al">
    <el-row class="al-row">
      <el-col :span="5" class="al-col" v-for="(item) in items" :key="item.id">
        <div class="al-two" :style="{backgroundImage:'url('+item.bgurl2+')'}">
          <div class="al-one" :style="{backgroundImage:'url('+item.bgurl1+')'}" @click="detail"></div>
        </div>
        <ul class="al-ul">
          <li class="al-name">{{item.alname}}</li>
          <li class="al-num">{{item.alnum}}张</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "album",
  data() {
    return {
      style: "",
      comName: this.$route.path,
      items: [
        {
          id: "1",
          bgurl1:
            "https://xuejiawei1.github.io/vue-picshare-front-end/src/assets/tj5.jpg",
          bgurl2:
            "https://xuejiawei1.github.io/vue-picshare-front-end/src/assets/tj4.jpg",
          alname: "城市",
          alnum: "15"
        },
        {
          id: "2",
          bgurl1:
            "https://xuejiawei1.github.io/vue-picshare-front-end/src/assets/tj5.jpg",
          bgurl2:
            "https://xuejiawei1.github.io/vue-picshare-front-end/src/assets/tj4.jpg",
          alname: "城市",
          alnum: "15"
        },
        {
          id: "3",
          bgurl1:
            "https://xuejiawei1.github.io/vue-picshare-front-end/src/assets/tj5.jpg",
          bgurl2:
            "https://xuejiawei1.github.io/vue-picshare-front-end/src/assets/tj4.jpg",
          alname: "城市",
          alnum: "15"
        }
      ]
    };
  },
  methods: {
    detail() {
      if (/others/gi.test(this.comName)) {
        this.$router.push({ path: "/community/others/album/detail" });
      } else {
        this.$router.push({ path: "/community/mycommunity/myalbum/detail" });
      }
    }
  }
};
</script>
<style>
.al {
  margin-top: 10px;
}
.al-row {
  margin-left: 10px;
}
.al-col {
  width: 300px;
  height: 240px;
  margin: 10px 10px 10px 10px;
}
.al-one {
  width: 280px;
  height: 200px;
  background: no-repeat;
  background-size: cover;
  position: relative;
  left: 15px;
  top: 10px;
  cursor: pointer;
}
.al-two {
  width: 280px;
  height: 200px;
  background: no-repeat;
  background-size: cover;
}
.al-ul {
  margin: 15px 0 0 0;
  padding: 0;
}
.al-ul li {
  list-style: none;
  display: inline-block;
}
.al-name {
  float: left;
  font-size: 15px;
  color: #000;
}
.al-num {
  font-size: 5px;
  color: #85888a;
  float: right;
}
.al-btn {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
</style>
