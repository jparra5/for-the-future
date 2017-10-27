import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDo from '@/components/ToDo'
import Calc from '@/components/Calc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      component: HelloWorld
    },
    {
      path: '/todo',
      component: ToDo
    },
    {
      path: '/calc',
      component: Calc
    }
  ]
})
