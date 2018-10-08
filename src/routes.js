import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarInfo from './pages/CarInfo'
import Error from './pages/Error'

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarInfo,
          name: 'CarInfo',
          beforeEnter (to, from, next) {
            console.log('beforeEnter')
          }
        }
      ]
    },
    {
      path: '*',
      component: Error
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 300
    }
  }
})