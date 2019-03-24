<template>
  <div class="al">
    <el-row class="al-row">
      <el-col :span="5" class="al-col" v-for="(item) in items" :key="item.id">
        <router-link to="/community/mycommunity/detail">
          <div class="al-two" :style="{backgroundImage:'url('+item.bgurl2+')'}">
            <div class="al-one" :style="{backgroundImage:'url('+item.bgurl1+')'}"></div>
          </div>
          <ul class="al-ul">
            <li class="al-name">{{item.alname}}</li>
            <li class="al-num">{{item.alnum}}张</li>
          </ul>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "album",
  data() {
    return {
      style:'/img/tj5.0df7aaca.jpg',
      items: [
        {
          id: '1',
          bgurl1: "/img/tj5.0df7aaca.jpg",
          bgurl2: "/img/tj4.ec69682f.jpg",
          alname: "城市",
          alnum: "15"
        },
        {
          id: '2',
          bgurl1: "/img/tj5.0df7aaca.jpg",
          bgurl2: "/img/tj4.ec69682f.jpg",
          alname: "城市",
          alnum: "15"
        },
        {
          id: '3',
          bgurl1: "/img/tj5.0df7aaca.jpg",
          bgurl2: "/img/tj4.ec69682f.jpg",
          alname: "城市",
          alnum: "15"
        },
      ],
      methods: {
        show(i){

        }
      },
    };
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
