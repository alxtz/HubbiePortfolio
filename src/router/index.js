import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Home from '@/components/Home'

import Bump from '@/components/pages/Bump'
import CloudReceipt from '@/components/pages/CloudReceipt'
import MusicGalaxy from '@/components/pages/MusicGalaxy'
import PerfectPitchTrain from '@/components/pages/PerfectPitchTrain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Bump',
      name: 'Bump',
      component: Bump
    },
    {
      path: '/PerfectPitchTrain',
      name: 'PerfectPitchTrain',
      component: PerfectPitchTrain
    },
    {
      path: '/CloudReceipt',
      name: 'CloudReceipt',
      component: CloudReceipt
    },
    {
      path: '/MusicGalaxy',
      name: 'MusicGalaxy',
      component: MusicGalaxy
    }
  ]
})
