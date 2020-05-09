<template>
  <div>
    <FloristNar></FloristNar>
    <div class="twoimg">  
      <img src="@/assets/img/two.png" alt="">
    </div>
    <Floristboder></Floristboder>
    <Floristcenter></Floristcenter>
    <div class="siximg">
      <img src="../../assets/img/six.png" alt="">
      <Florisbinary></Florisbinary>
    </div>
  </div>
</template>

<script>
import FloristNar from './clickflowrist/FloristNar'
import Floristboder from './clickflowrist/Floristboder'
import Floristcenter from './clickflowrist/Floristcenter'
import Florisbinary from './clickflowrist/Florisbinary'
export default {
  name:'Florist',
  components:{
    FloristNar,
    Floristboder,
    Floristcenter,
    Florisbinary
  },
  data(){
    return{

    }
  }
  

}
</script>

<style scoped>
.centercolor {
  font-size: 19px;
  font-family: "PingFang";
  color: rgb(255, 255, 255);
  text-align: center;
}
.twoimg img{
    position: absolute;
  left: 0px;
  top: 44px;
  width: 100%;
  height: 215px;
  z-index: 113;
  vertical-align:bottom;
}
.siximg img{
    position: absolute;
  left: 271px;
  top: 375px;
  width: 104px;
  height: 121px;
  z-index: 110;
}
</style>