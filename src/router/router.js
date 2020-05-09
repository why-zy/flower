import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/florist'
    },
    {
        name:'Florist',
        path:'/florist',
        component: ()=> import('@/views/florist/Florist.vue')
    },
    {
        name:'Flower list query',
        path:'/flower list query',
        component: ()=> import('@/views/flower list query/Flower list query.vue')
    },
    {
        name:'Flower material',
        path:'/flower material',
        component: ()=>import('@/views/flower material/Flower material.vue')
    },
    {
        name:'Shopping Cart',
        path:'/shopping Cart',
        component: ()=>import('@/views/shopping Cart/Shopping Cart.vue')
    },
]

const router = new VueRouter({
  mode: 'history',  // 路由模式
  base: process.env.BASE_URL,
  routes
})

export default router
