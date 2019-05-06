<template>
  <div class="sq">
    <div class="head" :style="{backgroundImage:'url('+bgurl+')'}">
      <div class="head-bg">
        <ul class="sq-ul">
          <li class="sq-tx">
            <img :src="txurl">
          </li>
          <li class="sq-li2">
            <ul class="sq-ul2">
              <li class="sq-name" v-text="username"></li>
              <li>
                <ul class="sq-ul3">
                  <li>
                      <el-button type="text" @click="show('follows');showfollows()">关注&nbsp;{{follows}}</el-button>
                  </li>
                  <li>
                      <el-button type="text" @click="show('fans');showfans()">粉丝&nbsp;{{fans}}</el-button>
                  </li>
                </ul>
              </li>
              <li class="sq-intr" v-text="introduction"></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <el-container>
      <el-header>
        <el-row type="flex" justify="center" class="sq-head">
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" :class="['sq-btn',flag1?'sq-btn-act':'']">
            <el-button type="text" @click="show('mywork');showwork()">我的作品</el-button>
          </el-col>
          <el-col
            :xs="1"
            :sm="1"
            :md="1"
            :lg="1"
            :xl="1"
            :class="['sq-btn','sq-like',flag2?'sq-btn-act':'']"
          >
            <el-button type="text" @click="show('mylike');showlike()">喜欢</el-button>
          </el-col>
          <el-col
            :xs="1"
            :sm="1"
            :md="1"
            :lg="1"
            :xl="1"
            :class="['sq-btn','sq-collection',collection?'sq-btn-act':'']"
          >
            <el-button type="text" @click="show('mycollection');showcollection()">收藏</el-button>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" :class="['sq-btn',flag3?'sq-btn-act':'']">
            <el-button type="text" @click="show('myalbum');showalbum()">相册</el-button>
          </el-col>
          <div v-if="flag4" :class="[flag5?'sq-head-btn3':'sq-head-btn']">
            <el-button size="mini" class="mysq-btn-al" @click="createalbum">新建相册</el-button>
          </div>
        </el-row>

        <el-dialog title="新建相册" :visible.sync="newalbum">
          <el-form>
            <el-form-item label="相册名称" :label-width="formLabelWidth1">
              <el-input v-model="alname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="相册描述" :label-width="formLabelWidth1">
              <el-input v-model="alinfo" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否公开" :label-width="formLabelWidth2">
              <el-select v-model="status" placeholder="请选择是否公开">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="newalbum = false">取 消</el-button>
            <el-button type="primary" @click="createsubmit">确 定</el-button>
          </div>
        </el-dialog>
      </el-header>
      <el-main class="mysq-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "myshequ",
  components: {},
  data() {
    return {
      comName: this.$route.path,
      flag1: true,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      collection: false,
      uid:localStorage.getItem('uid'),
      username: "",
      txurl: "/img/tx6.27d6e020.jpg",
      bgurl:'http://188.131.192.194/head_images/U1wjUvsbuKkrlGwO5K2h339nJ2wf0WdnYBTDxBhf.jpeg',
      introduction: "做个自我介绍吧..",
      follows: '',
      fans: '',
      newalbum: false,
      alname:'',
      alinfo:'',
      status:0,
      options:[
        {
          value: 0,
          label: "公开"
        },
        {
          value: 1,
          label: "私密"
        }
      ],
      formLabelWidth1: "100px",
      formLabelWidth2: "100px"
    };
  },
  created() {
    this.getinfo()
    if (/follows/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = false;
    } else if (/fans/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = false;
    } else if (/mywork/gi.test(this.comName)) {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = false;
    } else if (/mylike/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = false;
    } else if (/mycollection/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = true;
    } else if (/detail/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.flag4 = false;
      this.collection = false;
    } else if (/myalbum/gi.test(this.comName)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.flag4 = true;
      this.collection = false;
    }
  },
  watch: {
    $route: function(to) {
      if (/follows/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = false;
    } else if (/fans/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = false;
    } else if (/mywork/gi.test(to.path)) {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = false;
    } else if (/mylike/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = false;
    } else if (/mycollection/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.collection = true;
    } else if (/detail/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.flag4 = false;
      this.collection = false;
    } else if (/myalbum/gi.test(to.path)) {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.flag4 = true;
      this.collection = false;
    }
    }
  },
  methods: {
    getinfo(){
      this.$http.post('/api/basicInfo',{uid:localStorage.getItem('uid')},{emulateJSON:true})
     .then(result=>{
       if (result.body[0].username) {
          this.username=result.body[0].username;
       }else{
          this.username='注册用户';
       }
       this.introduction=result.body[0].introduce;
       this.txurl=result.body[0].head_image;
       this.follows=result.body[0].follow;
       this.fans=result.body[0].fans;
     })
    },
    createalbum(){
      this.newalbum=true;
    },
    createsubmit(){
      this.$http.post('/api/createGallery',{uid:this.uid,gallery_name:this.alname,status:this.status,description:this.alinfo},{emulateJSON:true})
      .then(res=>{
        if (res.body.message=="创建成功") {
          this.$message({
              message: "创建成功",
              type: "success",
              customClass: "zIndex"
            });
          this.$router.go(0)
          this.newalbum=false;
        }else{
          this.$message({
              message: "创建失败",
              type: "danger",
              customClass: "zIndex"
            });
          this.newalbum=false;
        }
      })
    },
    showalbum(){
      this.$router.push({path: "/community/mycommunity/myalbum",query:{uid:this.uid}})
    },
    showwork(){
      this.$router.push({path: "/community/mycommunity/mywork",query:{my:true,uid:this.uid}})
    },
    showlike(){
      this.$router.push({path: "/community/mycommunity/mylike",query:{my:true,uid:this.uid}})
    },
    showcollection(){
      this.$router.push({path: "/community/mycommunity/mycollection",query:{my:true,uid:this.uid}})
    },
    showfans(){
      this.$router.push({ path: "/community/mycommunity/fans",query:{fans:this.fans,uid:this.uid} });
    },
    showfollows(){
      this.$router.push({ path: "/community/mycommunity/follows",query:{follows:this.follows,uid:this.uid} });
    },
    show(data) {
      this.comName = data;
      if (/follows/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.collection = false;
      } else if (/fans/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.collection = false;
      } else if (/mywork/gi.test(this.comName)) {
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.collection = false;
      } else if (/mylike/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;
        this.flag4 = false;
        this.collection = false;
      } else if (/mycollection/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.collection = true;
      } else if (/detail/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.flag4 = false;
        this.collection = false;
      } else if (/myalbum/gi.test(this.comName)) {
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.flag4 = true;
        this.collection = false;
      }
    }
  }
};
</script>

<style>
.sq {
  min-height: 600px;
  height: auto;
}
.head {
  height: 350px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.head-bg {
  height: 350px;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  overflow: hidden;
}
.sq-ul {
  list-style: none;
  margin: 13% 0 0 0;
}
.sq-ul li {
  color: #ffffff;
  text-align: center;
}
.sq-tx {
  width: 120px;
  height: 120px;
  display: inline-block;
}
.sq-tx img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.sq-li2 {
  display: inline-block;
  position: relative;
  top: -20px;
}
.sq-btn-editfm {
  display: inline-block;
}
.sq-ul2 {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sq-name {
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 15px;
}
.sq-intr {
  margin-top: 15px;
  font-size: 13px;
}
.sq-ul3 {
  margin: 0;
  list-style: none;
}
.sq-ul3 span {
  color: #ffffff !important;
}
.sq-ul3 li {
  display: inline;
  font-size: 14px;
}
.sq-ul3 li:before {
  content: "/";
  color: #e0e0e0;
  font-size: 14px;
  margin: 0 10px;
}
.sq-btn-editfm {
  float: right;
  margin-right: 50px;
  position: relative;
  bottom: -65px;
}
.sq-btn-editfm span {
  color: #ffffff !important;
}
.sq-head {
  border-bottom: #bbbbbb solid 1px;
}
.sq-btn {
  text-align: center;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial,
    simsun, "宋体";
}
.sq-like {
  margin: 0 40px 0 50px;
}
.sq-collection {
  margin: 0 40px 0 0;
}
.sq-head-btn {
  position: relative;
  right: -31%;
}

.sq-btn span {
  font-size: 0.8rem;
  color: #000000;
}
.sq-btn-act {
  border-bottom: #41b93b solid 2px;
}
.sq-btn-act span {
  color: #41b93b;
}
.mysq-main {
  min-height: 500px;
  height: auto;
  width: auto;
  background-color: #f9f9f9;
}
.mysq-btn-al {
  margin-top: 8px;
  border: #009688 solid 1px !important;
}
.mysq-btn-al span {
  color: #009688;
}
</style>

