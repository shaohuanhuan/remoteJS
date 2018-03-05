import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import remoteJS from '@/views/testRemote'
import remoteJSComp from '@/components/remoteJs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/remoteJS',
      name: 'remoteJS',
      component: remoteJS
    }, {
      path: '/remoteJSComp',
      name: 'remoteJSComp',
      component: remoteJSComp
    }
  ]
})
