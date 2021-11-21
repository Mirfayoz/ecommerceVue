import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    children:[
      {
        path: 'tab/:tabid',
        name: 'Tab',
        component: () => import('../components/product/Tab.vue')
      }
    ]
  },
  {
    path: '/category/:slug',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/blog',
    name: 'News',
    component: () => import('../views/News.vue'),
  },
  {
    path:'/blog/:slug',
    name:'ViewsNews',
    component: () => import('../views/ViewsNews.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(to.hash){
      return{
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})

export default router
