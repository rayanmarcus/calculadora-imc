import Vue from 'vue'
import App from './App.vue'
import './assets/scss/app.scss'
import money from 'v-money'

Vue.use(money)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
