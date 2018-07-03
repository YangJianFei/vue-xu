import Vue from 'vue'
import Router from 'vue-router'

const indexPage = r => require.ensure([], () => r(require('./pages/index/index.vue')), 'index');
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: '首页',
      component: indexPage
    }
  ]
});

/**
 * 全局路由钩子，不使用可删除
 */
/*router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('username') !== null) {
      next();
    } else {
      alert('please login')
      next({
        path: '/'
      })
    }
  } else {
    next();
  }
});*/

export default router
