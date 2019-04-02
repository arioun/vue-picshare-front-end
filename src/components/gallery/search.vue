<template>
  <div class="search">
    <div class="search-row">
    <el-row type="flex" justify="center" style="height:50px;">
      <el-col :span="11" class="search-col">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    </div>
    <div class="search-result">
      <div
        class="search-result-div"
        v-for="(img) in imgs"
        :key="img.id"
        :style="{width:img.width*200/img.height+'px',flexGrow:img.width*200/img.height}"
      >
        <i :style="{paddingBottom:img.height/img.width*100+'%'}"></i>
        <img :src="img.url">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      input: "",
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
      ]
    };
  },
  methods: {}
};
</script>
<style>
.search {
  min-height: 550px;
  height: auto;
  background-color: #f5f5f5;
}
.search-row {
  background-color: #fff;
  height: 60px;
  position: fixed;
  top: 47px;
  width: 100%;
  z-index: 9999;
}
.search-col {
  position: absolute;
  margin-top: 10px;
}
.search-result {
  min-height: 300px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  padding-top: 80px;
}
.search-result::after {
  content: "";
  flex-grow: 999999999;
}

.search-result-div {
  margin: 2px;
  background-color: violet;
  position: relative;
  overflow: hidden;
}

.search-result-div i {
  display: block;
}

.search-result-div img {
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
  cursor: pointer;
  transition: all 0.6s;
}
.search-result-div img:hover {
  transform: scale(1.2);
}
</style>

