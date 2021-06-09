import Simulacro from 'pages/Index.vue'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/simulacro',
    name: 'Simulacro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/simulacro',
        name: 'Simulacro',
        component: Simulacro
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },



]

export default routes
