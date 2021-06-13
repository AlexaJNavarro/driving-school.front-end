import Simulacro from 'pages/Simulacro.vue'
import Forbidden from 'pages/errors/403.vue'
import NotFound from  'pages/404.vue'
import ListAlumn from 'pages/List_alum.vue'
import DetalleInstructor from 'pages/DetalleInstructor.vue'
import LogIn from 'pages/home/LogIn.vue'
import SignUp from 'pages/home/SignUp.vue'
import Paquete from 'pages/Paquete.vue'
import AgregarNotas from 'pages/notes/AgregarNotes.vue'
import ActualizarNotas from 'pages/notes/ActualizarNotas.vue'

import MyAccount from 'pages/student/MyAccount.vue'

import AdminHome from 'pages/admin/Home.vue'
import AdminAssign from 'pages/admin/Assign.vue'
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
        path: 'paquete',
        component: Paquete
<<<<<<< HEAD
      },
      {
        path: 'simulacro',
        component: Simulacro,
        meta: { requieresAuth: true }
      },
      {
        path: 'actualizar-notas',
        component: ActualizarNotas
      },
      {
        path: 'agregar-notas',
        component: AgregarNotas
      },


=======
      }

>>>>>>> ff53edafd4f68b21fff80bfb83dfb5a16be51e4c
    ]
  },
  {
    path: '/students',
    component: () => import('layouts/StudentLayout.vue'),
    children: [
      {
        path: 'my-account',
        component: MyAccount
      },
      {
        path: 'simulacro',
        component: Simulacro,
        meta: { requieresAuth: true }
      }
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '/',
        component: AdminHome
      },
      {
        path: 'assign',
        component: AdminAssign
      }
    ],
  },

  {
    path: '/instructor',
    component: () => import('layouts/InstructorLayout.vue'),
    children: [
      {
        path: '',
        component: DetalleInstructor
      },
      {
        path: 'studends',
        component: ListAlumn,
      },
      {
        path: 'actualizar-notas',
        component: ActualizarNotas
      },
      {
        path: 'agregar-notas',
        component: AgregarNotas
      },
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
