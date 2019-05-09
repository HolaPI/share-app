import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel'
import Detail from './components/Detail.vue'
import NewProducts from './components/NewProducts.vue'

Vue.use(VueRouter)
Vue.use(VueCarousel)

const router = new VueRouter({
  routes: [
    { path: '/', component: NewProducts },
    { path: '/product-detail', component: Detail }
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
