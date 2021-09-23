import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/administrador',
    name: 'Administrador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "administrador" */ '../views/Administrador.vue')
  },
  {
    path: '/listayregistro',
    name: 'ListayRegistro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "administrador" */ '../views/ListayRegistro.vue')
  },
  {
    path: '/preoperacional',
    name: 'Preoperacional',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/Preoperacional.vue')
  },
  {
    path: '/listavehiculos',
    name: 'Listavehiculos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/Listavehiculos.vue')
  },
  {
    path: '/usuarioconductor',
    name: 'Usuarioconductor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/Usuarioconductor.vue')
  },
  {
    path: '/superusuario',
    name: 'Superusuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/Superusuario.vue')
  },
  {
    path: '/paginaayuda',
    name: 'Paginaayuda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/Paginaayuda.vue')
  },
  {
    path: '/conductorpreope',
    name: 'Conductorpreope',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/Conductorpreope.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
