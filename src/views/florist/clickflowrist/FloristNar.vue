<template>
  <div class="None">
       <NarBar class="narcolor">
  <div slot="left">
    <div class="narleft">
  <img src="@/assets/img/left.png" alt="">
    <span>返回</span>
    </div>
  </div>
  <div slot="center" class="centercolor">
    <span>购花中心</span>
   </div>
  <div slot="rigth">
   <img src="@/assets/img/right.png" alt="">
  </div>
    </NarBar>
  </div>
</template>

<script>
import NarBar from '@/components/narbar/NarBar'
export default {
  name:'FloristNar',
  components:{
    NarBar,
  },

}
</script>

<style scoped>
.None{
   position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 1899px;
  z-index: 116;
}
.centercolor{
   text-align: center;
}
.narcolor{
  background-color: #1c1b1f;
}
.narleft{
  flex: 1;
  margin-left: 10px;
  position: relative;

}
.narleft img{
  position: absolute;
  left:px;
  top:10px;
  width: 24px;
  height: 24px;
  z-index: 114;
  
}
.narleft span{
  font-size: 17px;
  margin-left: 23px;
  color: rgb(255, 255, 255);
  
}
.centercolor span{
      color: rgb(255, 255, 255);
        font-size: 19px;
}
.narright{
  flex: 1;
  margin-left: 10px;
}
.narright img{
  position: absolute;
  right:5px;
  top:10px;
  width: 24px;
  height: 24px;
  z-index: 114;
  
}
</style>