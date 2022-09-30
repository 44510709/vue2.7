import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
    //微信授权登录
    // if(store.state.openid){
    //     next()
    //     return false;
    // }
    // const href = window.location.href;
    // //判断code
    // if (href.indexOf('/?code') > -1) { //微信授权登录
    //     //授权获取code
    //     let { queryObj } = await getCodeState(href);
    //     //更新授权用户
    //     await store.dispatch('set_openid', queryObj.code)
    // } else {
    //     let uri = btoa(encodeURIComponent(href));
    //     // let uri = codeURI(window.location.href);
    //     var url = `https://www.ichelaba.com/wx_oauth.php?backurl=${uri}`;
    //     // window.location.href = url;
    // }
    next()
})

export default router
