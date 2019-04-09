<template>
    <div class="not">
        <ul class="not-ul">
            <li v-for="notice of notices" :key="notice.id" :class="[notice.flag?'not-active':'']">
                <div class="not-message">
                   {{notice.message}}
                   <el-button type="text" class="not-more">查看详情</el-button>
                </div>
                <div class="not-date">3月12日</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'notice',
    data() {
        return {
            notices:[
        {
            id:1,
            flag:true,
            message:'“在我们看来， 街头摄影是记录城市稍纵即逝的真实瞬间， 重拾散落于街头巷尾、 来自平凡生活的光辉。” 即刻 × 图虫，共同邀请你， 打破单调的生活， 去探索城市， 发现生活更多的乐趣！ 投稿作品均有机会获得在上海街头与大师共同展览的机会',
        },
        {
            id:2,
            flag:false,
            message:'picshare邀请你， 打破单调的生活， 去探索城市， 发现生活更多的乐趣！',
        },
        {
            id:3,
            flag:false,
            message:'picshare邀请你， 打破单调的生活， 去探索城市， 发现生活更多的乐趣！',
        },
    ]
        }
    },
}
</script>

<style>
.not{

}
.not-ul{
    list-style: none;
    display: block;
   padding: 0;
   margin: 20px 0 0 0;
}
.not-ul li{
    list-style: none;
    font-size: 14px;
    margin:  0 auto;
    display: block;
    width: 55%;
    min-height: 75px;
    height: auto;
    border-bottom: 1px solid #e0e0e0;
}
.not-active{
    background-color: #fff8db;
}
.not-message{
    display: inline-block;
    width: 80%;
    margin: 20px 0;
}
.not-date{
    font-size: 12px;
    color: #85888a;
    float: right;
    margin: 25px 0;
}
.not-more{
    display: inline-block;
    margin-left: 20px;
}

</style>