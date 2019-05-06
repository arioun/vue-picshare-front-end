<template>
  <div class="not">
    <ul class="not-ul">
      <li v-for="item of items" :key="item.id">
        <div class="not-message">{{item.introduce}}</div>
        <!-- <div class="not-date">3月12日</div>-->
        <div class="not-img"><img :src="item.position" ></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "notice",
  data() {
    return {
      uid: localStorage.getItem("uid"),
      items: []
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http
        .post("/api/pushList", { uid: this.uid }, { emulateJSON: true })
        .then(res => {
          console.log(res);

          this.items = Object.assign(res.body);
        });
    }
  }
};
</script>

<style>
.not{
    min-height: 520px;
    height: auto;
}
.not-ul {
  list-style: none;
  display: block;
  padding: 0;
  margin: 20px 0 0 0;
}
.not-ul li {
  list-style: none;
  font-size: 14px;
  margin: 0 auto;
  display: flex;
    align-items: center;
  width: 55%;
  min-height: 75px;
  height: auto;
  border-bottom: 1px solid #e0e0e0;
}
.not-active {
  background-color: #fff8db;
}
.not-message {
  display: inline-block;
  width: 80%;
  margin: 20px 0;
}
.not-img{
    display: inline-block;
    width: 100px;
    height: 100px;
}
.not-img img{
    width: 100%;
    height:100%;
}
.not-date {
  font-size: 12px;
  color: #85888a;
  float: right;
  margin: 25px 0;
}
.not-more {
  display: inline-block;
  margin-left: 20px;
}
</style>