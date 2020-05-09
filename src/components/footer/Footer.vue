<template>
  <div>
              <van-tabbar v-model="active" active-color="#d4937e" inactive-color="#000"
                    route

                    >
            <van-tabbar-item icon="home-o" to="/florist">购花中心</van-tabbar-item>
            <van-tabbar-item icon="qr" to="/flower list query">购物车</van-tabbar-item>
            <van-tabbar-item icon="cart-o" to="/flower material">花材</van-tabbar-item>
             <van-tabbar-item icon="shop-o" to="/shopping Cart">花务员</van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>
export default {
    name:'Footer',
}
</script>

<style>

</style>