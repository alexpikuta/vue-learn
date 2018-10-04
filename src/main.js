import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
