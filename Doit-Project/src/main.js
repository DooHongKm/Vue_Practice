// Vue 인스턴스 생성

import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './common/plugins/bootstrap-vue'
import './common/plugins/vue-slick'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)  // App.vue 컴포넌트 렌더링
}).$mount('#app')
