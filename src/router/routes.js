import Simulacro from 'pages/Simulacro.vue'
import Forbidden from 'pages/errors/403.vue'
import NotFound from  'pages/404.vue'
import ListAlumn from 'pages/List_alum.vue'
import DetalleInstructor from 'pages/DetalleInstructor.vue'
const routes = [
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
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
      },
      {
        path: '404',
        component: NotFound,
      },
      {
        path: 'listar-alumno',
        component: ListAlumn,
      },
      {
        path: 'instructor',
        component: DetalleInstructor,
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
