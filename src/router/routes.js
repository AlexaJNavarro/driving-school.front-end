import Simulacro from 'pages/Simulacro.vue'
import Forbidden from 'pages/errors/403.vue'
import NotFound from  'pages/404.vue'
import ListAlumn from 'pages/List_alum.vue'
import DetalleInstructor from 'pages/DetalleInstructor.vue'
import LogIn from 'pages/home/LogIn.vue'
import SignUp from 'pages/home/SignUp.vue'

import MyAccount from 'pages/student/MyAccount.vue'
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
        path: 'log-in',
        component: LogIn,
      },
      {
        path: 'sign-up',
        component: SignUp,
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
        path: 'simulacro',
        component: Simulacro
      }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/StudentLayout.vue'),
    children: [
      {
        path: 'my-account',
        component: MyAccount
      }
    ],
  }
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
