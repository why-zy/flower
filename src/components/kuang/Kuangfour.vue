<template>
  <div class="kuang">
                 
      <div class="kuangtext">
        <span class="span1">红玫瑰花束</span>
        <span class="span2">卡罗拉玫瑰 大花蕙兰</span>
        <span class="span3">郁金香 洋牡丹</span>
        <span class="span4">山里红 尤加利</span>
      <van-button color="#f7ddba" plain class="button"><span>点击购买</span></van-button>
      </div>

  </div>
</template>

<script>
export default {
    name:'Kuangfour'

}
</script>

<style scoped>
.kuang{
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 61, 43);
  background-color: rgb(249, 249, 249);
  position: absolute;
  left: 17px;
  top: 730px;
  width: 350px;
  height: 210px;
  z-index: 9;
  width: 338px;height: 191px;background: url("../../assets/img/threethen.png") no-repeat;border: 1px solid  rgb(254, 61, 43);
  border: 3px solid #ffffff;

}

.kuangtext{
    position:absolute;
    top: 25px;
    left: 17px;
    width: 200px;
    height: 160px;
}
.kuangtext span{
  display:block
}
 .span1{
    font-size:22px;
  color: #3a2d41;
    display: block;
}
.span2{
  font-size:14px;
  color: #3a2d41;
    display: block;
}
.span3{
  font-size: 14px;
  color: #3a2d41;
    display: block;
}
.span4{
  font-size:14px;
  color: #3a2d41;
  margin-right: 10px;
  display: block;
}
.van-button{
  background-color: #f7ddba;
}
.van-button span{
    font-size: 20px;
    color: #3a2d41;
    width:80px;
    height: 30px;
    padding: 0px;
    color: #3d3043;
    align-content: center;
}
</style>