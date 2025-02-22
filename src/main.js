import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'material-icons/css/material-icons.css'
import App from './App'
import router from './router'

Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'blue'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
