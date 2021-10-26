import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/inicio',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/contactos',
        name: 'Contactos',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contactos.vue')
    },

    {
        path: '/publicidad',
        name: 'Publicidad',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Publicidad.vue')
    },

    {
        path: '/inicio',
        name: 'Inicio',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Inicio.vue')
    },


]

const router = new VueRouter({
    routes
})

export default router