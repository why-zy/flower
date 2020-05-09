<template>
  <div class="fcenter">
   <div class="fivecenter">
       <img src="@/assets/img/five.png" alt="">
   </div>
   <Kuang></Kuang>
    <Kuangtwo></Kuangtwo>
   <Kuangthree></Kuangthree>
   <Kuangfour></Kuangfour>
   <Kuangfive></Kuangfive>
  </div>
</template>

<script>
import Kuang from '../../../components/kuang/Kuang'
import Kuangtwo from '../../../components/kuang/Kuangtwo'
import Kuangthree from '../../../components/kuang/Kuangthree'
import Kuangfour from '../../../components/kuang/Kuangfour'
import Kuangfive from '../../../components/kuang/Kuangfive'
export default {
    name:'Floristcenter',
    components:{
        Kuang,
        Kuangtwo,
        Kuangthree,
        Kuangfour,
        Kuangfive
    }

}
</script>

<style>
.fcenter{
background-color: rgb(241, 85, 111);
  position: absolute;
  top: 396px;
  width: 100%;
  height: 1460px;
  z-index: 1;
}
.fivecenter{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 375px;
  z-index: 109;
}
.fivecente img{
  position: absolute;
  left: 0px;
  top: 10px;
  width: 375px;
  height: 63px;
  z-index: 107;
}

</style>