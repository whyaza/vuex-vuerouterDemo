// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//全局组件引入
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//路由组件引入
import y1 from './components/y1'
import y2 from './components/y2'

//引用store对象
import store from './store/index'

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/y1', component:  y1},
    {path: '/y2', component:  y2},
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
