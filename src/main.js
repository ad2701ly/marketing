// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

Vue.config.productionTip = false

Vue.use(Buefy)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  MenuIcon,
  store,
  Buefy,
  router,
  components: { App },
  template: '<App/>'
})
