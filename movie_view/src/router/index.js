import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path: '/User',
          name: 'hello xym 2020.2.7',
          component: User
      },
      {
          path: '/Index',
          name: 'Index',
          component: Index
      }
  ]
})
