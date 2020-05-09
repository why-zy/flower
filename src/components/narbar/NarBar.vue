<template>
    <div class="nar-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nar-bar {
    display: flex;
    line-height: 44px;
    justify-content: center;
    align-items: center;
  
  }

  .left{
    width: 40px;
    line-height: 44px;
     flex: 1;
  }
 .right{
     width: 40px;
     line-height: 44px;
     
     flex: 1;
 }
.right img{
  width: 20px;
  height: 20px;
}
  .center {
    flex: 1;
  }

</style>