import { createRouter, createWebHistory } from 'vue-router'

// components
import Home from '@/pages/Home.vue'
import ThreadShow from '@/pages/ThreadShow.vue'
import NotFound from '@/pages/NotFound.vue'

// Source Data
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: ThreadShow,
        props: true,
        beforeEnter(to, from, next) {
            const threadExists = sourceData.threads.find(t => t.id === to.params.id)

            if (threadExists) {
                return next()
            } else {
                next({
                    name: 'NotFound',
                    params: { pathMatch: to.path.substring(1).split('/') },
                    query: to.query,
                    hash: to.hash,
                })
            }
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
})