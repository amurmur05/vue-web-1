import { createRouter, createWebHashHistory } from 'vue-router'

import Servicios from '../components/Servicios.vue'
import Home from '../components/Home.vue'
import Domus from '../paginae/Domus.vue'
import Batman from '../paginae/Batman.vue'
import Simpsons from '../paginae/Simpsons.vue'
import Responsum from '../paginae/Responsum.vue'
import Grid from '../paginae/Grid.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [{
  path: '/grid',
  component: Grid,
},
    {
      path: '/',
      component: Domus,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/servicios',
      component: Servicios,
    },
    {
      path: '/domus',
      component: Domus,
    },
    {
      path: '/batman',
      component: Batman,
    },
    {
      path: '/simpsons',
      component: Simpsons,
    },
    {
      path: '/responsum',
      component: Responsum,
    },
  ],
})

export default router