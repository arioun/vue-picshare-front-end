<template>
  <div class="follows">
      <span class="follows-title">您关注了 {{followsnum}} 位用户</span>
    <el-row class="follows-row">
      <el-col :span="5" v-for=" item in items" :key="item.uid" class="follows-col">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="card-bg"></div>
            <ul class="follows-ul">
                <li class="follows-tx"><img :src="item.head_image" @click="others(item.uid)" ></li>
                <li class="follows-name" @click="others(item.uid)">{{item.username?item.username:'注册用户'}}</li>
                <li class="follows-btn">
                    <el-button size="mini" @click="deletefocus(item.uid)">取消关注</el-button>
                </li>
            </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "follows",
  data() {
      return {
          uid:this.$route.query.uid,
          followsnum:this.$route.query.follows,
          items:[]
      }
  },
  created () {
      this.getfollows()
  },
  methods: {
      others(uid){
      this.$router.push({path: "/community/others",query:{my:false,uid:uid}})
    },
    getfollows(){
        this.$http.post('/api/focus',{uid:this.uid},{emulateJSON:true})
        .then(res=>{
            this.items=Object.assign(res.body);
        })
    },
    deletefocus(uuid){
    this.$http.post('/api/deleteFocus',{uid:this.uid,uuid:uuid},{emulateJSON:true})
    .then(res=>{
        this.getfollows()
    })
    }
  },
};
</script>

<style>
.follows{
    height: auto;
    min-height: 300px;
}
.follows-title{
    display: block;
    margin-left: 50px;
    margin-top: 15px;
    color: #85888a;
}

.follows-col{
    margin: 15px 10px 15px 40px;
}
.card-bg{
    background: url('../../assets/shequ-bg.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100px;
}
.follows-ul{
    list-style: none;
    margin: 0 0 0 10px;
    padding: 0;
    height: 60px;
}
.follows-tx{
    width: 80px;
    height: 80px;
    position: relative;
    top: -40px;
}
.follows-tx img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: #fff solid 2px;
}
.follows-name{
    cursor: pointer;
    position: relative;
    top: -60px;
    margin-left: 15px;
}
.follows-btn{
    position: relative;
    top: -60px;
    margin-left: 20px;
}
.follows-ul li{
    display: inline-block;
}
.follows-ul2{
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0;
}
.follows-ul2 li{
    display: inline;
    font-size: 14px;
    color: #85888a;
}
.follows-space::before{
    content: "/";
  color: #e0e0e0;
  font-size: 14px;
  margin: 0 10px;
}
.follows-userintr{
    display: block;
    margin:10px 0 15px 15px; 
    font-size: 14px;
    color: #85888a;
}
</style>

