<template>
  <div class="ga">
    <div class="gbanner">
      <el-row type="flex" justify="center">
        <el-col :span="10" :offset="0" class="gel-col">
          <el-input placeholder="搜索图库内的图片" v-model="searchwords">
            <el-button slot="append" icon="el-icon-search" class="tuku-search" @click="search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="gmain">
      <el-row type="flex" justify="center">
        <el-col :span="1" :offset="0" class="gel-col2">
          <img src="../../assets/dian.png">
        </el-col>
        <el-col :span="4" class="gel-col2">
          <h1>热门专题</h1>
        </el-col>
        <el-col :span="1" :offset="0" class="gel-col2">
          <img src="../../assets/dian.png">
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4" :offset="0" class="gel-col3">
          <h1>THEME</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="height:46px;">
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" v-for="(sort,i) in sorts" v-if="i<10" :key="sort.id"
         :class="['gel-col4',sort.flag?'gtuku-active':'']">
          <el-button type="text" @click="sortacitve(sort.id)">{{sort.name}}</el-button>
        </el-col>
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" class="gel-col4 gsp">
          <el-button plain round size="mini" @click="more">更多</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="height:46px;" v-if="show">
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" v-for="(sort,i) in sorts" v-if="i>10" :key="sort.id"
          :class="['gel-col4',sort.flag?'gtuku-active':'']">
          <el-button type="text" @click="sortacitve(sort.id)">{{sort.name}}</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="gtuku">
      <div
        class="gtuku-div"
        v-for="(img) in imgs"
        :key="img.id"
        :style="{width:img.width*200/img.height+'px',flexGrow:img.width*200/img.height}"
      >
        <i :style="{paddingBottom:img.height/img.width*100+'%'}"></i>
        <img :src="img.url" @click="showdia(img)">
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="70%">
        <div class="dia-cont">
          <img :src="diaitem.url">
        </div>
        <el-button type="text" @click="downpic(diaitem.url)">下载</el-button>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: "gallery",
  data() {
    return {
      show:false,
      searchwords:'',
      dialogVisible: false,
      diaitem: [],
      imgs: [
        {
          url: "https://xieranmaya.github.io/images/cats/photo-103450229.jpg",
          width: 675,
          height: 900
        },
        {
          url: "https://xieranmaya.github.io/images/cats/photo-108273877.jpg",
          width: 1170,
          height: 780
        },
        {
          url: "https://xieranmaya.github.io/images/cats/photo-115203323.jpg",
          width: 1170,
          height: 780
        },
        {
          url: "https://xieranmaya.github.io/images/cats/photo-23583825.jpg",
          width: 2048,
          height: 1536
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-123942383.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-124559545.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-132046989.jpg",
          width: 1170,
          height: 780
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-132118343.jpg",
          width: 2000,
          height: 1339
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-132311221.jpg",
          width: 1920,
          height: 1080
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-132586903.jpg",
          width: 2000,
          height: 1334
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-135203031.jpg",
          width: 1000,
          height: 668
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-135626379.jpg",
          width: 2000,
          height: 1500
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-136947953.jpg",
          width: 2000,
          height: 1348
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-138378295.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-138436811.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-142950305.jpg",
          width: 2000,
          height: 1125
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-143046061.jpg",
          width: 843,
          height: 1000
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-143181649.jpg",
          width: 2000,
          height: 1298
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-144530143.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-144730939.jpg",
          width: 1000,
          height: 1000
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-145414771.jpg",
          width: 780,
          height: 1170
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-146038669.jpg",
          width: 2000,
          height: 1335
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-146231033.jpg",
          width: 2000,
          height: 1335
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-146914861.jpg",
          width: 843,
          height: 1000
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-147877407.jpg",
          width: 2000,
          height: 1334
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-147969173.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-148015373.jpg",
          width: 1170,
          height: 781
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-148704233.jpg",
          width: 1170,
          height: 884
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-148928293.jpg",
          width: 1170,
          height: 781
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-148950715.jpg",
          width: 1170,
          height: 775
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-21951271.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-21964829.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-22618399.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-31201539.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-34598868.jpg",
          width: 542,
          height: 768
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-47252094.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-51980510.jpg",
          width: 666,
          height: 1000
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-55601508.jpg",
          width: 666,
          height: 1000
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-65681789.jpg",
          width: 1840,
          height: 1232
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-70461471.jpg",
          width: 1000,
          height: 1000
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-71801901.jpg",
          width: 2000,
          height: 1335
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-71913567.jpg",
          width: 2000,
          height: 1328
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-72223295.jpg",
          width: 2000,
          height: 1335
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-72620185.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-74402039.jpg",
          width: 666,
          height: 1000
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-75097491.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-75186237.jpg",
          width: 2000,
          height: 1333
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-79250373.jpg",
          width: 2000,
          height: 1325
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-79692589.jpg",
          width: 670,
          height: 1000
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-7979718.jpg",
          width: 1024,
          height: 680
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-7980252.jpg",
          width: 1024,
          height: 680
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-81390687.jpg",
          width: 2000,
          height: 1591
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-81988949.jpg",
          width: 667,
          height: 1000
        },
        {
          url:
            "https://xieranmaya.github.io/images/cats/stock-photo-83149705.jpg",
          width: 775,
          height: 1170
        }
      ],
      sorts:[
        {id:0,name:"城市",flag:true},
        {id:1,name:"星空",flag:false},
        {id:2,name:"旅游",flag:false},
        {id:3,name:"下雪",flag:false},
        {id:4,name:"教育",flag:false},
        {id:5,name:"美食",flag:false},
        {id:6,name:"健身",flag:false},
        {id:7,name:"风景",flag:false},
        {id:8,name:"冬天",flag:false},
        {id:9,name:"金融",flag:false},
        {id:10,name:"背景",flag:false},
        {id:11,name:"医疗",flag:false},
        {id:12,name:"植物",flag:false},
        {id:13,name:"阅读",flag:false},
        {id:14,name:"动物",flag:false},
        {id:15,name:"科技",flag:false},
      ],
      sorts2:[
        
      ]
    };
  },
  methods: {
    sortacitve(key){
      for (let i= 0; i<16; i++) {
        this.sorts[i].flag=false;
      };
      this.sorts[key].flag=true;
    },
    more(){
      this.show?this.show=false:this.show=true;
    },
    search(){
      this.$router.push({path:'/gallery/search'});
    },
    showdia(item) {
      this.dialogVisible = true;
      this.diaitem = item;
    },
    downpic(domImg) {
    // 创建隐藏的可下载链接
    var eleLink = document.createElement('a');
    eleLink.download = domImg;
    eleLink.style.display = 'none';
    // 图片转base64地址
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = domImg.naturalWidth;
    var height = domImg.naturalHeight;
    context.drawImage(domImg, 0, 0);
    // 如果是PNG图片，则canvas.toDataURL('image/png')
    eleLink.href = canvas.toDataURL('image/jpeg');
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
}
  },
};
</script>

<style>
.gbanner {
  width: 100%;
  height: 400px;
  background: url("../../assets/tuku1.jpg") center no-repeat;
  background-size: cover;
}
.gel-col {
  padding-top: 20%;
}
.gel-col input {
  height: 50px;
  opacity: 0.8;
  border-right: none;
}
.tuku-search{
  background-color: rgba(0,0,0,0.1) !important;
  border: none !important;
}
.gel-col i {
  opacity: 1;
  color: #101010;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 5px;
}
.gmain {
  margin-top: 1%;
  margin-bottom: 1%;
  height: auto;
}
.gel-col2 {
  height: 60px;
}
.gel-col2 h1 {
  text-align: center;
  letter-spacing: 0.6em;
  font-size: 2rem;
  padding-left: 6%;
}
.gel-col2 img {
  width: 18px;
  height: 18px;
  margin-top: 70%;
  margin-left: 37%;
}
.gel-col3 h1 {
  text-align: center;
  letter-spacing: 0.4em;
  font-size: 1.3rem;
  padding-left: 5%;
}
.gel-col4{
  text-align: center;
  margin: 2px;
}
.gel-col4 span {
  color: #bfbfbf;
  text-align: center;
}
.gsp {
  margin-top: 0.4%;
}
.gtuku-active{
  border-bottom: #44a0ff solid 2px;
}
.gtuku-active span{
  color: #000;
}
.gtuku {
  height: auto;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

}

.gtuku::after {
  content: "";
  flex-grow: 999999999;
}

.gtuku-div {
  margin: 2px;
  background-color: #ededef;
  position: relative;
  overflow: hidden;
}

.gtuku-div i {
  display: block;
}

.gtuku-div img {
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
  cursor: pointer;
  transition: all 0.6s;
}
.gtuku-div img:hover{
  transform: scale(1.2);
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