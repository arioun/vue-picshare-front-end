<template>
  <div class="sq">
    <div class="head">
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
                    <router-link to='/community/mycommunity/focus'>
                    <el-button type="text" @click="show('focus')">关注&nbsp;{{focus}}</el-button>
                  </router-link>
                    </li>
                  <li>
                    <router-link to='/community/mycommunity/follows'>
                    <el-button type="text" @click="show('follows')">粉丝&nbsp;{{follows}}</el-button>
                    </router-link>
                    </li>
                </ul>
              </li>
              <li class="sq-intr" v-text="introduction"></li>
            </ul>
          </li>
          <li class="sq-btn-editfm">
            <el-button type="text">编辑封面&nbsp;></el-button>
          </li>
        </ul>
      </div>
    </div>
    <el-container>
      <el-header>
        <el-row type="flex" justify="center" class="sq-head">
          <el-col :span="2" :offset="6" :class="['sq-btn',flag1?'sq-btn-act':'']">
            <router-link to="/community/mycommunity/mywork">
              <el-button type="text" @click="show('mywork')">我的作品</el-button>
            </router-link>
          </el-col>
          <el-col :span="2" :offset="2" :class="['sq-btn',flag2?'sq-btn-act':'']">
            <router-link to="/community/mycommunity/mylike">
            <el-button type="text" @click="show('like')">喜欢</el-button>
            </router-link>
          </el-col>
          <el-col :span="2" :offset="2" :class="['sq-btn',flag3?'sq-btn-act':'']">
            <router-link to="/community/mycommunity/myalbum">
            <el-button type="text" @click="show('album')">相册</el-button>
            </router-link>
          </el-col>
          <el-col :span="2" :offset="6">
            <el-button size="mini" class="mysq-btn-al" @click="newalbum = true">新建相册</el-button>
          </el-col>
        </el-row>
        
        <el-dialog title="新建相册" :visible.sync="newalbum">
          <el-form :model="form">
            <el-form-item label="相册名称" :label-width="formLabelWidth1">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否公开" :label-width="formLabelWidth2">
              <el-select v-model="form.visible" placeholder="请选择是否公开">
                <el-option label="是" value="visible"></el-option>
                <el-option label="否" value="unvisible"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="newalbum = false">取 消</el-button>
            <el-button type="primary" @click="newalbum = false">确 定</el-button>
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
import mywork from "./mywork.vue";
import like from "./like.vue";
import album from "./album.vue";
import focus from './focus.vue'
import follows from './follows.vue'
export default {
  name: "myshequ",
  components: {
    mywork,
    like,
    album,
    focus,
    follows
  },
  data() {
    return {
      comName: "mywork",
      flag1: true,
      flag2: false,
      flag3: false,
      username: "Discovery",
      txurl: "/img/tx6.27d6e020.jpg",
      introduction: "做个自我介绍吧..",
      focus: 12,
      follows: 15,
      newalbum:false,
      form: {
          name: '',
          visible: ''
        },
        formLabelWidth1: '100px',
        formLabelWidth2: '100px',
    };
  },
  methods: {
    show(data) {
      this.comName = data;
    }
  },
  updated() {
    if (this.comName == "mywork") {
      (this.flag1 = true), (this.flag2 = false), (this.flag3 = false);
    } else if (this.comName == "like") {
      (this.flag1 = false), (this.flag2 = true), (this.flag3 = false);
    } else if (this.comName == "album") {
      (this.flag1 = false), (this.flag2 = false), (this.flag3 = true);
    }else{
        (this.flag1 = false), (this.flag2 = false), (this.flag3 = false);
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
  background: url("../../assets/shequ-bg.jpg") no-repeat;
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
.sq-ul3 span{
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
  background-color: #F9F9F9;
}
.mysq-btn-al {
  margin-top: 8px;
  border: #009688 solid 1px !important;
}
.mysq-btn-al span {
  color: #009688;
}
</style>

