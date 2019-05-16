import Vue from 'vue'
import Router from 'vue-router'
import InputArea from './views/InputArea.vue'
import ConfirmArea from './views/ConfirmArea.vue'
import CompleteArea from './views/CompleteArea.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/InputArea',
      name: 'InputArea',
      component: InputArea
    },
    {
      path: '/ConfirmArea',
      name: 'ConfirmArea',
      component: ConfirmArea
    },
    {
      path: '/CompleteArea',
      name: 'CompleteArea',
      component: CompleteArea
    },
    {
      path: '*',
      redirect: '/InputArea'
    }
  ]
})
