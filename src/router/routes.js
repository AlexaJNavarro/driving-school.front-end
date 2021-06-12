import Simulacro from 'pages/Simulacro.vue'
import Forbidden from 'pages/errors/403.vue'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'simulacro',
        component: Simulacro
      },
      {
        path: '403',
        component: Forbidden,
      }
    ]
  },
  // {
  //   path: '/simulacro',
  //   component: Simulacro
  // },

  // {
  //   path: '*',
  //   component: () => import('pages/Error404.vue')
  // },
]

export default routes
