import { createRouter, createWebHashHistory } from 'vue-router'

import Servicios from '../components/Servicios.vue'
import Home from '../components/Home.vue'
import Domus from '../paginae/Domus.vue'
import Batman from '../paginae/Batman.vue'
import Responsum from '../paginae/Responsum.vue'
import Grid from '../paginae/Grid.vue'

import Simpsons from '../paginae/Simpsons/Primus.vue'
import Layout from '../paginae/Simpsons/Layout.vue'
import Circa from '../paginae/Simpsons/Circa.vue'
import Collectione from '../paginae/Simpsons/Collectione.vue'
import Character from '../paginae/Simpsons/Character.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/responsum',
      component: Responsum,
    },
    {
      path: '/grid',
      component: Grid,
    },
    {
      path: '/simpsons',
      children: [
        {
          path: '',
          name: 'simpsons',
          component: Simpsons,
        },
        {
          path: 'about',
          component: Layout,
          children: [
            {
              path: '',
              name: 'simpsons-about',
              component: Circa,
            },
          ],
        },
        {
          path: 'gallery',
          component: Layout,
          children: [
            {
              path: '',
              name: 'simpsons-characters',
              component: Collectione,
            },
            {
              path: ':id',
              name: 'simpsons-character',
              component: Character,
            },
          ],
        },
      ],
    },
  ],
})

export default router