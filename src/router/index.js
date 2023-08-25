 import { createRouter, createWebHashHistory } from 'vue-router'
 import Dashboard from '@/pages/Dashboard.vue'
 import AboutContent from '@/pages/AboutContent.vue'
 import NotFound from '@/pages/NotFound.vue'

 const routes = [{
         path: '/dashboard',
         name: 'Dashboard',
         component: Dashboard
     },
     {
         path: '/about',
         name: 'about',
         component: AboutContent
             // route level code-splitting
             // this generates a separate chunk (about.[hash].js) for this route
             // which is lazy-loaded when the route is visited.
             //   component: () =>
             //    import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
     },
     {

         path: '/404',
         name: 'NotFound',
         component: NotFound
     },
     {

         path: '/:catchAll(.*)',
         redirect: '/404'

     }
 ]

 const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
 })

 export default router