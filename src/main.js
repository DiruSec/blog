import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

router.afterEach(()=>{
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
