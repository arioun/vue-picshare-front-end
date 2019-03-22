<template>
  <div class="al">
    <el-row class="al-row">
      <el-col :span="5" class="al-col">
        <div class="al-two">
          <div class="al-one"></div>
        </div>
        <ul class="al-ul">
          <li class="al-name">城市</li>
          <li class="al-num">3张</li>
        </ul>
      </el-col>
      <el-col :span="5" class="al-col">
        <div class="al-two">
          <div class="al-one"></div>
        </div>
        <ul class="al-ul">
          <li class="al-name">城市</li>
          <li class="al-num">3张</li>
        </ul>
      </el-col>
      <el-col :span="5" class="al-col">
        <div class="al-two">
          <div class="al-one"></div>
        </div>
        <ul class="al-ul">
          <li class="al-name">城市</li>
          <li class="al-num">3张</li>
        </ul>
      </el-col>
      <el-col :span="5" class="al-col">
        <div class="al-two">
          <div class="al-one"></div>
        </div>
        <ul class="al-ul">
          <li class="al-name">城市</li>
          <li class="al-num">3张</li>
        </ul>
      </el-col>
      <el-col :span="5" class="al-col">
        <div class="al-two">
          <div class="al-one"></div>
        </div>
        <ul class="al-ul">
          <li class="al-name">城市</li>
          <li class="al-num">3张</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "album"
};
</script>

<style>
.al{
    margin-top: 10px;
}
.al-row{
    margin-left: 10px;
}
.al-col{
    width: 300px;
    height: 240px;
    margin: 10px 10px 10px 10px;
}
.al-one{
    width: 280px;
    height: 200px;
    background: url('../../assets/tj5.jpg') no-repeat;
    background-size: cover;
    position: relative;
    left: 15px;
    top: 10px;
}
.al-two{
    width: 280px;
    height: 200px;
    background: url('../../assets/tj4.jpg') no-repeat;
    background-size: cover;

}
.al-ul{
    margin: 15px 0 0 0;
    padding: 0;
}
.al-ul li{
    list-style: none;
    display: inline-block;
    
}
.al-name{
    float: left;
    font-size: 15px;
}
.al-num{
    font-size: 5px;
    color: #85888A;
    float: right;
}
</style>
