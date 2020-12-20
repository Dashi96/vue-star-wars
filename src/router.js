import Vue from 'vue'
import Router from 'vue-router'
import Planets from './views/Planets.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Planets',
      component: Planets
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: () => import('./views/Statistics')
    },
    {
      path: '/planet/:id',
      name: 'Planet',
      props: {
        id: '',
      },
      component: () => import('./views/Planet.vue')
    },
  ]
})

