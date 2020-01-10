//入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//把所有接口方法,都放到$http对象上
import http from './utils/api'
Vue.prototype.$http=http

Vue.config.productionTip = false;

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
