import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import Gridstack from '../components/gridstack-demo.vue';
import debug from '../components/debug.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'debug',
            component: debug,
        },
        {
            path: '/debug',
            name: 'debug',
            component: debug,
        },
    ],
});
