import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//设置路由 全局前置守卫函数
router.beforeEach((to, from, next) => {


  //动态更新应用的标题
  document.title = to.meta.title;

  var token = localStorage.getItem('token');


  // 放权限管理
  var accessRoutes = [];

  if (accessRoutes.indexOf(to.path) != -1) {
    if (token) {
      next();//允许跳路由
    } else {
      next('/login');//允许跳路由,但是会重定向到登录页
    }
  } else {
    next();//允许跳路由
  }
})

//设置路由 全局后置守卫函数
router.afterEach((to, from) => {
  

})

export default router
