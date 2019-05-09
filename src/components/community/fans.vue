<template>
  <div class="fans">
      <span class="fans-title">共有 {{fansnum}} 位用户关注了您</span>
    <el-row class="fans-row">
      <el-col :span="5" v-for=" item in items" :key="item.uid" class="fans-col">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="card-bg"></div>
            <ul class="fans-ul">
                <li class="fans-tx"><img :src="item.head_image" @click="others(item.uid)"></li>
                <li class="fans-name" @click="others(item.uid)">{{item.username?item.username:'注册用户'}}</li>
                <li class="fans-btn">
                    <el-button  size="mini" @click="follow(item.uid)">关注</el-button>
                </li>
            </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "fans",
  data() {
      return {
          uid:this.$route.query.uid,
          fansnum:this.$route.query.fans,
          items:[],
          arr:[]
      }
  },
  created () {
    this.getfans()  
  },
  methods: {
      others(uid){
      this.$router.push({path: "/community/others",query:{my:false,uid:uid}})
    },
    getfans(){
        this.$http.post('/api/fans',{uid:this.uid},{emulateJSON:true})
        .then(res=>{
            this.items=Object.assign(res.body);
           /* var that=this;
            var temp1=[];
            for(let i=0;i<res.body.length;i++){
            var temp2=[];
            that.$http.post('/api/addFocus',{uid:that.uid,uuid:res.body[i].uid},{emulateJSON:true})
        .then(res=>{
            console.log(res);
            if (res.body.message=='关注成功') {
                var temp=[{flag:false}];
                temp1=temp1.concat(temp)
                that.deletefocus(res.body[i].uid)
            }else if(res.body.message=='关注失败'){
                var temp=[{flag:true}];
                temp1=temp1.concat(temp)
            }
            console.log(temp1);
            temp2=temp2.concat(temp1)
            })
            //temp1.concat(this.tryfollow(res.body[i].uid)) 
              console.log(this.tryfollow(res.body[i].uid));
            }*/
        })
    },
    tryfollow(uuid){
        var temp=[]
        this.$http.post('/api/addFocus',{uid:this.uid,uuid:uuid},{emulateJSON:true})
        .then(res=>{
            if (res.body.message=='关注成功') {
                temp=[{flag:false}]
                //this.deletefocus(uuid)
            }else{
                temp=[{flag:true}]
            }
            console.log(temp);
            return temp
        })
        
    },
      follow(uuid){
        this.$http.post('/api/addFocus',{uid:this.uid,uuid:uuid},{emulateJSON:true})
        .then(res=>{
            if (res.body.message=="关注成功") {
          this.$message({
              message: "关注成功",
              type: "success",
              customClass: "zIndex"
            });
        }else{
          this.$message({
              message: "您已关注",
              type: "warning",
              customClass: "zIndex"
            });
        }
        })
      },
      deletefocus(uuid){
    this.$http.post('/api/deleteFocus',{uid:this.uid,uuid:uuid},{emulateJSON:true})
    .then(res=>{
        if (res.body.message=="取消关注成功") {
            this.getfans()
          this.$message({
              message: "取消关注成功",
              type: "success",
              customClass: "zIndex"
            });
        }else{
          this.$message({
              message: "取消关注失败",
              type: "warning",
              customClass: "zIndex"
            });
        }
    })
    }
  }
};
</script>

<style>
.fans{
    height: auto;
    min-height: 300px;
}
.fans-title{
    display: block;
    margin-left: 50px;
    margin-top: 15px;
    color: #85888a;
}

.fans-col{
    margin: 15px 10px 15px 40px;
}
.card-bg{
    background: url('../../assets/shequ-bg.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100px;
}
.fans-ul{
    list-style: none;
    margin: 0 0 0 10px;
    padding: 0;
    height: 60px;
}
.fans-tx{
    width: 80px;
    height: 80px;
    position: relative;
    top: -40px;
}
.fans-tx img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: #fff solid 2px;
}
.fans-name{
    cursor: pointer;
    position: relative;
    top: -60px;
    margin-left: 15px;
}
.fans-btn{
    position: relative;
    top: -60px;
    margin-left: 25px;
}
.fans-ul li{
    display: inline-block;
}
.fans-ul2{
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0;
}
.fans-ul2 li{
    display: inline;
    font-size: 14px;
    color: #85888a;
}
.fans-space::before{
    content: "/";
  color: #e0e0e0;
  font-size: 14px;
  margin: 0 10px;
}
.fans-userintr{
    display: block;
    margin:10px 0 15px 15px; 
    font-size: 14px;
    color: #85888a;
}
</style>
