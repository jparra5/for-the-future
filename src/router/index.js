import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/chat/Chat'
import ToDo from '@/components/ToDo'
import Calc from '@/components/Calc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Chat
    },
    {
      path: '/chat',
      component: Chat
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
